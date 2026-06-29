// ==========================================
// K-SHELF — SYSTÈME DE THÈMES & SETTINGS
// ==========================================

const THEMES = {
  dark: {
    name: "Dark",
    label: "Glassmorphism",
    preview: "#07090e",
    vars: {
      "--bg":              "#07090e",
      "--surface":         "rgba(13,17,23,0.45)",
      "--surface-hover":   "rgba(255,255,255,0.06)",
      "--border":          "rgba(255,255,255,0.06)",
      "--border-hover":    "rgba(255,255,255,0.14)",
      "--text-primary":    "#ffffff",
      "--text-secondary":  "#808799",
      "--text-tertiary":   "#4a5060",
      "--accent":          "#ffffff",
      "--font-display":    "'Syne', sans-serif",
      "--font-body":       "'Plus Jakarta Sans', sans-serif",
      "--radius-card":     "16px",
      "--radius-panel":    "24px",
      "--radius-btn":      "10px",
      "--blur":            "blur(20px) saturate(190%)",
      "--grid-line":       "none",
      "--sidebar-bg":      "rgba(13,17,23,0.45)",
      "--main-bg":         "rgba(13,17,23,0.45)",
    }
  },
  grid: {
    name: "Grid",
    label: "Editorial",
    preview: "#e8e6e1",
    vars: {
      "--bg":              "#e8e6e1",
      "--surface":         "#f0ede8",
      "--surface-hover":   "#e0ddd8",
      "--border":          "rgba(0,0,0,0.12)",
      "--border-hover":    "rgba(0,0,0,0.3)",
      "--text-primary":    "#0a0a0a",
      "--text-secondary":  "#555555",
      "--text-tertiary":   "#999999",
      "--accent":          "#ff5500",
      "--font-display":    "'Syne', sans-serif",
      "--font-body":       "'Plus Jakarta Sans', sans-serif",
      "--radius-card":     "0px",
      "--radius-panel":    "0px",
      "--radius-btn":      "0px",
      "--blur":            "none",
      "--grid-line":       "1px solid rgba(0,0,0,0.1)",
      "--sidebar-bg":      "#dedad4",
      "--main-bg":         "#e8e6e1",
    }
  },
  editorial: {
    name: "Editorial",
    label: "Blanc & Noir",
    preview: "#f7f7f5",
    vars: {
      "--bg":              "#f7f7f5",
      "--surface":         "#ffffff",
      "--surface-hover":   "#f0f0ee",
      "--border":          "rgba(0,0,0,0.07)",
      "--border-hover":    "rgba(0,0,0,0.15)",
      "--text-primary":    "#0a0a0a",
      "--text-secondary":  "#6b6b6b",
      "--text-tertiary":   "#b0b0b0",
      "--accent":          "#0a0a0a",
      "--font-display":    "'Syne', sans-serif",
      "--font-body":       "'Plus Jakarta Sans', sans-serif",
      "--radius-card":     "12px",
      "--radius-panel":    "18px",
      "--radius-btn":      "100px",
      "--blur":            "blur(20px)",
      "--grid-line":       "none",
      "--sidebar-bg":      "rgba(255,255,255,0.85)",
      "--main-bg":         "rgba(255,255,255,0.7)",
    }
  }
};

// Settings par défaut
const DEFAULT_SETTINGS = {
  theme:      "dark",
  lang:       "fr",
  animations: true,
  accent:     null, // null = couleur par défaut du thème
};

let currentSettings = {
  ...DEFAULT_SETTINGS,
  ...JSON.parse(localStorage.getItem("kshelf_settings") || "{}")
};

// ==========================================
// APPLIQUER UN THÈME
// ==========================================
function applyTheme(themeId) {
  const theme = THEMES[themeId];
  if (!theme) return;

  const root = document.documentElement;

  // Appliquer les variables CSS
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));

  // Accent personnalisé override
  if (currentSettings.accent) {
    root.style.setProperty("--accent", currentSettings.accent);
  }

  // Body background + classe thème
  document.body.style.background = theme.vars["--bg"];
  document.body.className = document.body.className
    .replace(/theme-\w+/g, "").trim();
  if (themeId !== "dark") document.body.classList.add(`theme-${themeId}`);

  // Thème clair : cacher l'aurora, adapter les glass panels
  const aurora = document.querySelector(".apple-aurora");
  if (aurora) aurora.style.display = themeId === "dark" ? "block" : "none";

  // Adapter les glass panels selon le thème
  document.querySelectorAll(".glass-panel").forEach(el => {
    if (themeId === "dark") {
      el.style.background = "rgba(13,17,23,0.45)";
      el.style.backdropFilter = "blur(20px) saturate(190%)";
      el.style.border = "1px solid rgba(255,255,255,0.06)";
    } else if (themeId === "grid") {
      el.style.background = theme.vars["--surface"];
      el.style.backdropFilter = "none";
      el.style.border = `1px solid ${theme.vars["--border"]}`;
      el.style.borderRadius = "0";
    } else if (themeId === "editorial") {
      el.style.background = "rgba(255,255,255,0.85)";
      el.style.backdropFilter = "blur(20px)";
      el.style.border = "1px solid rgba(0,0,0,0.07)";
    }
  });

  // Topbar
  const topbar = document.querySelector(".profile-btn");
  if (topbar) {
    if (themeId !== "dark") {
      topbar.style.background = theme.vars["--surface"];
      topbar.style.border = `1px solid ${theme.vars["--border"]}`;
      topbar.style.color = theme.vars["--text-primary"];
    } else {
      topbar.style.background = "";
      topbar.style.border = "";
      topbar.style.color = "";
    }
  }

  currentSettings.theme = themeId;
  saveSettings();
  updateSettingsUI();

  // Forcer re-render du contenu actif
  if (window.showDashboard) window.showDashboard();
}

// ==========================================
// ANIMATIONS
// ==========================================
function applyAnimations(enabled) {
  if (!enabled) {
    document.documentElement.style.setProperty("--transition-speed", "0ms");
    const style = document.getElementById("no-anim-style") || document.createElement("style");
    style.id = "no-anim-style";
    style.textContent = `*, *::before, *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }`;
    document.head.appendChild(style);
  } else {
    document.getElementById("no-anim-style")?.remove();
    document.documentElement.style.removeProperty("--transition-speed");
  }
  currentSettings.animations = enabled;
  saveSettings();
}

// ==========================================
// LANGUE
// ==========================================
const TRANSLATIONS = {
  fr: {
    "search_placeholder": "rechercher un album, un artiste...",
    "offline":            "Lecteur Hors-Ligne",
    "no_track":           "Aucun morceau sélectionné",
    "spotify_connect":    "connexion spotify",
    "spotify_connected":  "✓ Spotify connecté",
    "owned":              "● possédé",
    "wishlist":           "○ wishlist",
    "dashboard_title":    "ma collection virtuelle.",
    "dashboard_desc":     "explorez et gérez vos albums physiques en temps réel.",
    "albums":             "albums",
    "artists":            "artistes",
    "agencies":           "agences",
    "add_album":          "+ ajouter un album",
    "lightsticks":        "✦ lightsticks",
    "photocards":         "✦ photocards",
    "settings":           "paramètres",
    "collection":         "collection",
    "search_results":     "résultats.",
    "no_result":          "Aucun résultat.",
  },
  en: {
    "search_placeholder": "search an album, an artist...",
    "offline":            "Offline Player",
    "no_track":           "No track selected",
    "spotify_connect":    "connect spotify",
    "spotify_connected":  "✓ Spotify connected",
    "owned":              "● owned",
    "wishlist":           "○ wishlist",
    "dashboard_title":    "my virtual collection.",
    "dashboard_desc":     "browse and manage your physical albums in real time.",
    "albums":             "albums",
    "artists":            "artists",
    "agencies":           "agencies",
    "add_album":          "+ add an album",
    "lightsticks":        "✦ lightsticks",
    "photocards":         "✦ photocards",
    "settings":           "settings",
    "collection":         "collection",
    "search_results":     "results.",
    "no_result":          "No results found.",
  }
};

function t(key) {
  return TRANSLATIONS[currentSettings.lang]?.[key] || TRANSLATIONS["fr"][key] || key;
}
window.t = t;

function applyLang(lang) {
  currentSettings.lang = lang;
  saveSettings();
  // Mettre à jour les éléments statiques
  const searchInput = document.getElementById("album-search");
  if (searchInput) searchInput.placeholder = t("search_placeholder");
  const trackStatus = document.getElementById("track-status");
  if (trackStatus && trackStatus.innerText === TRANSLATIONS[lang === "fr" ? "en" : "fr"]["offline"])
    trackStatus.innerText = t("offline");
  // Re-render
  if (window.showDashboard) window.showDashboard();
  if (window.initSidebar)   window.initSidebar();
  updateSettingsUI();
}

// ==========================================
// ACCENT COULEUR
// ==========================================
function applyAccent(color) {
  currentSettings.accent = color;
  document.documentElement.style.setProperty("--accent", color);
  saveSettings();
}

// ==========================================
// SAVE / LOAD
// ==========================================
function saveSettings() {
  localStorage.setItem("kshelf_settings", JSON.stringify(currentSettings));
}

function loadSettings() {
  applyTheme(currentSettings.theme || "dark");
  applyAnimations(currentSettings.animations !== false);
  if (currentSettings.accent) applyAccent(currentSettings.accent);
}

// ==========================================
// PANNEAU SETTINGS
// ==========================================
function openSettings() {
  document.getElementById("settings-overlay").classList.add("visible");
  updateSettingsUI();
}
function closeSettings() {
  document.getElementById("settings-overlay").classList.remove("visible");
}

function updateSettingsUI() {
  // Thèmes
  document.querySelectorAll(".theme-card").forEach(card => {
    card.classList.toggle("active", card.dataset.theme === currentSettings.theme);
  });
  // Lang
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentSettings.lang);
  });
  // Animations
  const animToggle = document.getElementById("anim-toggle");
  if (animToggle) animToggle.checked = currentSettings.animations !== false;
  // Accent
  const accentPicker = document.getElementById("accent-picker");
  if (accentPicker && currentSettings.accent) accentPicker.value = currentSettings.accent;
}

window.openSettings   = openSettings;
window.closeSettings  = closeSettings;
window.applyTheme     = applyTheme;
window.applyLang      = applyLang;
window.applyAccent    = applyAccent;
window.applyAnimations = applyAnimations;
window.t              = t;

// Init au chargement
document.addEventListener("DOMContentLoaded", () => {
  loadSettings();
});
