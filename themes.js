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

      /* Typo */
      "--font-display":    "'Syne', sans-serif",
      "--font-body":       "'Plus Jakarta Sans', sans-serif",
      "--font-weight-display": "800",
      "--letter-spacing-display": "-2px",
      "--text-transform-display": "none",

      /* Formes */
      "--radius-card":     "16px",
      "--radius-panel":    "24px",
      "--radius-btn":      "10px",
      "--radius-pill":     "40px",
      "--btn-border":      "none",

      "--blur":            "blur(20px) saturate(190%)",
      "--grid-line":       "none",
      "--card-shadow":     "0 12px 40px rgba(0,0,0,0.3)",
      "--card-border":     "none",
    }
  },
  grid: {
    name: "Grid",
    label: "Technical",
    preview: "#e8e6e1",
    vars: {
      "--bg":              "#e8e6e1",
      "--surface":         "#f0ede8",
      "--surface-hover":   "#e0ddd8",
      "--border":          "rgba(0,0,0,0.15)",
      "--border-hover":    "rgba(0,0,0,0.4)",
      "--text-primary":    "#0a0a0a",
      "--text-secondary":  "#555555",
      "--text-tertiary":   "#999999",
      "--accent":          "#ff5500",

      /* Typo — mono technique */
      "--font-display":    "'JetBrains Mono', monospace",
      "--font-body":       "'Space Mono', monospace",
      "--font-weight-display": "700",
      "--letter-spacing-display": "-1px",
      "--text-transform-display": "uppercase",

      /* Formes — angles droits partout */
      "--radius-card":     "0px",
      "--radius-panel":    "0px",
      "--radius-btn":      "0px",
      "--radius-pill":     "2px",
      "--btn-border":      "1.5px solid currentColor",

      "--blur":            "none",
      "--grid-line":       "1px solid rgba(0,0,0,0.12)",
      "--card-shadow":     "none",
      "--card-border":     "1.5px solid rgba(0,0,0,0.15)",
    }
  },
  editorial: {
    name: "Editorial",
    label: "Serif",
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

      /* Typo — serif élégante */
      "--font-display":    "'Fraunces', serif",
      "--font-body":       "'Plus Jakarta Sans', sans-serif",
      "--font-weight-display": "500",
      "--letter-spacing-display": "-1px",
      "--text-transform-display": "none",

      /* Formes — pills ultra arrondies */
      "--radius-card":     "28px",
      "--radius-panel":    "32px",
      "--radius-btn":      "100px",
      "--radius-pill":     "100px",
      "--btn-border":      "1px solid rgba(0,0,0,0.08)",

      "--blur":            "blur(20px)",
      "--grid-line":       "none",
      "--card-shadow":     "0 4px 16px rgba(0,0,0,0.06)",
      "--card-border":     "1px solid rgba(0,0,0,0.06)",
    }
  },
  lemontang: {
    name: "LemonTang",
    label: "Y2K Pop / Bubbly",
    preview: "#fff59d",
    vars: {
      // Dégradé jaune citron/menthe translucide sur une image de fond fixe
      "--bg":              "linear-gradient(135deg, rgba(254, 240, 138, 0.75) 0%, rgba(187, 247, 208, 0.75) 100%), url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200') no-repeat center/cover fixed",
      "--surface":         "rgba(255, 255, 255, 0.65)",
      "--surface-hover":   "rgba(255, 255, 255, 0.85)",
      "--border":          "rgba(234, 179, 8, 0.25)",
      "--border-hover":    "rgba(234, 179, 8, 0.6)",
      "--text-primary":    "#0f172a",
      "--text-secondary":  "#334155",
      "--text-tertiary":   "#64748b",
      "--accent":          "#eab308",

      /* Typo — Style rond Y2K */
      "--font-display":    "'Fredoka', sans-serif",
      "--font-body":       "'Plus Jakarta Sans', sans-serif",
      "--font-weight-display": "700",
      "--letter-spacing-display": "0px",
      "--text-transform-display": "none",

      /* Formes — Ultra-bulles & arrondies */
      "--radius-card":     "24px",
      "--radius-panel":    "32px",
      "--radius-btn":      "18px",
      "--radius-pill":     "50px",
      "--btn-border":      "2.5px solid rgba(234, 179, 8, 0.4)",

      "--blur":            "blur(16px) saturate(145%)",
      "--grid-line":       "none",
      "--card-shadow":     "0 10px 30px rgba(234, 179, 8, 0.12)",
      "--card-border":     "2px solid rgba(255, 255, 255, 0.7)",
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

  // Glass panels suivent les variables CSS automatiquement (voir style.css)
  document.querySelectorAll(".glass-panel").forEach(el => {
    el.style.background = "";
    el.style.backdropFilter = "";
    el.style.webkitBackdropFilter = "";
    el.style.border = "";
    el.style.borderRadius = "";
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
