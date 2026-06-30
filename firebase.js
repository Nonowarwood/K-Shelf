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
      photoURL:    raw.photoURL    ?? null,
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
    if (payload.photoURL    !== undefined) toWrite.photoURL    = payload.photoURL;
    await setDoc(userDocRef(uid), toWrite, { merge: true });
    return true;
  } catch(e) {
    showDebugToast("❌ Firestore: " + e.code, "#f87171");
    return false;
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
function showDebugToast(msg, color="#1db954") {
  const t = document.createElement("div");
  t.style.cssText = `position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:${color};color:#000;padding:10px 18px;border-radius:20px;font-size:13px;font-weight:700;z-index:9999;max-width:90vw;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.4)`;
  t.innerText = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 5000);
}

async function initUserData(user) {
  showDebugToast("🔄 Connexion Firebase... UID: " + user.uid.slice(0,8));
  const data = await readFromFirestore(user.uid);

  if (data && data.collection && Object.keys(data.collection).length > 0) {
    showDebugToast("✅ Données Firestore trouvées !");
    window.collectionData = data.collection;
    localStorage.setItem("kshelf_save", JSON.stringify(data.collection));
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
    if (data.photoURL) {
      localStorage.setItem(`kshelf_photo_${user.uid}`, data.photoURL);
    }
  } else {
    showDebugToast("🆕 Première connexion, sauvegarde en cours...", "#f59e0b");
    // Forcer le chargement des données par défaut
    if (!window.collectionData || Object.keys(window.collectionData).length === 0) {
      window.collectionData = window.defaultCollectionData || {};
    }
    const result = await writeToFirestore(user.uid, {
      collection:  window.collectionData,
      photocards:  window.photocardsData  || [],
      binderPages: window.binderTotalPages || 1,
    });
    showDebugToast(result ? "✅ Sauvegarde OK !" : "❌ Erreur sauvegarde", result ? "#1db954" : "#f87171");
  }

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
  const ok = await writeToFirestore(user.uid, { pseudo });
  showDebugToast(ok ? "✅ Profil sauvegardé" : "❌ Erreur sauvegarde profil", ok ? "#1db954" : "#f87171");
  updateProfileUI(user);
  closeProfileModal();
};

// Compresse une image en redimensionnant + réduisant la qualité JPEG
function compressImage(file, maxSize = 200, quality = 0.75) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > height) {
          if (width > maxSize) { height *= maxSize / width; width = maxSize; }
        } else {
          if (height > maxSize) { width *= maxSize / height; height = maxSize; }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

window.uploadProfilePhoto = async function(input) {
  const user = window._currentUser;
  if (!user || !input.files[0]) return;
  try {
    const compressed = await compressImage(input.files[0], 200, 0.75);
    localStorage.setItem(`kshelf_photo_${user.uid}`, compressed);
    updateProfileUI(user);
    const ok = await writeToFirestore(user.uid, { photoURL: compressed });
    showDebugToast(ok ? "✅ Photo sauvegardée" : "❌ Erreur photo", ok ? "#1db954" : "#f87171");
  } catch(e) {
    showDebugToast("❌ Erreur compression photo", "#f87171");
  }
};

// ==========================================
// MODAL PROFIL
// ==========================================
window.openProfileModal  = () => document.getElementById("profile-modal-overlay")?.classList.add("visible");
window.closeProfileModal = () => document.getElementById("profile-modal-overlay")?.classList.remove("visible");
