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
  chatgpt: {
    name: "ChatGPT",
    label: "Dark Minimal",
    preview: "#212121",
    vars: {
      "--bg":              "#212121",
      "--surface":         "#2f2f2f",
      "--surface-hover":   "#3a3a3a",
      "--border":          "rgba(255,255,255,0.1)",
      "--border-hover":    "rgba(255,255,255,0.2)",
      "--text-primary":    "#ececec",
      "--text-secondary":  "#8e8ea0",
      "--text-tertiary":   "#565869",
      "--accent":          "#10a37f",

      "--font-display":    "'Syne', sans-serif",
      "--font-body":       "'Plus Jakarta Sans', sans-serif",
      "--font-weight-display": "700",
      "--letter-spacing-display": "-1px",
      "--text-transform-display": "none",

      "--radius-card":     "12px",
      "--radius-panel":    "16px",
      "--radius-btn":      "8px",
      "--radius-pill":     "8px",
      "--btn-border":      "none",

      "--blur":            "none",
      "--grid-line":       "none",
      "--card-shadow":     "0 2px 8px rgba(0,0,0,0.4)",
      "--card-border":     "1px solid rgba(255,255,255,0.08)",
    }
  },
  kpopping: {
    name: "Kpopping",
    label: "K-pop Coloré",
    preview: "#f7f7f8",
    vars: {
      "--bg":              "#f7f7f8",
      "--surface":         "#ffffff",
      "--surface-hover":   "#f0f0f2",
      "--border":          "rgba(0,0,0,0.08)",
      "--border-hover":    "rgba(0,0,0,0.16)",
      "--text-primary":    "#0d0d0d",
      "--text-secondary":  "#6b7280",
      "--text-tertiary":   "#9ca3af",
      "--accent":          "#e040a0",

      "--font-display":    "'Syne', sans-serif",
      "--font-body":       "'Plus Jakarta Sans', sans-serif",
      "--font-weight-display": "800",
      "--letter-spacing-display": "-1.5px",
      "--text-transform-display": "none",

      "--radius-card":     "20px",
      "--radius-panel":    "24px",
      "--radius-btn":      "100px",
      "--radius-pill":     "100px",
      "--btn-border":      "none",

      "--blur":            "none",
      "--grid-line":       "none",
      "--card-shadow":     "0 4px 16px rgba(0,0,0,0.08)",
      "--card-border":     "1px solid rgba(0,0,0,0.06)",
    }
  },
  lemontang: {
    name: "LemonTang",
    label: "Y2K Frutiger Aero",
    preview: "linear-gradient(135deg, #4fc3f7, #fff176)",
    vars: {
      "--bg":              "#5fc9e8",
      "--surface":         "rgba(255,255,255,0.22)",
      "--surface-hover":   "rgba(255,255,255,0.32)",
      "--border":          "rgba(255,255,255,0.45)",
      "--border-hover":    "rgba(255,255,255,0.7)",
      "--text-primary":    "#0d3b52",
      "--text-secondary":  "#1c5c78",
      "--text-tertiary":   "#3d7c95",
      "--accent":          "#ffe14d",

      /* Typo — rondes Y2K, gros titres ludiques */
      "--font-display":    "'Syne', sans-serif",
      "--font-body":       "'Plus Jakarta Sans', sans-serif",
      "--font-weight-display": "800",
      "--letter-spacing-display": "-1px",
      "--text-transform-display": "none",

      /* Formes — très arrondies, bulles */
      "--radius-card":     "26px",
      "--radius-panel":    "32px",
      "--radius-btn":      "100px",
      "--radius-pill":     "100px",
      "--btn-border":      "1px solid rgba(255,255,255,0.6)",

      "--blur":            "blur(18px) saturate(160%)",
      "--grid-line":       "none",
      "--card-shadow":     "0 10px 30px rgba(13,59,82,0.25), inset 0 1px 0 rgba(255,255,255,0.5)",
      "--card-border":     "1.5px solid rgba(255,255,255,0.55)",
    }
  },

  newjeans: {
    name: "NewJeans",
    label: "Bunnies 🐰",
    preview: "linear-gradient(135deg, #a8d8ff, #d9c2ff)",
    vars: {
      "--bg":              "#eef4fb",
      "--surface":         "#ffffff",
      "--surface-hover":   "#e6eef8",
      "--border":          "rgba(90,130,180,0.16)",
      "--border-hover":    "rgba(90,130,180,0.3)",
      "--text-primary":    "#1b2a45",
      "--text-secondary":  "#5a6b85",
      "--text-tertiary":   "#8a97ad",
      "--accent":          "#6ba6ff",
      "--font-display":    "'Plus Jakarta Sans', sans-serif",
      "--font-body":       "'Plus Jakarta Sans', sans-serif",
      "--font-weight-display": "800",
      "--letter-spacing-display": "-1px",
      "--text-transform-display": "none",
      "--radius-card":     "22px",
      "--radius-panel":    "26px",
      "--radius-btn":      "100px",
      "--radius-pill":     "100px",
      "--btn-border":      "none",
      "--blur":            "none",
      "--grid-line":       "none",
      "--card-shadow":     "0 6px 20px rgba(107,166,255,0.14)",
      "--card-border":     "1px solid rgba(90,130,180,0.12)",
    }
  },

  aespa: {
    name: "aespa",
    label: "MY — Synk Dive",
    preview: "linear-gradient(135deg, #000000, #00ffa3)",
    vars: {
      "--bg":              "#08090d",
      "--surface":         "rgba(0,255,163,0.05)",
      "--surface-hover":   "rgba(0,255,163,0.1)",
      "--border":          "rgba(0,255,163,0.2)",
      "--border-hover":    "rgba(0,255,163,0.4)",
      "--text-primary":    "#eafff6",
      "--text-secondary":  "#7fbfa8",
      "--text-tertiary":   "#4d7d6d",
      "--accent":          "#00ffa3",
      "--font-display":    "'Syne', sans-serif",
      "--font-body":       "'Space Mono', monospace",
      "--font-weight-display": "800",
      "--letter-spacing-display": "-1px",
      "--text-transform-display": "uppercase",
      "--radius-card":     "6px",
      "--radius-panel":    "8px",
      "--radius-btn":      "4px",
      "--radius-pill":     "4px",
      "--btn-border":      "1px solid rgba(0,255,163,0.4)",
      "--blur":            "blur(12px)",
      "--grid-line":       "rgba(0,255,163,0.06)",
      "--card-shadow":     "0 0 24px rgba(0,255,163,0.12)",
      "--card-border":     "1px solid rgba(0,255,163,0.18)",
    }
  },

  bts: {
    name: "BTS",
    label: "ARMY 💜",
    preview: "linear-gradient(135deg, #7c4dff, #b39ddb)",
    vars: {
      "--bg":              "#0e0a1a",
      "--surface":         "rgba(140,100,220,0.08)",
      "--surface-hover":   "rgba(140,100,220,0.15)",
      "--border":          "rgba(150,110,230,0.22)",
      "--border-hover":    "rgba(150,110,230,0.42)",
      "--text-primary":    "#f3edff",
      "--text-secondary":  "#a99cc9",
      "--text-tertiary":   "#7a6ea0",
      "--accent":          "#9b6dff",
      "--font-display":    "'Syne', sans-serif",
      "--font-body":       "'Plus Jakarta Sans', sans-serif",
      "--font-weight-display": "800",
      "--letter-spacing-display": "-1px",
      "--text-transform-display": "none",
      "--radius-card":     "18px",
      "--radius-panel":    "22px",
      "--radius-btn":      "100px",
      "--radius-pill":     "100px",
      "--btn-border":      "none",
      "--blur":            "blur(16px) saturate(150%)",
      "--grid-line":       "none",
      "--card-shadow":     "0 10px 30px rgba(120,80,200,0.2)",
      "--card-border":     "1px solid rgba(150,110,230,0.16)",
    }
  },

  twice: {
    name: "TWICE",
    label: "ONCE 🍑",
    preview: "linear-gradient(135deg, #ff6ea9, #ffd8a8)",
    vars: {
      "--bg":              "#fff5f8",
      "--surface":         "#ffffff",
      "--surface-hover":   "#ffe8f0",
      "--border":          "rgba(255,110,169,0.18)",
      "--border-hover":    "rgba(255,110,169,0.35)",
      "--text-primary":    "#3d1f2e",
      "--text-secondary":  "#8a5c6e",
      "--text-tertiary":   "#b58a99",
      "--accent":          "#ff6ea9",
      "--font-display":    "'Syne', sans-serif",
      "--font-body":       "'Plus Jakarta Sans', sans-serif",
      "--font-weight-display": "800",
      "--letter-spacing-display": "-1px",
      "--text-transform-display": "none",
      "--radius-card":     "24px",
      "--radius-panel":    "28px",
      "--radius-btn":      "100px",
      "--radius-pill":     "100px",
      "--btn-border":      "none",
      "--blur":            "none",
      "--grid-line":       "none",
      "--card-shadow":     "0 6px 22px rgba(255,110,169,0.16)",
      "--card-border":     "1px solid rgba(255,110,169,0.14)",
    }
  },

  straykids: {
    name: "Stray Kids",
    label: "STAY 🔴",
    preview: "linear-gradient(135deg, #e11d2f, #1a1a1a)",
    vars: {
      "--bg":              "#0d0a0b",
      "--surface":         "rgba(225,29,47,0.06)",
      "--surface-hover":   "rgba(225,29,47,0.12)",
      "--border":          "rgba(225,29,47,0.24)",
      "--border-hover":    "rgba(225,29,47,0.45)",
      "--text-primary":    "#fdeaec",
      "--text-secondary":  "#c98f96",
      "--text-tertiary":   "#8f5c62",
      "--accent":          "#e11d2f",
      "--font-display":    "'Syne', sans-serif",
      "--font-body":       "'Space Mono', monospace",
      "--font-weight-display": "800",
      "--letter-spacing-display": "-0.5px",
      "--text-transform-display": "uppercase",
      "--radius-card":     "8px",
      "--radius-panel":    "10px",
      "--radius-btn":      "6px",
      "--radius-pill":     "6px",
      "--btn-border":      "1px solid rgba(225,29,47,0.4)",
      "--blur":            "blur(12px)",
      "--grid-line":       "none",
      "--card-shadow":     "0 8px 26px rgba(225,29,47,0.14)",
      "--card-border":     "1px solid rgba(225,29,47,0.2)",
    }
  },

  cortis: {
    name: "CORTIS",
    label: "Streetwear",
    preview: "linear-gradient(135deg, #c8ff00, #1a1a1a)",
    vars: {
      "--bg":              "#0c0d0a",
      "--surface":         "rgba(200,255,0,0.05)",
      "--surface-hover":   "rgba(200,255,0,0.1)",
      "--border":          "rgba(200,255,0,0.2)",
      "--border-hover":    "rgba(200,255,0,0.4)",
      "--text-primary":    "#f4ffe0",
      "--text-secondary":  "#a3b87a",
      "--text-tertiary":   "#6d7d4d",
      "--accent":          "#c8ff00",
      "--font-display":    "'Space Mono', monospace",
      "--font-body":       "'Space Mono', monospace",
      "--font-weight-display": "700",
      "--letter-spacing-display": "-0.5px",
      "--text-transform-display": "uppercase",
      "--radius-card":     "2px",
      "--radius-panel":    "4px",
      "--radius-btn":      "2px",
      "--radius-pill":     "2px",
      "--btn-border":      "1px solid rgba(200,255,0,0.4)",
      "--blur":            "blur(10px)",
      "--grid-line":       "rgba(200,255,0,0.05)",
      "--card-shadow":     "0 0 20px rgba(200,255,0,0.1)",
      "--card-border":     "1px solid rgba(200,255,0,0.18)",
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
  try {
    const theme = THEMES[themeId];
    if (!theme) { console.error("Thème inconnu:", themeId); return; }

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
      .replace(/theme-\S+/g, "").replace(/is-(light|dark)/g, "").trim();
    if (themeId !== "dark") document.body.classList.add(`theme-${themeId}`);

    // Classe de luminosité — permet de cibler tous les thèmes clairs d'un coup
    const LIGHT_THEMES = ["grid", "editorial", "kpopping", "lemontang", "newjeans", "twice"];
    document.body.classList.add(LIGHT_THEMES.includes(themeId) ? "is-light" : "is-dark");

    // Thème clair : cacher l'aurora
    const aurora = document.querySelector(".apple-aurora");
    if (aurora) aurora.style.display = themeId === "dark" ? "block" : "none";

    // Glass panels suivent les variables CSS automatiquement
    document.querySelectorAll(".glass-panel").forEach(el => {
      el.style.background = "";
      el.style.backdropFilter = "";
      el.style.webkitBackdropFilter = "";
      el.style.border = "";
      el.style.borderRadius = "";
    });

    // Topbar (tous les boutons, pas juste le premier)
    document.querySelectorAll(".profile-btn, .topbar-settings-btn").forEach(el => {
      if (themeId !== "dark") {
        el.style.background = theme.vars["--surface"];
        el.style.border = `1px solid ${theme.vars["--border"]}`;
        el.style.color = theme.vars["--text-primary"];
      } else {
        el.style.background = "";
        el.style.border = "";
        el.style.color = "";
      }
    });

    currentSettings.theme = themeId;
    saveSettings();
    updateSettingsUI();

    // Afficher/cacher la section upload bg LemonTang
    const lemontangSection = document.getElementById("lemontang-bg-section");
    if (lemontangSection) lemontangSection.style.display = themeId === "lemontang" ? "block" : "none";

    // Réappliquer l'image de fond sauvegardée si on revient sur LemonTang
    if (themeId === "lemontang") {
      const savedBg = localStorage.getItem("kshelf_lemontang_bg");
      if (savedBg) root.style.setProperty("--lemontang-bg-image", `url(${savedBg})`);
    }

    // Forcer re-render du contenu actif
    if (window.showDashboard) window.showDashboard();

  } catch (err) {
    console.error("Erreur applyTheme:", err);
  }
}

// ==========================================
// IMAGE DE FOND LEMONTANG
// ==========================================
function compressBgImage(file, maxSize = 1400, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxSize) { height *= maxSize / width; width = maxSize; }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function uploadLemonTangBg(input) {
  if (!input.files[0]) return;
  try {
    const compressed = await compressBgImage(input.files[0]);
    localStorage.setItem("kshelf_lemontang_bg", compressed);
    document.documentElement.style.setProperty("--lemontang-bg-image", `url(${compressed})`);
  } catch(e) {
    console.error("Erreur upload image LemonTang:", e);
  }
}
window.uploadLemonTangBg = uploadLemonTangBg;

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
// applyAccent retirée

// ==========================================
// SAVE / LOAD
// ==========================================
function saveSettings() {
  localStorage.setItem("kshelf_settings", JSON.stringify(currentSettings));
}

function loadSettings() {
  applyTheme(currentSettings.theme || "dark");
  applyAnimations(currentSettings.animations !== false);
  // accent retiré

  // Restaurer l'image de fond LemonTang si elle existe
  const savedBg = localStorage.getItem("kshelf_lemontang_bg");
  if (savedBg) {
    document.documentElement.style.setProperty("--lemontang-bg-image", `url(${savedBg})`);
  }
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
    const lang = window.currentLang || currentSettings.lang || "fr";
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  // Animations
  const animToggle = document.getElementById("anim-toggle");
  if (animToggle) animToggle.checked = currentSettings.animations !== false;
  // Accent
  const accentPicker = document.getElementById("accent-picker");
  // accent retiré
}

window.openSettings   = openSettings;
window.closeSettings  = closeSettings;
window.applyTheme     = applyTheme;
window.applyLang      = applyLang;
// applyAccent retirée
window.applyAnimations = applyAnimations;
window.t              = t;

// Init au chargement
document.addEventListener("DOMContentLoaded", () => {
  loadSettings();
});
 
