// ==========================================
// K-SHELF — SYSTÈME DE TRADUCTION FR / EN
// ==========================================

const TRANSLATIONS = {
  fr: {
    // Sidebar
    "sidebar.subtitle":        "ma collection virtuelle",
    "sidebar.search":          "rechercher un album, un artiste...",
    "sidebar.tab.albums":      "Albums",
    "sidebar.tab.photos":      "Photos",
    "sidebar.tab.concerts":    "Concerts",
    "sidebar.tab.favorites":   "★",
    "sidebar.lightsticks":     "✦ lightsticks",
    "sidebar.all_binder":      "Tout le binder",
    "sidebar.all_concerts":    "Tous mes concerts",
    "sidebar.all_favorites":   "Tous les favoris",
    "sidebar.fav.albums":      "Albums",
    "sidebar.fav.photocards":  "Photocards",
    "sidebar.fav.concerts":    "Concerts",
    "sidebar.add_album":       "+ ajouter un album",
    "sidebar.add_photocard":   "+ ajouter une photocard",
    "sidebar.add_concert":     "+ ajouter un concert",

    // Dashboard
    "dash.title":              "ma collection virtuelle.",
    "dash.desc":               "explorez et gérez vos albums physiques en temps réel.",
    "dash.albums":             "albums",
    "dash.artists":            "artistes",
    "dash.agencies":           "agences",

    // Artist view
    "artist.discs":            "disque(s)",
    "artist.click_badge":      "",

    // Album card
    "album.fav_add":           "Ajouter aux favoris",
    "album.fav_remove":        "Retirer des favoris",

    // Modal album
    "modal.listen_spotify":    "Écouter sur Spotify",
    "modal.no_spotify":        "Connectez Spotify pour écouter",
    "modal.tracks":            "Titres",
    "modal.stats":             "Statistiques",
    "modal.release":           "Sortie",
    "modal.tracks_count":      "titres",
    "modal.duration":          "durée",
    "modal.popularity":        "popularité",

    // Add album modal
    "add.title":               "Ajouter un album",
    "add.label_title":         "Titre *",
    "add.label_artist":        "Artiste *",
    "add.label_agency":        "Agence",
    "add.label_img":           "URL de la pochette",
    "add.label_mp3":           "URL MP3 (optionnel)",
    "add.placeholder_title":   "New Jeans...",
    "add.placeholder_artist":  "NewJeans",
    "add.placeholder_agency":  "HYBE",
    "add.placeholder_img":     "https://...",
    "add.submit":              "Ajouter à ma collection",
    "add.error_required":      "Le titre et l'artiste sont obligatoires.",
    "add.preview":             "Aperçu de la pochette",

    // Binder
    "binder.filter_all":       "Tous",
    "binder.page":             "Page",
    "binder.add_page":         "+ Nouvelle page",
    "binder.add_card":         "+ Ajouter une photocard",
    "binder.empty_slot":       "+",
    "binder.modal_title":      "Ajouter une photocard",
    "binder.label_artist":     "Artiste *",
    "binder.label_member":     "Membre",
    "binder.label_album":      "Album",
    "binder.label_img":        "URL de l'image",
    "binder.submit":           "Ajouter la photocard",

    // Concerts
    "concerts.title":          "concerts.",
    "concerts.count":          "concert(s) vécu(s)",
    "concerts.empty_title":    "Aucun concert pour l'instant",
    "concerts.empty_desc":     "Ajoute ton premier souvenir de concert !",
    "concerts.add":            "+ Ajouter un concert",
    "concerts.form_add":       "Ajouter un concert",
    "concerts.form_edit":      "Modifier le concert",
    "concerts.label_artist":   "Artiste *",
    "concerts.label_date":     "Date *",
    "concerts.label_venue":    "Lieu",
    "concerts.label_tour":     "Tournée",
    "concerts.label_rating":   "Ma note",
    "concerts.label_review":   "Mon avis",
    "concerts.label_setlist":  "Setlist (un titre par ligne)",
    "concerts.label_photos":   "Photos (URLs)",
    "concerts.add_photo":      "+ Ajouter",
    "concerts.submit":         "Ajouter ce concert",
    "concerts.submit_edit":    "Enregistrer les modifications",
    "concerts.delete":         "Supprimer ce concert",
    "concerts.delete_confirm": "Supprimer ce concert et tous ses souvenirs ?",
    "concerts.detail_edit":    "✎ Modifier",
    "concerts.section_review": "Mon avis",
    "concerts.section_setlist":"Setlist",
    "concerts.section_photos": "Photos",
    "concerts.placeholder_artist": "TWICE",
    "concerts.placeholder_venue":  "AccorHotels Arena, Paris",
    "concerts.placeholder_tour":   "World Tour 2026",
    "concerts.placeholder_review": "Une expérience inoubliable...",
    "concerts.placeholder_setlist":"Hype Boy\nAttention\nSuper Shy",
    "concerts.placeholder_photo":  "https://... (URL d'une image)",
    "concerts.venue_unknown":  "Lieu non renseigné",
    "concerts.date_unknown":   "Date inconnue",

    // Favoris
    "favorites.title":         "favoris.",
    "favorites.count":         "élément(s)",
    "favorites.albums":        "⭐ Albums",
    "favorites.photocards":    "★ Photocards",
    "favorites.concerts":      "🎤 Concerts",
    "favorites.empty_title":   "Aucun favori pour l'instant",
    "favorites.empty_desc":    "Clique sur ★ sur un album, une photocard ou un concert !",

    // Lightsticks
    "lightsticks.title":       "lightsticks.",

    // Player
    "player.offline":          "LECTEUR HORS-LIGNE",
    "player.no_track":         "Aucun morceau sélectionné",
    "player.ready":            "PRÊT À ÉCOUTER",
    "player.spotify_btn":      "CONNEXION SPOTIFY",

    // Settings
    "settings.title":          "Paramètres",
    "settings.section_theme":  "Thème",
    "settings.section_lang":   "Langue",
    "settings.section_anim":   "Animations",
    "settings.anim_label":     "Activer les animations",
    "settings.section_lemontang_bg": "Image de fond LemonTang",
    "settings.lemontang_hint": "Ajoute une photo du groupe pour l'arrière-plan du thème LemonTang.",
    "settings.section_data":   "Données",
    "settings.reset_btn":      "↺ Restaurer la collection originale (28 albums)",
    "settings.reset_hint":     "Remplace ta collection actuelle par les 28 albums de base.",

    // Profil
    "profile.title":           "Mon profil",
    "profile.close":           "✕ Fermer",
    "profile.save":            "Sauvegarder les modifications",
    "profile.change_photo":    "Changer la photo",
    "profile.fav_group":       "Groupe favori",
    "profile.fav_album":       "Album favori",
    "profile.biases":          "Mes biases",
    "profile.socials":         "Réseaux sociaux",
    "profile.collection":      "Ma collection",
    "profile.bias_add":        "+ Ajouter",
    "profile.bias_name":       "Nom (ex: Minji)",
    "profile.bias_group":      "Groupe (ex: NewJeans)",
    "profile.stat_albums":     "Albums",
    "profile.stat_favs":       "Favoris",
    "profile.stat_concerts":   "Concerts",
    "profile.stat_photocards": "Photocards",

    // Dropdown
    "dropdown.profile":        "Mon profil",
    "dropdown.settings":       "Paramètres",
    "dropdown.signout":        "Se déconnecter",

    // Auth
    "auth.title":              "Bienvenue sur K-Shelf",
    "auth.subtitle":           "Connecte-toi pour personnaliser ton profil",
    "auth.google":             "Continuer avec Google",
    "auth.signin":             "Se connecter",
  },

  en: {
    // Sidebar
    "sidebar.subtitle":        "my virtual collection",
    "sidebar.search":          "search an album, an artist...",
    "sidebar.tab.albums":      "Albums",
    "sidebar.tab.photos":      "Photos",
    "sidebar.tab.concerts":    "Concerts",
    "sidebar.tab.favorites":   "★",
    "sidebar.lightsticks":     "✦ lightsticks",
    "sidebar.all_binder":      "Full binder",
    "sidebar.all_concerts":    "All my concerts",
    "sidebar.all_favorites":   "All favorites",
    "sidebar.fav.albums":      "Albums",
    "sidebar.fav.photocards":  "Photocards",
    "sidebar.fav.concerts":    "Concerts",
    "sidebar.add_album":       "+ add an album",
    "sidebar.add_photocard":   "+ add a photocard",
    "sidebar.add_concert":     "+ add a concert",

    // Dashboard
    "dash.title":              "my virtual collection.",
    "dash.desc":               "explore and manage your physical albums in real time.",
    "dash.albums":             "albums",
    "dash.artists":            "artists",
    "dash.agencies":           "agencies",

    // Artist view
    "artist.discs":            "disc(s)",
    "artist.click_badge":      "",

    // Album card
    "album.fav_add":           "Add to favorites",
    "album.fav_remove":        "Remove from favorites",

    // Modal album
    "modal.listen_spotify":    "Listen on Spotify",
    "modal.no_spotify":        "Connect Spotify to listen",
    "modal.tracks":            "Tracks",
    "modal.stats":             "Stats",
    "modal.release":           "Release",
    "modal.tracks_count":      "tracks",
    "modal.duration":          "duration",
    "modal.popularity":        "popularity",

    // Add album modal
    "add.title":               "Add an album",
    "add.label_title":         "Title *",
    "add.label_artist":        "Artist *",
    "add.label_agency":        "Agency",
    "add.label_img":           "Cover URL",
    "add.label_mp3":           "MP3 URL (optional)",
    "add.placeholder_title":   "New Jeans...",
    "add.placeholder_artist":  "NewJeans",
    "add.placeholder_agency":  "HYBE",
    "add.placeholder_img":     "https://...",
    "add.submit":              "Add to my collection",
    "add.error_required":      "Title and artist are required.",
    "add.preview":             "Cover preview",

    // Binder
    "binder.filter_all":       "All",
    "binder.page":             "Page",
    "binder.add_page":         "+ New page",
    "binder.add_card":         "+ Add a photocard",
    "binder.empty_slot":       "+",
    "binder.modal_title":      "Add a photocard",
    "binder.label_artist":     "Artist *",
    "binder.label_member":     "Member",
    "binder.label_album":      "Album",
    "binder.label_img":        "Image URL",
    "binder.submit":           "Add photocard",

    // Concerts
    "concerts.title":          "concerts.",
    "concerts.count":          "concert(s) attended",
    "concerts.empty_title":    "No concerts yet",
    "concerts.empty_desc":     "Add your first concert memory!",
    "concerts.add":            "+ Add a concert",
    "concerts.form_add":       "Add a concert",
    "concerts.form_edit":      "Edit concert",
    "concerts.label_artist":   "Artist *",
    "concerts.label_date":     "Date *",
    "concerts.label_venue":    "Venue",
    "concerts.label_tour":     "Tour",
    "concerts.label_rating":   "My rating",
    "concerts.label_review":   "My review",
    "concerts.label_setlist":  "Setlist (one song per line)",
    "concerts.label_photos":   "Photos (URLs)",
    "concerts.add_photo":      "+ Add",
    "concerts.submit":         "Add this concert",
    "concerts.submit_edit":    "Save changes",
    "concerts.delete":         "Delete this concert",
    "concerts.delete_confirm": "Delete this concert and all its memories?",
    "concerts.detail_edit":    "✎ Edit",
    "concerts.section_review": "My review",
    "concerts.section_setlist":"Setlist",
    "concerts.section_photos": "Photos",
    "concerts.placeholder_artist": "TWICE",
    "concerts.placeholder_venue":  "AccorHotels Arena, Paris",
    "concerts.placeholder_tour":   "World Tour 2026",
    "concerts.placeholder_review": "An unforgettable experience...",
    "concerts.placeholder_setlist":"Hype Boy\nAttention\nSuper Shy",
    "concerts.placeholder_photo":  "https://... (image URL)",
    "concerts.venue_unknown":  "Venue unknown",
    "concerts.date_unknown":   "Unknown date",

    // Favoris
    "favorites.title":         "favorites.",
    "favorites.count":         "item(s)",
    "favorites.albums":        "⭐ Albums",
    "favorites.photocards":    "★ Photocards",
    "favorites.concerts":      "🎤 Concerts",
    "favorites.empty_title":   "No favorites yet",
    "favorites.empty_desc":    "Tap ★ on an album, photocard or concert!",

    // Lightsticks
    "lightsticks.title":       "lightsticks.",

    // Player
    "player.offline":          "OFFLINE PLAYER",
    "player.no_track":         "No track selected",
    "player.ready":            "READY TO LISTEN",
    "player.spotify_btn":      "CONNECT SPOTIFY",

    // Settings
    "settings.title":          "Settings",
    "settings.section_theme":  "Theme",
    "settings.section_lang":   "Language",
    "settings.section_anim":   "Animations",
    "settings.anim_label":     "Enable animations",
    "settings.section_lemontang_bg": "LemonTang background",
    "settings.lemontang_hint": "Add a group photo for the LemonTang theme background.",
    "settings.section_data":   "Data",
    "settings.reset_btn":      "↺ Restore original collection (28 albums)",
    "settings.reset_hint":     "Replaces your current collection with the 28 base albums.",

    // Profil
    "profile.title":           "My profile",
    "profile.close":           "✕ Close",
    "profile.save":            "Save changes",
    "profile.change_photo":    "Change photo",
    "profile.fav_group":       "Favorite group",
    "profile.fav_album":       "Favorite album",
    "profile.biases":          "My biases",
    "profile.socials":         "Social links",
    "profile.collection":      "My collection",
    "profile.bias_add":        "+ Add",
    "profile.bias_name":       "Name (e.g. Minji)",
    "profile.bias_group":      "Group (e.g. NewJeans)",
    "profile.stat_albums":     "Albums",
    "profile.stat_favs":       "Favorites",
    "profile.stat_concerts":   "Concerts",
    "profile.stat_photocards": "Photocards",

    // Dropdown
    "dropdown.profile":        "My profile",
    "dropdown.settings":       "Settings",
    "dropdown.signout":        "Sign out",

    // Auth
    "auth.title":              "Welcome to K-Shelf",
    "auth.subtitle":           "Sign in to personalize your profile",
    "auth.google":             "Continue with Google",
    "auth.signin":             "Sign in",
  }
};

// ==========================================
// MOTEUR DE TRADUCTION
// ==========================================
let currentLang = localStorage.getItem("kshelf_lang") || "fr";

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS["fr"])[key] || key;
}
window.t = t;

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("kshelf_lang", lang);
  applyTranslations();
  // Re-rendre le contenu actif
  if (window.initSidebar) window.initSidebar();
  if (window.showDashboard) window.showDashboard();
  updateSettingsUI();
}
window.setLang = setLang;

// Appliquer les traductions aux éléments statiques du DOM via data-i18n
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });

  // Mettre à jour les boutons de langue dans les paramètres
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}
window.applyTranslations = applyTranslations;

// Formater une date selon la langue courante
function localeDateLabel(dateStr) {
  if (!dateStr) return t("concerts.date_unknown");
  const d = new Date(dateStr);
  const locale = currentLang === "fr" ? "fr-FR" : "en-US";
  return d.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
}
window.localeDateLabel = localeDateLabel;

// Init au chargement
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
});
