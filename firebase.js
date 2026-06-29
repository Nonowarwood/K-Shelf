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
  updateDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSuRQEdiSo61wc2DrguCiLIrwoqDEHfJ8",
  authDomain: "k-shelf.firebaseapp.com",
  projectId: "k-shelf",
  storageBucket: "k-shelf.firebasestorage.app",
  messagingSenderId: "640794546993",
  appId: "1:640794546993:web:81107074929a4013f69610",
  measurementId: "G-1PF027WVR7"
};

const app      = initializeApp(firebaseConfig);
const auth     = getAuth(app);
const db       = getFirestore(app);
const provider = new GoogleAuthProvider();

window._firebaseAuth     = auth;
window._firebaseProvider = provider;
window._currentUser      = null;

let _unsubscribeSnapshot = null; // pour arrêter le listener temps réel

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
  if (_unsubscribeSnapshot) { _unsubscribeSnapshot(); _unsubscribeSnapshot = null; }
  await signOut(auth);
  closeProfileModal();
};

// ==========================================
// OBSERVER ÉTAT CONNEXION
// ==========================================
onAuthStateChanged(auth, async (user) => {
  if (user) {
    window._currentUser = user;
    await initUserData(user);
    updateProfileUI(user);
    startRealtimeSync(user);
  } else {
    window._currentUser = null;
    if (_unsubscribeSnapshot) { _unsubscribeSnapshot(); _unsubscribeSnapshot = null; }
    clearProfileUI();
    // Revenir aux données locales
    if (window._loadLocalData) window._loadLocalData();
  }
});

// ==========================================
// INIT DONNÉES UTILISATEUR
// ==========================================
async function initUserData(user) {
  const userRef = doc(db, "users", user.uid, "data", "collection");
  const snap    = await getDoc(userRef);

  if (snap.exists()) {
    // Charger depuis Firestore → écraser le localStorage
    const data = snap.data();
    if (data.collection)   { window.collectionData  = data.collection;   localStorage.setItem("kshelf_save", JSON.stringify(data.collection)); }
    if (data.photocards)   { window.photocardsData  = data.photocards;   localStorage.setItem("kshelf_photocards", JSON.stringify(data.photocards)); }
    if (data.binderPages)  { window.binderTotalPages = data.binderPages; localStorage.setItem("kshelf_binder_pages", data.binderPages); }
  } else {
    // Première connexion → pousser les données locales vers Firestore
    await pushToFirestore(user);
  }

  // Rafraîchir l'UI
  if (window.initSidebar)   window.initSidebar();
  if (window.showDashboard) window.showDashboard();
}

// ==========================================
// SYNC TEMPS RÉEL (écoute les changements)
// ==========================================
function startRealtimeSync(user) {
  if (_unsubscribeSnapshot) _unsubscribeSnapshot();
  const userRef = doc(db, "users", user.uid, "data", "collection");
  _unsubscribeSnapshot = onSnapshot(userRef, (snap) => {
    if (!snap.exists()) return;
    const data = snap.data();
    // Ne mettre à jour que si les données viennent d'un AUTRE appareil
    // (on compare avec ce qu'on a en mémoire)
    if (data.collection  && JSON.stringify(data.collection)  !== JSON.stringify(window.collectionData)) {
      window.collectionData = data.collection;
      localStorage.setItem("kshelf_save", JSON.stringify(data.collection));
      if (window.initSidebar) window.initSidebar();
    }
    if (data.photocards && JSON.stringify(data.photocards) !== JSON.stringify(window.photocardsData)) {
      window.photocardsData = data.photocards;
      localStorage.setItem("kshelf_photocards", JSON.stringify(data.photocards));
    }
  });
}

// ==========================================
// PUSH VERS FIRESTORE
// ==========================================
async function pushToFirestore(user) {
  if (!user) return;
  const userRef = doc(db, "users", user.uid, "data", "collection");
  try {
    await setDoc(userRef, {
      collection:  window.collectionData  || {},
      photocards:  window.photocardsData  || [],
      binderPages: window.binderTotalPages || 1,
      updatedAt:   Date.now()
    }, { merge: true });
  } catch(e) {
    console.error("Firestore push error:", e);
  }
}

// Exposé globalement pour être appelé depuis script.js à chaque sauvegarde
window.syncToFirestore = async function() {
  const user = window._currentUser;
  if (!user) return;
  await pushToFirestore(user);
};

// ==========================================
// UI PROFIL
// ==========================================
function updateProfileUI(user) {
  const pseudo   = localStorage.getItem(`kshelf_pseudo_${user.uid}`) || user.displayName || "Utilisateur";
  const photoURL = localStorage.getItem(`kshelf_photo_${user.uid}`)  || user.photoURL    || "";

  // Topbar
  setEl("profile-name-label", el => el.innerText = pseudo);
  setEl("profile-avatar-letter", el => { el.innerText = pseudo[0].toUpperCase(); el.style.display = photoURL ? "none" : "block"; });
  setEl("profile-avatar-img", el => { el.src = photoURL; el.style.display = photoURL ? "block" : "none"; });

  // Modal — état connecté
  setEl("profile-logged-out", el => el.style.display = "none");
  setEl("profile-logged-in",  el => el.style.display = "block");
  setEl("profile-pseudo-input", el => el.value = pseudo);
  setEl("profile-email-display", el => el.value = user.email || "");

  // Avatar large
  setEl("profile-large-letter", el => { el.innerText = pseudo[0].toUpperCase(); el.style.display = photoURL ? "none" : "block"; });
  setEl("profile-large-img", el => { el.src = photoURL; el.style.display = photoURL ? "block" : "none"; });
}

function clearProfileUI() {
  setEl("profile-name-label",   el => el.innerText = "Se connecter");
  setEl("profile-avatar-letter",el => { el.innerText = "?"; el.style.display = "block"; });
  setEl("profile-avatar-img",   el => el.style.display = "none");
  setEl("profile-logged-out",   el => el.style.display = "block");
  setEl("profile-logged-in",    el => el.style.display = "none");
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
  // Sauvegarder le pseudo dans Firestore aussi
  const userRef = doc(db, "users", user.uid, "data", "profile");
  await setDoc(userRef, { pseudo, updatedAt: Date.now() }, { merge: true });
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
