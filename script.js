// ==========================================
// CONFIGURATION ET BASE DE DONNÉES K-SHELF
// ==========================================
const agencyThemes = {
  HYBE: "#F5FF00",
  "SM Entertainment": "#de6b7f",
  "JYP Entertainment": "#0091ea",
  "YG Entertainment": "#a8a8a8",
  "The Black Label": "#ffffff",
  "Autres / Indés": "#34d399",
};

const defaultCollectionData = {
  HYBE: {
    NewJeans: [
      { title: "NewJeans - New Jeans (Bluebook, minji ver)", img: "https://m.media-amazon.com/images/I/61SZb-7QRgL.jpg", status: "owned", mp3: "musique/newjeans-hypeboy.mp3" },
      { title: "NEWJEANS - GET UP (The POWERPUFF GIRLS X NJ Box ver.)", img: "https://media.asiaworldmusic.fr/83471-large_default/newjeans-get-up-the-powerpuff-girls-x-nj-box-ver.jpg", status: "owned", mp3: "" },
      { title: "NewJeans - How Sweet (Minji ver.)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQBtDTTgm3-keFp8w8jOKCVV0xab46cHc-NOf6uCb_7klRh2utd-sSn8&s=10", status: "wishlist", mp3: "" },
      { title: "NewJeans - How Sweet (hyein ver.)", img: "https://m.media-amazon.com/images/I/51KTPXH9ZLL.jpg", status: "owned", mp3: "" },
      { title: "NewJeans - 'Supernatural' NJ X MURAKAMI (Minji ver.)", img: "https://www.broadcastfantasia.com/cdn/shop/files/newjeans_supernatural_cross_bag_minji.png?v=1718646323&width=800", status: "owned", mp3: "" },
    ],
    BTS: [{ title: "AIRIRANG", img: "https://media.asiaworldmusic.fr/96592-large_default/bts-arirang-living-legend-ver.jpg", status: "owned", mp3: "" }],
    CORTIS: [
      { title: "CORTIS - COLOR OUTSIDE THE LINES", img: "https://media.asiaworldmusic.fr/93541-large_default/cortis-color-outside-the-lines.jpg", status: "owned", mp3: "" },
      { title: "CORTIS - GREENGREEN (bridge ver)", img: "https://media.asiaworldmusic.fr/97250-large_default/cortis-greengreen.jpg", status: "wishlist", mp3: "" },
      { title: "CORTIS - GREENGREEN (studio ver)", img: "https://media.asiaworldmusic.fr/97250-large_default/cortis-greengreen.jpg", status: "owned", mp3: "" },
    ],
    "LE Sserafim": [
      { title: "LE SSERAFIM - SPAGHETTI", img: "https://media.asiaworldmusic.fr/94280-large_default/le-sserafim-spaghetti.jpg", status: "owned", mp3: "musique/le-sserafim-spaghetti.mp3" },
      { title: "LE SSERAFIM - SPAGHETTI (COMPACT ver.)", img: "https://media.asiaworldmusic.fr/94281-large_default/le-sserafim-spaghetti-compact-ver.jpg", status: "wishlist", mp3: "musique/le-sserafim-blue-flame.mp3" },
      { title: "LE SSERAFIM - PUREFLOW pt.1 (COMPACT Ver.)", img: "https://media.asiaworldmusic.fr/98167-large_default/le-sserafim-pureflow-pt1.jpg", status: "owned", mp3: "musique/le-sserafim-antifragile.mp3" },
    ],
    ILLIT: [{ title: "ILLIT - NOT CUTE ANYMORE", img: "https://media.asiaworldmusic.fr/94638-large_default/illit-not-cute-anymore.jpg", status: "wishlist", mp3: "musique/illit-nca.mp3" }],
    Enhypen: [
      { title: "ENHYPEN - DARK MOON SPECIAL ALBUM 'MEMORABILIA' (Moon ver.)", img: "https://media.asiaworldmusic.fr/86009-large_default/enhypen-dark-moon-special-album-memorabilia-moon-ver.jpg", status: "owned", mp3: "" },
    ],
    KATSEYE: [{ title: "KATSEYE - BEAUTIFUL CHAOS", img: "https://media.asiaworldmusic.fr/91679-large_default/katseye-beautiful-chaos.jpg", status: "wishlist", mp3: "" }],
  },
  "SM Entertainment": {
    EXO: [{ title: "Exo - War: The Power Of Music (Korean Version)", img: "https://m.media-amazon.com/images/I/81VQC8EooOL._UF894,1000_QL80_.jpg", status: "owned", mp3: "" }],
    AESPA: [{ title: "aespa - LEMONADE (ACID, Winter Ver.)", img: "https://media.asiaworldmusic.fr/97934-large_default/aespa-lemonade-acid-ver.jpg", status: "wishlist", mp3: "" }],
    Hearts2hearts: [
      { title: "Hearts2Hearts - Lemon Tang (Photobook, Beach Ver.)", img: "https://media.asiaworldmusic.fr/98459-large_default/hearts2hearts-lemon-tang-photobook-ver.jpg", status: "owned", mp3: "musique/hearts2hearts-lemontang.mp3" },
      { title: "Hearts2Hearts - Lemon Tang (Photobook, Sun Ver.)", img: "https://media.asiaworldmusic.fr/98459-large_default/hearts2hearts-lemon-tang-photobook-ver.jpg", status: "owned", mp3: "musique/hearts2hearts-RUDE!.mp3" },
      { title: "Hearts2Hearts - Lemon Tang (Jewel Case Ver.)", img: "https://media.asiaworldmusic.fr/98461-large_default/hearts2hearts-lemon-tang-jewel-case-ver.jpg", status: "wishlist", mp3: "musique/hearts2hearts-heart-emoji-(♡).mp3" },
    ],
  },
  "JYP Entertainment": {
    TWICE: [
      { title: "TWICE - STRATEGY", img: "https://media.asiaworldmusic.fr/89551-thickbox_default/twice-strategy.jpg", status: "owned", mp3: "musique/twice-strategy.mp3" },
      { title: "TWICE - THIS IS FOR", img: "https://media.asiaworldmusic.fr/92660-thickbox_default/twice-this-is-for.jpg", status: "owned", mp3: "musique/twice-this-is-for.mp3" },
      { title: "TWICE - TEN: The Story Goes On (MOMO ver.)", img: "https://media.asiaworldmusic.fr/94071-large_default/twice-ten-the-story-goes-on-cast-ver.jpg", status: "wishlist", mp3: "musique/twice-move-like-that-(momo).mp3" },
    ],
    "STRAY KIDS": [
      { title: "[EUROPE] Stray Kids - KARMA (KARMA ver.)", img: "https://media.asiaworldmusic.fr/93126-large_default/stray-kids-karma-karma-ver.jpg", status: "owned", mp3: "" },
      { title: "Stray Kids - SKZ IT TAPE 'DO IT' (IT ver.)", img: "https://media.asiaworldmusic.fr/94816-large_default/stray-kids-skz-it-tape-do-it-it-ver.jpg", status: "owned", mp3: "" },
    ],
  },
  "YG Entertainment": {
    BABYMONSTER: [{ title: "BABYMONSTER - WE GO UP (PATTERN, Ahyeon ver.)", img: "https://media.asiaworldmusic.fr/93904-large_default/babymonster-we-go-up-pattern-ver.jpg", status: "owned", mp3: "musique/babymonster-we-go-up.mp3" }],
  },
  "The Black Label": {
    MEOVV: [{ title: "MEOVV - BITE NOW (PHOTOBOOK, Beast Ver.)", img: "https://media.asiaworldmusic.fr/98021-large_default/meovv-bite-now-photobook-ver.jpg", status: "owned", mp3: "" }],
  },
  "Autres / Indés": {
    "CLOSE YOUR EYES": [{ title: "CLOSE YOUR EYES - blackout (blackout ver.)", img: "https://media.asiaworldmusic.fr/94632-large_default/close-your-eyes-blackout-blackout-ver.jpg", status: "owned", mp3: "" }],
  },
};

// Photocards data (sauvegardé en localStorage)
let photocardsData = JSON.parse(localStorage.getItem("kshelf_photocards")) || [
  { id: "pc1", artist: "NewJeans", member: "Minji", album: "How Sweet", img: "", status: "owned", page: 0, slot: 0 },
  { id: "pc2", artist: "NewJeans", member: "Hanni", album: "How Sweet", img: "", status: "owned", page: 0, slot: 1 },
  { id: "pc3", artist: "LE Sserafim", member: "Kazuha", album: "SPAGHETTI", img: "", status: "favorite", page: 0, slot: 2 },
];

function savePhotocards() {
  localStorage.setItem("kshelf_photocards", JSON.stringify(photocardsData));
}

// Lightsticks data
const lightsticksData = [
  { name: "TWICE Candy Bong Z2", img: "https://thfvnext.bing.com/th/id/OIP.tQWyLkSzpFbsYi-I4MZz_wHaHa?w=174&h=180&c=7&r=0&o=7&cb=thfvnextfalcon3&pid=1.7&rm=3", artist: "TWICE" },
];

let collectionData = JSON.parse(localStorage.getItem("kshelf_save")) || defaultCollectionData;
let currentPlaylist = [];
let currentTrackIndex = 0;

// DOM refs
const audioPlayer = document.getElementById("local-audio-player");
const playBtn     = document.getElementById("btn-play");
const prevBtn     = document.getElementById("btn-prev");
const nextBtn     = document.getElementById("btn-next");
const progressBar = document.getElementById("progress-bar");
const trackStatus = document.getElementById("track-status");
const playerTitle = document.getElementById("player-title");

// ==========================================
// PERSISTANCE
// ==========================================
function saveCollection() {
  localStorage.setItem("kshelf_save", JSON.stringify(collectionData));
}

// ==========================================
// SIDEBAR
// ==========================================
function initSidebar() {
  const nav = document.getElementById("sidebar-nav");
  let html = "";
  for (const agency in collectionData) {
    const color = agencyThemes[agency] || "#ffffff";
    html += `<div class="agency-section">
      <div class="agency-title" style="color:${color}">${agency}</div>
      <div class="artist-list">`;
    for (const artist in collectionData[agency]) {
      const sa = encodeURIComponent(artist);
      const sg = encodeURIComponent(agency);
      html += `<div class="artist-item" data-artist="${artist}" onclick="selectArtist('${sg}','${sa}')">${artist}</div>`;
    }
    html += `</div></div>`;
  }
  // Lightsticks link
  html += `<div class="agency-section">
    <div class="artist-list">
      <div class="artist-item lightstick-nav" onclick="showLightsticks()">✦ lightsticks</div>
      <div class="artist-item lightstick-nav" onclick="showBinder()">✦ photocards</div>
    </div>
  </div>`;
  // Bouton ajout
  html += `<div class="add-album-btn-wrap">
    <button class="add-album-nav-btn" onclick="openAddModal()">+ ajouter un album</button>
  </div>`;
  nav.innerHTML = html;
}

// ==========================================
// DASHBOARD
// ==========================================
function showDashboard() {
  document.querySelectorAll(".artist-item").forEach(el => el.classList.remove("active"));
  document.getElementById("album-search").value = "";
  document.documentElement.style.setProperty("--dynamic-agency-color", "rgba(255,255,255,0.2)");

  let totalAlbums = 0, totalArtists = 0;
  const totalAgencies = Object.keys(collectionData).length;
  for (const agency in collectionData) {
    totalArtists += Object.keys(collectionData[agency]).length;
    for (const artist in collectionData[agency]) totalAlbums += collectionData[agency][artist].length;
  }

  document.getElementById("main-content").innerHTML = `
    <div class="dashboard-view animate-fade">
      <h2 class="welcome-title">ma collection virtuelle.</h2>
      <p class="welcome-desc">explorez et gérez vos albums physiques en temps réel.</p>
      <div class="stats-grid">
        <div class="stat-card"><span class="stat-number">${totalAlbums}</span><br><span class="stat-label">albums</span></div>
        <div class="stat-card"><span class="stat-number">${totalArtists}</span><br><span class="stat-label">artistes</span></div>
        <div class="stat-card"><span class="stat-number">${totalAgencies}</span><br><span class="stat-label">agences</span></div>
      </div>
    </div>`;
}

// ==========================================
// SELECT ARTIST
// ==========================================
function selectArtist(encodedAgency, encodedArtist) {
  const agency = decodeURIComponent(encodedAgency);
  const artist = decodeURIComponent(encodedArtist);

  document.querySelectorAll(".artist-item").forEach(el => el.classList.remove("active"));
  const activeItem = document.querySelector(`[data-artist="${artist}"]`);
  if (activeItem) activeItem.classList.add("active");

  const brandColor = agencyThemes[agency] || "#ffffff";
  document.documentElement.style.setProperty("--dynamic-agency-color", brandColor);

  const albums = collectionData[agency][artist];
  currentPlaylist = albums.filter(a => a.mp3 !== "");
  if (currentPlaylist.length > 0) {
    currentTrackIndex = 0;
    loadTrack(0);
  } else {
    currentPlaylist = [];
    audioPlayer.pause(); audioPlayer.src = "";
    playerTitle.innerText = "Aucun morceau sélectionné";
    trackStatus.innerText = "Lecteur Hors-Ligne";
    progressBar.style.width = "0%";
    playBtn.innerText = "▶";
    document.getElementById("player-cover").style.display = "none";
    document.getElementById("player-emoji").style.display = "inline";
  }

  renderAlbumGrid(agency, artist, albums);
}

// ==========================================
// RENDER GRID
// ==========================================
function albumCardHtml(album, artist, agency) {
  const safeTitle  = encodeURIComponent(album.title);
  const safeArtist = encodeURIComponent(artist);
  const safeAgency = encodeURIComponent(agency);
  const statusLabel = album.status === "owned" ? "● possédé" : "○ wishlist";
  const media = album.img
    ? `<img src="${album.img}" alt="${album.title}" class="album-artwork" loading="lazy">`
    : `<div class="album-artwork-placeholder">💿</div>`;
  const spotifyOverlay = spotifyAccessToken
    ? `<div class="card-spotify-overlay">
        <span>▶ Spotify</span>
       </div>`
    : "";

  return `
    <div class="album-card"
      data-title="${safeTitle}"
      data-artist="${safeArtist}"
      data-agency="${safeAgency}"
      data-img="${encodeURIComponent(album.img||'')}"
      data-status="${album.status}">
      <div class="album-media-wrapper">
        ${media}
        ${spotifyOverlay}
      </div>
      <div class="album-meta-header">
        <h4 class="album-title-text">${album.title}</h4>
        <span class="status-badge ${album.status}" data-toggle="status">${statusLabel}</span>
      </div>
      <span class="agency-tag">${agency}</span>
    </div>`;
}

function renderAlbumGrid(agency, artist, albums) {
  const cardsHtml = albums.map(a => albumCardHtml(a, artist, agency)).join("");
  document.getElementById("main-content").innerHTML = `
    <div class="artist-view-header animate-fade">
      <div class="breadcrumbs">${agency} › ${artist}</div>
      <h2 class="artist-main-title">${artist}.</h2>
      <p class="album-total-count">${albums.length} disque(s) — clic sur le badge pour modifier le statut</p>
    </div>
    <div class="albums-display-grid animate-fade">
      ${cardsHtml || '<p class="no-result">Aucun album trouvé.</p>'}
    </div>`;
}

// ==========================================
// SEARCH
// ==========================================
function handleSearch() {
  const query = document.getElementById("album-search").value.toLowerCase().trim();
  if (!query) { showDashboard(); return; }

  document.querySelectorAll(".artist-item").forEach(el => el.classList.remove("active"));
  document.documentElement.style.setProperty("--dynamic-agency-color", "#ffffff");

  const results = [];
  for (const agency in collectionData)
    for (const artist in collectionData[agency])
      collectionData[agency][artist].forEach(album => {
        if (album.title.toLowerCase().includes(query) || artist.toLowerCase().includes(query))
          results.push({ ...album, agency, artist });
      });

  const cardsHtml = results.map(a => albumCardHtml(a, a.artist, a.agency)).join("");
  document.getElementById("main-content").innerHTML = `
    <div class="artist-view-header animate-fade">
      <div class="breadcrumbs">Recherche globale</div>
      <h2 class="artist-main-title">résultats.</h2>
      <p class="album-total-count">${results.length} album(s) trouvé(s)</p>
    </div>
    <div class="albums-display-grid animate-fade">
      ${cardsHtml || '<p class="no-result">Aucun résultat.</p>'}
    </div>`;
}

// ==========================================
// TOGGLE STATUS
// ==========================================
// Délégation d'événements pour les album-cards (évite les bugs de quotes inline)
document.getElementById("main-content").addEventListener("click", function(e) {
  const card = e.target.closest(".album-card");
  if (!card) return;

  // Clic sur le badge statut
  if (e.target.closest("[data-toggle='status']")) {
    e.stopPropagation();
    const agency = decodeURIComponent(card.dataset.agency);
    const artist = decodeURIComponent(card.dataset.artist);
    const title  = decodeURIComponent(card.dataset.title);
    toggleAlbumStatus(card.dataset.agency, card.dataset.artist, card.dataset.title);
    return;
  }

  // Clic sur l'overlay Spotify
  if (e.target.closest(".card-spotify-overlay")) {
    e.stopPropagation();
    const artist = decodeURIComponent(card.dataset.artist);
    const title  = decodeURIComponent(card.dataset.title);
    playAlbumOnSpotify(artist, title);
    return;
  }

  // Clic sur la card → ouvrir la fiche
  const title  = decodeURIComponent(card.dataset.title);
  const artist = decodeURIComponent(card.dataset.artist);
  const agency = decodeURIComponent(card.dataset.agency);
  const img    = decodeURIComponent(card.dataset.img || "");
  const status = card.dataset.status;
  openAlbumModal(title, artist, agency, img, status);
});

window.toggleAlbumStatus = function(encodedAgency, encodedArtist, encodedTitle) {
  const agency = decodeURIComponent(encodedAgency);
  const artist = decodeURIComponent(encodedArtist);
  const title  = decodeURIComponent(encodedTitle);
  const albums = collectionData[agency]?.[artist];
  if (!albums) return;
  const album = albums.find(a => a.title === title);
  if (!album) return;
  album.status = album.status === "owned" ? "wishlist" : "owned";
  saveCollection();
  const q = document.getElementById("album-search").value.toLowerCase().trim();
  if (q) handleSearch(); else renderAlbumGrid(agency, artist, albums);
};

// ==========================================
// LIGHTSTICKS
// ==========================================
function showLightsticks() {
  document.querySelectorAll(".artist-item").forEach(el => el.classList.remove("active"));
  document.querySelector(".lightstick-nav")?.classList.add("active");
  document.documentElement.style.setProperty("--dynamic-agency-color", "rgba(255,255,255,0.3)");

  const cardsHtml = lightsticksData.map(ls => `
    <div class="lightstick-card">
      <div class="lightstick-img-wrapper">
        ${ls.img ? `<img src="${ls.img}" alt="${ls.name}" class="lightstick-img" loading="lazy">` : `<div class="lightstick-placeholder">🪄</div>`}
      </div>
      <p class="lightstick-name">${ls.name}</p>
      <span class="lightstick-artist">${ls.artist}</span>
    </div>`).join("");

  document.getElementById("main-content").innerHTML = `
    <div class="artist-view-header animate-fade">
      <div class="breadcrumbs">collection</div>
      <h2 class="artist-main-title">lightsticks.</h2>
      <p class="album-total-count">${lightsticksData.length} lightstick(s)</p>
    </div>
    <div class="lightsticks-grid animate-fade">
      ${cardsHtml || '<p class="no-result">Aucun lightstick.</p>'}
    </div>`;
}

// ==========================================
// SYSTEME AUDIO LOCAL
// ==========================================
function loadTrack(index) {
  if (!currentPlaylist.length) return;
  const track = currentPlaylist[index];
  audioPlayer.src = track.mp3;
  let songTitle = track.title.includes(" - ") ? track.title.split(" - ")[1] : track.title;
  playerTitle.innerText = songTitle;
  const cover = document.getElementById("player-cover");
  const emoji = document.getElementById("player-emoji");
  if (track.img) { cover.src = track.img; cover.style.display = "block"; emoji.style.display = "none"; }
  else { cover.style.display = "none"; emoji.style.display = "inline"; }
  trackStatus.innerText = "Prêt à écouter 🎧";
  progressBar.style.width = "0%";
  playBtn.innerText = "▶";
}

function togglePlay() {
  if (!audioPlayer.src || !currentPlaylist.length) return;
  if (audioPlayer.paused) { audioPlayer.play(); playBtn.innerText = "⏸"; trackStatus.innerText = "En cours 🔊"; }
  else { audioPlayer.pause(); playBtn.innerText = "▶"; trackStatus.innerText = "Pause ⏸"; }
}

function nextTrack() {
  if (!currentPlaylist.length) return;
  currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
  loadTrack(currentTrackIndex); audioPlayer.play();
  playBtn.innerText = "⏸"; trackStatus.innerText = "En cours 🔊";
}

function prevTrack() {
  if (!currentPlaylist.length) return;
  currentTrackIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
  loadTrack(currentTrackIndex); audioPlayer.play();
  playBtn.innerText = "⏸"; trackStatus.innerText = "En cours 🔊";
}

audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.duration) progressBar.style.width = `${(audioPlayer.currentTime / audioPlayer.duration) * 100}%`;
});
audioPlayer.addEventListener("ended", nextTrack);

// ==========================================
// AJOUT D'ALBUM
// ==========================================
let addStatus = "owned";

function openAddModal() {
  document.getElementById("add-modal-overlay").classList.add("visible");
  document.getElementById("add-title").value = "";
  document.getElementById("add-artist").value = "";
  document.getElementById("add-img").value = "";
  document.getElementById("add-error").style.display = "none";
  document.getElementById("add-preview").style.display = "none";
  addStatus = "owned";
  document.getElementById("toggle-owned").classList.add("active");
  document.getElementById("toggle-wishlist").classList.remove("active");
}

function closeAddModal(e) {
  if (e && e.target !== document.getElementById("add-modal-overlay")) return;
  document.getElementById("add-modal-overlay").classList.remove("visible");
}

function setAddStatus(s) {
  addStatus = s;
  document.getElementById("toggle-owned").classList.toggle("active", s === "owned");
  document.getElementById("toggle-wishlist").classList.toggle("active", s === "wishlist");
}

// Preview de la cover (délégué via l'élément statique dans l'HTML)
document.addEventListener("input", function(e) {
  if (e.target && e.target.id === "add-img") {
    const url = e.target.value.trim();
    const preview = document.getElementById("add-preview");
    const img = document.getElementById("add-preview-img");
    if (url) { img.src = url; preview.style.display = "block"; }
    else { preview.style.display = "none"; }
  }
});

function submitAddAlbum() {
  const title  = document.getElementById("add-title").value.trim();
  const artist = document.getElementById("add-artist").value.trim();
  const agency = document.getElementById("add-agency").value;
  const img    = document.getElementById("add-img").value.trim();
  const errEl  = document.getElementById("add-error");

  if (!title || !artist) {
    errEl.textContent = "Le titre et l'artiste sont obligatoires.";
    errEl.style.display = "block"; return;
  }

  // Créer l'agency si elle n'existe pas
  if (!collectionData[agency]) collectionData[agency] = {};
  // Créer l'artiste si il n'existe pas
  if (!collectionData[agency][artist]) collectionData[agency][artist] = [];

  collectionData[agency][artist].push({ title, img, status: addStatus, mp3: "" });
  saveCollection();
  initSidebar();

  document.getElementById("add-modal-overlay").classList.remove("visible");
  selectArtist(encodeURIComponent(agency), encodeURIComponent(artist));
}

// ==========================================
// BINDER PHOTOCARDS
// ==========================================
const SLOTS_PER_PAGE = 9;
let binderCurrentPage = 0;
let binderArtistFilter = "all";
let pendingSlot = null; // { page, slot } en attente d'ajout

function getBinderArtists() {
  const artists = [...new Set(photocardsData.map(pc => pc.artist))];
  return artists;
}

function getFilteredCards() {
  if (binderArtistFilter === "all") return photocardsData;
  return photocardsData.filter(pc => pc.artist === binderArtistFilter);
}

// Nombre de pages créées manuellement
let binderTotalPages = parseInt(localStorage.getItem("kshelf_binder_pages") || "1");

function getTotalBinderPages() {
  const maxFromCards = photocardsData.reduce((max, pc) => Math.max(max, pc.page), 0) + 1;
  return Math.max(binderTotalPages, maxFromCards);
}

function addNewBinderPage() {
  binderTotalPages = getTotalBinderPages() + 1;
  localStorage.setItem("kshelf_binder_pages", binderTotalPages);
  binderCurrentPage = binderTotalPages - 1;
  showBinder();
}

function showBinder(artistFilter = binderArtistFilter) {
  binderArtistFilter = artistFilter;
  document.querySelectorAll(".artist-item").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".lightstick-nav").forEach((el, i) => { if (i === 1) el.classList.add("active"); });
  document.documentElement.style.setProperty("--dynamic-agency-color", "rgba(255,255,255,0.3)");

  const artists = getBinderArtists();
  const totalPages = getTotalBinderPages();
  if (binderCurrentPage >= totalPages) binderCurrentPage = totalPages - 1;
  if (binderCurrentPage < 0) binderCurrentPage = 0;

  const filterBtns = [
    `<button class="binder-filter-btn ${binderArtistFilter === 'all' ? 'active' : ''}" onclick="showBinder('all')">Tous</button>`,
    ...artists.map(a => `<button class="binder-filter-btn ${binderArtistFilter === a ? 'active' : ''}" onclick="showBinder('${a.replace(/'/g, "\'")}')">${a}</button>`)
  ].join("");

  const slots = Array(SLOTS_PER_PAGE).fill(null);
  photocardsData.forEach(pc => {
    if (pc.page === binderCurrentPage && pc.slot >= 0 && pc.slot < SLOTS_PER_PAGE) {
      if (binderArtistFilter === "all" || pc.artist === binderArtistFilter)
        slots[pc.slot] = pc;
    }
  });

  const slotsHtml = slots.map((pc, i) => {
    if (pc) {
      const imgContent = pc.img
        ? `<img src="${pc.img}" alt="${pc.member || ''}" class="binder-card-img">`
        : `<div class="binder-card-empty-img"><span>${pc.member ? pc.member[0] : "?"}</span></div>`;
      const isFav = pc.status === "favorite";
      // Aura colorée par groupe (agency color)
      const agencyOfCard = Object.keys(collectionData).find(ag =>
        collectionData[ag][pc.artist] !== undefined
      ) || "Autres / Indés";
      const auraColor = agencyThemes[agencyOfCard] || "#ffffff";

      return `
        <div class="binder-slot-wrapper ${isFav ? 'is-favorite' : ''}">
          ${isFav ? `<div class="group-aura" style="--aura-color:${auraColor}"></div>` : ''}
          <div class="binder-slot filled ${isFav ? 'is-favorite' : ''}" data-slot="${i}" data-pcid="${pc.id}">
            <div class="binder-card-tilt">
              ${imgContent}
              ${isFav ? '<div class="holo-layer"></div>' : ''}
              <div class="binder-card-info">
                <span class="binder-card-member">${pc.member || "—"}</span>
                <span class="binder-card-artist">${pc.artist}</span>
              </div>
              <div class="binder-card-actions">
                <button class="binder-fav-btn ${isFav ? 'active' : ''}" onclick="togglePcFavorite('${pc.id}')">★</button>
                <button class="binder-remove-btn" onclick="removePhotocard('${pc.id}')">✕</button>
              </div>
            </div>
          </div>
        </div>`;
    } else {
      return `
        <div class="binder-slot-wrapper">
          <div class="binder-slot empty" onclick="openAddPhotocard(${binderCurrentPage}, ${i})">
            <div class="binder-slot-add">+</div>
          </div>
        </div>`;
    }
  }).join("");

  document.getElementById("main-content").innerHTML = `
    <div class="artist-view-header animate-fade">
      <div class="breadcrumbs">collection</div>
      <h2 class="artist-main-title">photocards.</h2>
      <p class="album-total-count">${photocardsData.length} photocard(s) · ${totalPages} page(s)</p>
    </div>
    <div class="binder-toolbar animate-fade">
      <div class="binder-filters">${filterBtns}</div>
      <div class="binder-page-nav">
        <button class="binder-nav-btn" onclick="binderChangePage(-1)" ${binderCurrentPage === 0 ? "disabled" : ""}>‹</button>
        <span class="binder-page-label">${binderCurrentPage + 1} / ${totalPages}</span>
        <button class="binder-nav-btn" onclick="binderChangePage(1)" ${binderCurrentPage >= totalPages - 1 ? "disabled" : ""}>›</button>
        <button class="binder-add-page-btn" onclick="addNewBinderPage()">+ page</button>
      </div>
    </div>
    <div class="binder-book animate-fade">
      <div class="binder-spine">
        <div class="binder-ring"></div>
        <div class="binder-ring"></div>
        <div class="binder-ring"></div>
        <div class="binder-ring"></div>
        <div class="binder-ring"></div>
        <div class="binder-ring"></div>
      </div>
      <div class="binder-page-sheet">
        <div class="binder-grid">
          ${slotsHtml}
        </div>
      </div>
    </div>`;
  setTimeout(initTilt, 60);
}

function binderChangePage(dir) {
  const totalPages = getTotalBinderPages();
  const next = binderCurrentPage + dir;
  if (next < 0 || next >= totalPages) return;
  binderCurrentPage = next;
  showBinder();
}

function removePhotocard(id) {
  photocardsData = photocardsData.filter(pc => pc.id !== id);
  savePhotocards();
  showBinder();
}

function initTilt() {
  document.querySelectorAll(".binder-slot.filled").forEach(card => {
    const tilt = card.querySelector(".binder-card-tilt");
    const holo = card.querySelector(".holo-layer"); // null si pas favori
    if (!tilt) return;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;   // 0→1
      const py = (e.clientY - rect.top)  / rect.height;  // 0→1
      const dx = px - 0.5;
      const dy = py - 0.5;

      // Tilt 3D
      tilt.style.transform =
        `rotateX(${-dy * 20}deg) rotateY(${dx * 20}deg) scale3d(1.04,1.04,1.04)`;

      // Effet holo prismatique — FAVORIS SEULEMENT
      if (holo) {
        // Hue pivote selon position X, saturation selon Y
        const hue    = Math.round(px * 360);
        const hue60  = (hue + 60)  % 360;
        const hue180 = (hue + 180) % 360;
        const hue270 = (hue + 270) % 360;
        const angle  = Math.round(dx * 30 + py * 60 + 110); // angle dynamique

        // Couche 1 : dégradé arc-en-ciel en mouvement
        const rainbow = `linear-gradient(
          ${angle}deg,
          hsla(${hue},100%,65%,0.0)   0%,
          hsla(${hue},100%,65%,0.5)  20%,
          hsla(${hue60},100%,65%,0.4) 35%,
          hsla(${hue180},100%,65%,0.5) 55%,
          hsla(${hue270},100%,65%,0.4) 75%,
          hsla(${hue},100%,65%,0.0)  100%
        )`;

        // Couche 2 : micro-grille de facettes
        const facets = `repeating-linear-gradient(
          ${angle + 45}deg,
          transparent           0px,
          transparent           2px,
          rgba(255,255,255,0.06) 2px,
          rgba(255,255,255,0.06) 3px
        )`;

        // Couche 3 : spot lumineux au curseur
        const spot = `radial-gradient(
          ellipse 60% 40% at ${Math.round(px*100)}% ${Math.round(py*100)}%,
          rgba(255,255,255,0.18) 0%,
          transparent 70%
        )`;

        holo.style.background = [rainbow, facets, spot].join(", ");
        holo.style.mixBlendMode = "color-dodge";
        holo.style.opacity = "1";
      }
    });

    card.addEventListener("mouseleave", () => {
      tilt.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
      if (holo) holo.style.opacity = "0";
    });
  });
}

window.showBinder       = showBinder;
window.initTilt         = initTilt;
window.binderChangePage = binderChangePage;
window.removePhotocard  = removePhotocard;

// ==========================================
// AJOUT PHOTOCARD
// ==========================================
function openAddPhotocard(page, slot) {
  pendingSlot = { page, slot };
  const modal = document.getElementById("add-photocard-modal");
  modal.querySelector("#pc-member").value = "";
  modal.querySelector("#pc-artist").value = "";
  modal.querySelector("#pc-album").value = "";
  modal.querySelector("#pc-img-url").value = "";
  modal.querySelector("#pc-img-preview").style.display = "none";
  modal.querySelector("#pc-error").style.display = "none";
  document.getElementById("pc-toggle-owned").classList.add("active");
  document.getElementById("pc-toggle-favorite").classList.remove("active");
  pcAddStatus = "owned";
  modal.classList.add("visible");
}

function closeAddPhotocard() {
  document.getElementById("add-photocard-modal").classList.remove("visible");
  pendingSlot = null;
}

let pcAddStatus = "owned";
function setPcStatus(s) {
  pcAddStatus = s;
  document.getElementById("pc-toggle-owned").classList.toggle("active", s === "owned");
  document.getElementById("pc-toggle-favorite").classList.toggle("active", s === "favorite");
}

function submitAddPhotocard() {
  const member = document.getElementById("pc-member").value.trim();
  const artist = document.getElementById("pc-artist").value.trim();
  const album  = document.getElementById("pc-album").value.trim();
  const imgUrl = document.getElementById("pc-img-url").value.trim();
  const errEl  = document.getElementById("pc-error");
  const fileInput = document.getElementById("pc-img-file");

  if (!artist) {
    errEl.textContent = "L'artiste est obligatoire.";
    errEl.style.display = "block"; return;
  }

  const id = "pc_" + Date.now();
  const { page, slot } = pendingSlot;

  const doAdd = (imgSrc) => {
    photocardsData.push({ id, artist, member, album, img: imgSrc, status: pcAddStatus, page, slot });
    savePhotocards();
    closeAddPhotocard();
    showBinder();
  };

  // Upload fichier local → base64
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => doAdd(e.target.result);
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    doAdd(imgUrl);
  }
}

function togglePcFavorite(id) {
  const pc = photocardsData.find(p => p.id === id);
  if (!pc) return;
  pc.status = pc.status === "favorite" ? "owned" : "favorite";
  savePhotocards();
  showBinder();
}
window.togglePcFavorite = togglePcFavorite;

window.openAddPhotocard  = openAddPhotocard;
window.closeAddPhotocard = closeAddPhotocard;
window.setPcStatus       = setPcStatus;
window.submitAddPhotocard = submitAddPhotocard;

// Preview image URL
document.addEventListener("input", function(e) {
  if (e.target && e.target.id === "pc-img-url") {
    const url = e.target.value.trim();
    const preview = document.getElementById("pc-img-preview");
    if (preview) { preview.src = url; preview.style.display = url ? "block" : "none"; }
  }
});

// Preview fichier upload
document.addEventListener("change", function(e) {
  if (e.target && e.target.id === "pc-img-file") {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const preview = document.getElementById("pc-img-preview");
      if (preview) { preview.src = ev.target.result; preview.style.display = "block"; }
    };
    reader.readAsDataURL(file);
  }
});

window.openAddModal   = openAddModal;
window.closeAddModal  = closeAddModal;
window.setAddStatus   = setAddStatus;
window.submitAddAlbum = submitAddAlbum;
window.showLightsticks = showLightsticks;

// ==========================================
// SPOTIFY — PKCE OAuth
// ==========================================
const SPOTIFY_CLIENT_ID   = "af102f75697746ccbc32cdd3e24e7a55";
const SPOTIFY_REDIRECT_URI = "https://nonowarwood.github.io/K-Shelf/";
const SPOTIFY_SCOPES = ["user-read-playback-state","user-modify-playback-state","user-read-currently-playing"].join(" ");

let spotifyAccessToken = null;
let spotifyTokenExpiry = null;
let nowPlayingInterval = null;

function generateCodeVerifier() {
  const arr = new Uint8Array(64);
  crypto.getRandomValues(arr);
  return btoa(String.fromCharCode(...arr)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"");
}
async function generateCodeChallenge(v) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(v));
  return btoa(String.fromCharCode(...new Uint8Array(d))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"");
}

async function loginSpotify() {
  const v = generateCodeVerifier();
  const c = await generateCodeChallenge(v);
  localStorage.setItem("spotify_code_verifier", v);
  const p = new URLSearchParams({ client_id: SPOTIFY_CLIENT_ID, response_type:"code", redirect_uri: SPOTIFY_REDIRECT_URI, code_challenge_method:"S256", code_challenge:c, scope: SPOTIFY_SCOPES });
  window.location.href = `https://accounts.spotify.com/authorize?${p}`;
}

async function exchangeSpotifyCode(code) {
  const v = localStorage.getItem("spotify_code_verifier");
  const r = await fetch("https://accounts.spotify.com/api/token", {
    method:"POST", headers:{"Content-Type":"application/x-www-form-urlencoded"},
    body: new URLSearchParams({ grant_type:"authorization_code", code, redirect_uri: SPOTIFY_REDIRECT_URI, client_id: SPOTIFY_CLIENT_ID, code_verifier:v })
  });
  if (!r.ok) { console.error("Token exchange failed"); return; }
  const data = await r.json();
  spotifyAccessToken = data.access_token;
  spotifyTokenExpiry = Date.now() + data.expires_in * 1000;
  localStorage.setItem("spotify_access_token", spotifyAccessToken);
  localStorage.setItem("spotify_token_expiry", spotifyTokenExpiry);
  localStorage.removeItem("spotify_code_verifier");
  window.history.replaceState({}, document.title, SPOTIFY_REDIRECT_URI);
  onSpotifyConnected();
}

function restoreSpotifySession() {
  const token  = localStorage.getItem("spotify_access_token");
  const expiry = parseInt(localStorage.getItem("spotify_token_expiry") || "0");
  if (token && Date.now() < expiry) { spotifyAccessToken = token; spotifyTokenExpiry = expiry; onSpotifyConnected(); return true; }
  return false;
}

function disconnectSpotify() {
  spotifyAccessToken = null; spotifyTokenExpiry = null;
  localStorage.removeItem("spotify_access_token");
  localStorage.removeItem("spotify_token_expiry");
  if (nowPlayingInterval) clearInterval(nowPlayingInterval);
  nowPlayingInterval = null;
  updateSpotifyButton(false);
  trackStatus.innerText = "Lecteur Hors-Ligne";
  playerTitle.innerText = "Aucun morceau sélectionné";
  document.getElementById("player-cover").style.display = "none";
  document.getElementById("player-emoji").style.display = "inline";
}

function updateSpotifyButton(connected) {
  const btn = document.getElementById("spotify-connect-btn");
  if (!btn) return;
  if (connected) {
    btn.innerText = "✓ Spotify connecté";
    btn.style.background = "#1DB954"; btn.style.color = "#000";
    btn.onclick = disconnectSpotify;
  } else {
    btn.innerText = "connexion spotify";
    btn.style.background = ""; btn.style.color = "";
    btn.onclick = loginSpotify;
  }
}

function onSpotifyConnected() { updateSpotifyButton(true); startNowPlayingPolling(); }

async function fetchNowPlaying() {
  if (!spotifyAccessToken || Date.now() > spotifyTokenExpiry) { disconnectSpotify(); return; }
  try {
    const res = await fetch("https://api.spotify.com/v1/me/player", { headers:{ Authorization:`Bearer ${spotifyAccessToken}` } });
    if (res.status === 204 || res.status === 404) { trackStatus.innerText = "Spotify — rien en lecture"; return; }
    if (!res.ok) return;
    const data = await res.json();
    const track = data.item;
    if (!track) return;
    const isPlaying = data.is_playing;
    _spotifyIsPlaying = isPlaying;
    playerTitle.innerText = track.name;
    trackStatus.innerText = isPlaying ? `▶ ${track.artists.map(a=>a.name).join(", ")}` : `⏸ ${track.artists.map(a=>a.name).join(", ")}`;
    const cover = track.album?.images?.[0]?.url;
    if (cover) {
      document.getElementById("player-cover").src = cover;
      document.getElementById("player-cover").style.display = "block";
      document.getElementById("player-emoji").style.display = "none";
    }
    progressBar.style.width = `${(data.progress_ms / track.duration_ms) * 100}%`;
    playBtn.innerText = isPlaying ? "⏸" : "▶";
  } catch(e) { console.error("Now playing error:", e); }
}

function startNowPlayingPolling() {
  fetchNowPlaying();
  if (nowPlayingInterval) clearInterval(nowPlayingInterval);
  nowPlayingInterval = setInterval(fetchNowPlaying, 5000);
}

async function spotifyControl(endpoint, method="PUT") {
  if (!spotifyAccessToken) return false;
  try {
    const r = await fetch(`https://api.spotify.com/v1/me/player/${endpoint}`, { method, headers:{ Authorization:`Bearer ${spotifyAccessToken}` } });
    if (r.status === 403) { alert("Contrôle de lecture : Spotify Premium requis."); return false; }
    return true;
  } catch(e) { return false; }
}

let _spotifyIsPlaying = false; // état réel maintenu par fetchNowPlaying

async function spotifyTogglePlay() {
  if (!spotifyAccessToken) { togglePlay(); return; }
  const ok = await spotifyControl(_spotifyIsPlaying ? "pause" : "play");
  if (ok) setTimeout(fetchNowPlaying, 300);
}
async function spotifyNext() {
  if (!spotifyAccessToken) { nextTrack(); return; }
  if (await spotifyControl("next", "POST")) setTimeout(fetchNowPlaying, 300);
}
async function spotifyPrev() {
  if (!spotifyAccessToken) { prevTrack(); return; }
  if (await spotifyControl("previous", "POST")) setTimeout(fetchNowPlaying, 300);
}

async function searchSpotifyAlbum(q) {
  const r = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=album&limit=1`, { headers:{ Authorization:`Bearer ${spotifyAccessToken}` } });
  return (await r.json()).albums?.items?.[0] || null;
}

async function getActiveDevice() {
  try {
    const r = await fetch("https://api.spotify.com/v1/me/player/devices", {
      headers: { Authorization: `Bearer ${spotifyAccessToken}` }
    });
    const data = await r.json();
    return data.devices?.find(d => d.is_active) || data.devices?.[0] || null;
  } catch(e) { return null; }
}

async function playAlbumOnSpotify(artistName, albumTitle) {
  if (!spotifyAccessToken) { alert("Connecte-toi à Spotify d'abord !"); return; }
  const clean = albumTitle.replace(/\s*\(.*?\)\s*/g,"").replace(/\s*\[.*?\]\s*/g,"").replace(new RegExp(`^${artistName}\\s*[-–]\\s*`,"i"),"").trim();
  const queries = [`album:"${clean}" artist:"${artistName}"`, `album:${clean} artist:${artistName}`, `${clean} ${artistName}`, clean];
  let album = null;
  for (const q of queries) { try { album = await searchSpotifyAlbum(q); if (album) break; } catch(e){} }
  if (!album) { alert(`Album introuvable sur Spotify : "${clean}"`); return; }

  // Vérifier qu'un appareil est actif
  const device = await getActiveDevice();
  if (!device) {
    // Aucun appareil — ouvrir l'album directement sur Spotify Web
    window.open(album.external_urls?.spotify || `https://open.spotify.com/search/${encodeURIComponent(clean)}`, "_blank");
    return;
  }

  try {
    const body = { context_uri: album.uri };
    if (!device.is_active) body.device_id = device.id;
    await fetch("https://api.spotify.com/v1/me/player/play", {
      method:"PUT", headers:{ Authorization:`Bearer ${spotifyAccessToken}`, "Content-Type":"application/json" },
      body: JSON.stringify(body)
    });
    setTimeout(fetchNowPlaying, 800);
  } catch(e) { console.error(e); }
}
window.playAlbumOnSpotify = playAlbumOnSpotify;

// Boutons player
playBtn.onclick = spotifyTogglePlay;
prevBtn.onclick = spotifyPrev;
nextBtn.onclick = spotifyNext;

// ==========================================
// MODAL FICHE ALBUM
// ==========================================
function msToMinSec(ms) {
  const s = Math.floor(ms/1000);
  return `${Math.floor(s/60)}:${(s%60).toString().padStart(2,"0")}`;
}
function totalDuration(tracks) {
  return `${Math.floor(tracks.reduce((a,t)=>a+(t.duration_ms||0),0)/60000)} min`;
}

async function fetchSpotifyAlbumData(artistName, albumTitle) {
  if (!spotifyAccessToken) return null;
  const clean = albumTitle.replace(/\s*\(.*?\)\s*/g,"").replace(/\s*\[.*?\]\s*/g,"").replace(new RegExp(`^${artistName}\\s*[-–]\\s*`,"i"),"").trim();
  const queries = [`album:"${clean}" artist:"${artistName}"`, `album:${clean} artist:${artistName}`, `${clean} ${artistName}`, clean];
  let albumData = null;
  for (const q of queries) {
    try {
      const r = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=album&limit=1`, { headers:{ Authorization:`Bearer ${spotifyAccessToken}` } });
      const found = (await r.json()).albums?.items?.[0];
      if (found) { albumData = found; break; }
    } catch(e) {}
  }
  if (!albumData) return null;
  try {
    const tr = await fetch(`https://api.spotify.com/v1/albums/${albumData.id}/tracks?limit=50`, { headers:{ Authorization:`Bearer ${spotifyAccessToken}` } });
    albumData.trackList = (await tr.json()).items || [];
  } catch(e) { albumData.trackList = []; }
  try {
    const aid = albumData.artists?.[0]?.id;
    if (aid) { const ar = await fetch(`https://api.spotify.com/v1/artists/${aid}`, { headers:{ Authorization:`Bearer ${spotifyAccessToken}` } }); albumData.artistData = await ar.json(); }
  } catch(e) {}
  return albumData;
}

async function openAlbumModal(title, artist, agency, img, status) {
  const overlay = document.createElement("div");
  overlay.id = "album-modal-overlay";
  overlay.innerHTML = `<div class="album-modal" id="album-modal"><button class="modal-close" onclick="closeAlbumModal()">✕</button><div class="modal-loading"><div class="modal-spinner"></div><span>Chargement…</span></div></div>`;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add("visible"), 10);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeAlbumModal(); });

  const sp = await fetchSpotifyAlbumData(artist, title);
  const coverUrl   = sp?.images?.[0]?.url || img || "";
  const releaseYear = (sp?.release_date || "—").split("-")[0];
  const totalTracks = sp?.total_tracks || "—";
  const label       = sp?.label || agency;
  const duration    = sp?.trackList?.length ? totalDuration(sp.trackList) : "—";
  const spotifyUrl  = sp?.external_urls?.spotify || "";
  const genres      = sp?.artistData?.genres?.slice(0,3).join(", ") || "";
  const popularity  = sp?.artistData?.popularity;
  const statusLabel = status === "owned" ? "● possédé" : "○ wishlist";
  const cleanTitle  = title.replace(/\s*\(.*?\)\s*/g,"").replace(/\s*\[.*?\]\s*/g,"").replace(new RegExp(`^${artist}\\s*[-–]\\s*`,"i"),"").trim();

  const tracklistHtml = sp?.trackList?.length
    ? sp.trackList.map((t,i) => `<div class="modal-track"><span class="modal-track-num">${i+1}</span><span class="modal-track-name">${t.name}</span><span class="modal-track-dur">${msToMinSec(t.duration_ms)}</span></div>`).join("")
    : `<p class="modal-no-spotify">${spotifyAccessToken ? "Album non trouvé sur Spotify" : "Connecte-toi à Spotify pour voir la tracklist"}</p>`;

  document.getElementById("album-modal").innerHTML = `
    <button class="modal-close" onclick="closeAlbumModal()">✕</button>
    <div class="modal-inner">
      <div class="modal-left">
        <div class="modal-cover-wrapper">
          ${coverUrl ? `<img src="${coverUrl}" class="modal-cover" alt="${title}">` : `<div class="modal-cover-placeholder">💿</div>`}
        </div>
        <div class="modal-meta-block">
          <span class="status-badge ${status}">${statusLabel}</span>
          ${spotifyUrl ? `<a class="modal-spotify-link" href="${spotifyUrl}" target="_blank">Ouvrir sur Spotify ↗</a>` : ""}
          ${sp ? `<button class="modal-play-btn" onclick="playAlbumOnSpotify('${artist.replace(/'/g,"\\'")}','${title.replace(/'/g,"\\'")}')">▶ Écouter</button>` : ""}
        </div>
      </div>
      <div class="modal-right">
        <div class="modal-header">
          <p class="modal-agency">${agency}</p>
          <h2 class="modal-title">${cleanTitle}</h2>
          <p class="modal-artist">${artist}</p>
        </div>
        <div class="modal-stats">
          <div class="modal-stat"><span class="modal-stat-value">${releaseYear}</span><span class="modal-stat-label">Sortie</span></div>
          <div class="modal-stat"><span class="modal-stat-value">${totalTracks}</span><span class="modal-stat-label">Titres</span></div>
          <div class="modal-stat"><span class="modal-stat-value">${duration}</span><span class="modal-stat-label">Durée</span></div>
          ${popularity != null ? `<div class="modal-stat"><span class="modal-stat-value">${popularity}<span style="font-size:.9rem">/100</span></span><span class="modal-stat-label">Popularité</span></div>` : ""}
        </div>
        ${label ? `<p class="modal-label-line">Label · ${label}</p>` : ""}
        ${genres ? `<p class="modal-genres">${genres}</p>` : ""}
        <div class="modal-tracklist">
          <h3 class="modal-section-title">Tracklist</h3>
          <div class="modal-tracks-container">${tracklistHtml}</div>
        </div>
      </div>
    </div>`;
}

function closeAlbumModal() {
  const o = document.getElementById("album-modal-overlay");
  if (!o) return;
  o.classList.remove("visible");
  setTimeout(() => o.remove(), 300);
}

window.openAlbumModal  = openAlbumModal;
window.closeAlbumModal = closeAlbumModal;

// ==========================================
// INIT
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const authCode  = urlParams.get("code");
if (authCode) exchangeSpotifyCode(authCode);
else { restoreSpotifySession(); updateSpotifyButton(!!spotifyAccessToken); }

initSidebar();
showDashboard();

window.showDashboard = showDashboard;
window.selectArtist  = selectArtist;
window.handleSearch  = handleSearch;
