// ==========================================
// FIREBASE AUTH — K-Shelf
// ==========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSuRQEdiSo61wc2DrguCiLIrwoqDEHfJ8",
  authDomain: "k-shelf.firebaseapp.com",
  projectId: "k-shelf",
  storageBucket: "k-shelf.firebasestorage.app",
  messagingSenderId: "640794546993",
  appId: "1:640794546993:web:81107074929a4013f69610",
  measurementId: "G-1PF027WVR7"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ---- Exposition globale pour script.js ----
window._firebaseAuth     = auth;
window._firebaseProvider = provider;

// ---- Connexion Google ----
window.signInWithGoogle = async function() {
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    console.error("Erreur connexion Google:", e);
    alert("Connexion impossible : " + e.message);
  }
};

// ---- Déconnexion ----
window.signOutUser = async function() {
  await signOut(auth);
  closeProfileModal();
};

// ---- Observer l'état de connexion ----
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Récupérer pseudo sauvegardé localement
    const savedPseudo = localStorage.getItem(`kshelf_pseudo_${user.uid}`);
    const savedPhoto  = localStorage.getItem(`kshelf_photo_${user.uid}`);

    const displayName = savedPseudo || user.displayName || "Utilisateur";
    const photoURL    = savedPhoto  || user.photoURL    || "";

    updateProfileUI(user, displayName, photoURL);
  } else {
    clearProfileUI();
  }
});

// ---- Mettre à jour l'UI avec le profil ----
function updateProfileUI(user, displayName, photoURL) {
  // Topbar
  const label  = document.getElementById("profile-name-label");
  const letter = document.getElementById("profile-avatar-letter");
  const img    = document.getElementById("profile-avatar-img");
  if (label)  label.innerText = displayName;
  if (letter) letter.innerText = displayName[0].toUpperCase();
  if (img) {
    if (photoURL) {
      img.src = photoURL;
      img.style.display = "block";
      if (letter) letter.style.display = "none";
    } else {
      img.style.display = "none";
      if (letter) letter.style.display = "block";
    }
  }

  // Modal profil — état connecté
  const loggedOut = document.getElementById("profile-logged-out");
  const loggedIn  = document.getElementById("profile-logged-in");
  if (loggedOut) loggedOut.style.display = "none";
  if (loggedIn)  loggedIn.style.display  = "block";

  const pseudoInput = document.getElementById("profile-pseudo-input");
  const emailInput  = document.getElementById("profile-email-display");
  if (pseudoInput) pseudoInput.value = displayName;
  if (emailInput)  emailInput.value  = user.email || "";

  // Avatar large dans le modal
  const largeLetter = document.getElementById("profile-large-letter");
  const largeImg    = document.getElementById("profile-large-img");
  if (largeLetter) largeLetter.innerText = displayName[0].toUpperCase();
  if (largeImg) {
    if (photoURL) {
      largeImg.src = photoURL;
      largeImg.style.display = "block";
      if (largeLetter) largeLetter.style.display = "none";
    } else {
      largeImg.style.display = "none";
      if (largeLetter) largeLetter.style.display = "block";
    }
  }

  window._currentUser = user;
}

function clearProfileUI() {
  const label  = document.getElementById("profile-name-label");
  const letter = document.getElementById("profile-avatar-letter");
  const img    = document.getElementById("profile-avatar-img");
  if (label)  label.innerText = "Se connecter";
  if (letter) { letter.innerText = "?"; letter.style.display = "block"; }
  if (img)    img.style.display = "none";

  const loggedOut = document.getElementById("profile-logged-out");
  const loggedIn  = document.getElementById("profile-logged-in");
  if (loggedOut) loggedOut.style.display = "block";
  if (loggedIn)  loggedIn.style.display  = "none";

  window._currentUser = null;
}

// ---- Sauvegarder le profil ----
window.saveProfile = function() {
  const user = window._currentUser;
  if (!user) return;
  const pseudo = document.getElementById("profile-pseudo-input")?.value.trim();
  if (!pseudo) return;
  localStorage.setItem(`kshelf_pseudo_${user.uid}`, pseudo);
  updateProfileUI(user, pseudo, localStorage.getItem(`kshelf_photo_${user.uid}`) || user.photoURL || "");
  closeProfileModal();
};

// ---- Upload photo de profil (base64 local) ----
window.uploadProfilePhoto = function(input) {
  const user = window._currentUser;
  if (!user || !input.files[0]) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    localStorage.setItem(`kshelf_photo_${user.uid}`, dataUrl);
    const pseudo = localStorage.getItem(`kshelf_pseudo_${user.uid}`) || user.displayName || "Utilisateur";
    updateProfileUI(user, pseudo, dataUrl);
  };
  reader.readAsDataURL(input.files[0]);
};

// ---- Contrôles modal profil ----
window.openProfileModal = function() {
  document.getElementById("profile-modal-overlay").classList.add("visible");
};
window.closeProfileModal = function() {
  document.getElementById("profile-modal-overlay").classList.remove("visible");
};
