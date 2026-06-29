// ==========================================
// FIREBASE AUTH + FIRESTORE — K-Shelf
// ==========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSuRQEdiSo61wc2DrguCiLIrwoqDEHfJ8",
  authDomain: "k-shelf.firebaseapp.com",
  projectId: "k-shelf",
  storageBucket: "k-shelf.firebasestorage.app",
  messagingSenderId: "640794546993",
  appId: "1:640794546993:web:81107074929a4013f69610"
};

const app      = initializeApp(firebaseConfig);
const auth     = getAuth(app);
const db       = getFirestore(app);
const provider = new GoogleAuthProvider();

window._currentUser = null;
let _unsubscribe    = null;

// ==========================================
// HELPERS — sérialisation JSON string
// Les objets complexes sont stockés en string
// pour éviter les limites Firestore sur les maps
// ==========================================
function userDocRef(uid) {
  return doc(db, "users", uid, "kshelf", "data");
}

async function readFromFirestore(uid) {
  try {
    const snap = await getDoc(userDocRef(uid));
    if (!snap.exists()) return null;
    const raw = snap.data();
    return {
      collection:  raw.collection  ? JSON.parse(raw.collection)  : null,
      photocards:  raw.photocards  ? JSON.parse(raw.photocards)  : null,
      binderPages: raw.binderPages ?? null,
      pseudo:      raw.pseudo      ?? null,
    };
  } catch(e) {
    console.error("❌ Firestore read error:", e);
    return null;
  }
}

async function writeToFirestore(uid, payload) {
  try {
    const toWrite = { updatedAt: Date.now() };
    if (payload.collection  !== undefined) toWrite.collection  = JSON.stringify(payload.collection);
    if (payload.photocards  !== undefined) toWrite.photocards  = JSON.stringify(payload.photocards);
    if (payload.binderPages !== undefined) toWrite.binderPages = payload.binderPages;
    if (payload.pseudo      !== undefined) toWrite.pseudo      = payload.pseudo;
    await setDoc(userDocRef(uid), toWrite, { merge: true });
    console.log("✅ Firestore sync OK");
  } catch(e) {
    console.error("❌ Firestore write error:", e);
  }
}

// ==========================================
// AUTH
// ==========================================
window.signInWithGoogle = async function() {
  try {
    await signInWithPopup(auth, provider);
  } catch(e) {
    console.error("Connexion Google:", e);
    alert("Connexion impossible : " + e.message);
  }
};

window.signOutUser = async function() {
  if (_unsubscribe) { _unsubscribe(); _unsubscribe = null; }
  await signOut(auth);
  window._currentUser = null;
  clearProfileUI();
  closeProfileModal();
  if (window._loadLocalData) window._loadLocalData();
};

// ==========================================
// OBSERVER AUTH
// ==========================================
onAuthStateChanged(auth, async (user) => {
  if (user) {
    window._currentUser = user;
    await initUserData(user);
    updateProfileUI(user);
    startRealtimeSync(user);
  } else {
    window._currentUser = null;
    if (_unsubscribe) { _unsubscribe(); _unsubscribe = null; }
    clearProfileUI();
    if (window._loadLocalData) window._loadLocalData();
  }
});

// ==========================================
// INIT DONNÉES — lecture Firestore
// ==========================================
async function initUserData(user) {
  console.log("🔄 Chargement Firestore pour", user.uid);
  const data = await readFromFirestore(user.uid);

  if (data && (data.collection || data.photocards !== null)) {
    // ✅ Données trouvées → charger depuis Firestore
    console.log("✅ Données Firestore trouvées, chargement...");

    if (data.collection) {
      window.collectionData = data.collection;
      localStorage.setItem("kshelf_save", JSON.stringify(data.collection));
    }
    if (data.photocards !== null) {
      window.photocardsData = data.photocards;
      localStorage.setItem("kshelf_photocards", JSON.stringify(data.photocards));
    }
    if (data.binderPages !== null) {
      window.binderTotalPages = data.binderPages;
      localStorage.setItem("kshelf_binder_pages", data.binderPages);
    }
    if (data.pseudo) {
      localStorage.setItem(`kshelf_pseudo_${user.uid}`, data.pseudo);
    }
  } else {
    // 🆕 Première connexion → pousser les données par défaut
    console.log("🆕 Première connexion, push des données par défaut...");
    // S'assurer que les données par défaut sont chargées
    if (!window.collectionData || Object.keys(window.collectionData).length === 0) {
      if (window.defaultCollectionData) window.collectionData = window.defaultCollectionData;
    }
    await writeToFirestore(user.uid, {
      collection:  window.collectionData  || {},
      photocards:  window.photocardsData  || [],
      binderPages: window.binderTotalPages || 1,
    });
  }

  // Rafraîchir l'UI
  if (window.initSidebar)   window.initSidebar();
  if (window.showDashboard) window.showDashboard();
}

// ==========================================
// SYNC TEMPS RÉEL
// ==========================================
function startRealtimeSync(user) {
  if (_unsubscribe) _unsubscribe();
  _unsubscribe = onSnapshot(userDocRef(user.uid), (snap) => {
    if (!snap.exists()) return;
    const raw = snap.data();

    try {
      const remoteCollection  = raw.collection  ? JSON.parse(raw.collection)  : null;
      const remotePhotocards  = raw.photocards  ? JSON.parse(raw.photocards)  : null;
      const remoteBinderPages = raw.binderPages ?? null;

      // Mettre à jour seulement si différent (évite les boucles)
      if (remoteCollection && JSON.stringify(remoteCollection) !== JSON.stringify(window.collectionData)) {
        console.log("🔄 Sync collection depuis un autre appareil");
        window.collectionData = remoteCollection;
        localStorage.setItem("kshelf_save", JSON.stringify(remoteCollection));
        if (window.initSidebar)   window.initSidebar();
        if (window.showDashboard) window.showDashboard();
      }
      if (remotePhotocards && JSON.stringify(remotePhotocards) !== JSON.stringify(window.photocardsData)) {
        console.log("🔄 Sync photocards depuis un autre appareil");
        window.photocardsData = remotePhotocards;
        localStorage.setItem("kshelf_photocards", JSON.stringify(remotePhotocards));
      }
      if (remoteBinderPages !== null && remoteBinderPages !== window.binderTotalPages) {
        window.binderTotalPages = remoteBinderPages;
        localStorage.setItem("kshelf_binder_pages", remoteBinderPages);
      }
    } catch(e) {
      console.error("❌ Sync parse error:", e);
    }
  });
}

// ==========================================
// SYNC SORTANTE — appelée depuis script.js
// ==========================================
window.syncToFirestore = async function() {
  const user = window._currentUser;
  if (!user) return;
  await writeToFirestore(user.uid, {
    collection:  window.collectionData,
    photocards:  window.photocardsData,
    binderPages: window.binderTotalPages || 1,
  });
};

// ==========================================
// UI PROFIL
// ==========================================
function updateProfileUI(user) {
  const pseudo   = localStorage.getItem(`kshelf_pseudo_${user.uid}`) || user.displayName || "Utilisateur";
  const photoURL = localStorage.getItem(`kshelf_photo_${user.uid}`)  || user.photoURL    || "";

  setEl("profile-name-label",    el => el.innerText = pseudo);
  setEl("profile-avatar-letter", el => { el.innerText = pseudo[0].toUpperCase(); el.style.display = photoURL ? "none" : "block"; });
  setEl("profile-avatar-img",    el => { el.src = photoURL; el.style.display = photoURL ? "block" : "none"; });
  setEl("profile-logged-out",    el => el.style.display = "none");
  setEl("profile-logged-in",     el => el.style.display = "block");
  setEl("profile-pseudo-input",  el => el.value = pseudo);
  setEl("profile-email-display", el => el.value = user.email || "");
  setEl("profile-large-letter",  el => { el.innerText = pseudo[0].toUpperCase(); el.style.display = photoURL ? "none" : "block"; });
  setEl("profile-large-img",     el => { el.src = photoURL; el.style.display = photoURL ? "block" : "none"; });
}

function clearProfileUI() {
  setEl("profile-name-label",    el => el.innerText = "Se connecter");
  setEl("profile-avatar-letter", el => { el.innerText = "?"; el.style.display = "block"; });
  setEl("profile-avatar-img",    el => el.style.display = "none");
  setEl("profile-logged-out",    el => el.style.display = "block");
  setEl("profile-logged-in",     el => el.style.display = "none");
}

function setEl(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}

// ==========================================
// SAUVEGARDE PROFIL
// ==========================================
window.saveProfile = async function() {
  const user = window._currentUser;
  if (!user) return;
  const pseudo = document.getElementById("profile-pseudo-input")?.value.trim();
  if (!pseudo) return;
  localStorage.setItem(`kshelf_pseudo_${user.uid}`, pseudo);
  await writeToFirestore(user.uid, { pseudo });
  updateProfileUI(user);
  closeProfileModal();
};

window.uploadProfilePhoto = function(input) {
  const user = window._currentUser;
  if (!user || !input.files[0]) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    localStorage.setItem(`kshelf_photo_${user.uid}`, e.target.result);
    updateProfileUI(user);
  };
  reader.readAsDataURL(input.files[0]);
};

// ==========================================
// MODAL PROFIL
// ==========================================
window.openProfileModal  = () => document.getElementById("profile-modal-overlay")?.classList.add("visible");
window.closeProfileModal = () => document.getElementById("profile-modal-overlay")?.classList.remove("visible");
