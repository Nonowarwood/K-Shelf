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
  syncSafe();
}

// Lightsticks data
const lightsticksData = [
  { name: "NewJeans Powerpuff Lightstick", img: "https://media.asiaworldmusic.fr/84302-large_default/newjeans-powerpuff-girls-x-nj-official-light-stick.jpg", artist: "NewJeans" },
  { name: "LE SSERAFIM Lightstick", img: "https://media.asiaworldmusic.fr/75594-large_default/le-sserafim-official-light-stick.jpg", artist: "LE Sserafim" },
  { name: "TWICE Candy Bong Z2", img: "https://media.asiaworldmusic.fr/79072-large_default/twice-official-light-stick-candy-bong-z2.jpg", artist: "TWICE" },
];

// Exposé pour Firebase (première connexion)
window.defaultCollectionData = defaultCollectionData;

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
// Queue de sync : si Firebase pas encore prêt, on mémorise et on sync dès qu'il l'est
let _syncPending = false;

function syncSafe() {
  if (window.syncToFirestore) {
    window.syncToFirestore();
    _syncPending = false;
  } else {
    _syncPending = true;
    // Toast visible sur mobile pour diagnostiquer
    const t = document.createElement("div");
    t.style.cssText = "position:fixed;bottom:70px;left:50%;transform:translateX(-50%);background:#f59e0b;color:#000;padding:8px 16px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;";
    t.innerText = "⏳ En attente de Firebase...";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 4000);
  }
}

// Appelé par firebase.js dès que syncToFirestore est disponible
window._onSyncReady = function() {
  if (_syncPending) {
    console.log("🔄 Sync en attente déclenchée");
    window.syncToFirestore();
    _syncPending = false;
  }
};

function saveCollection() {
  localStorage.setItem("kshelf_save", JSON.stringify(collectionData));
  syncSafe();
}

// ==========================================
// SIDEBAR
// ==========================================
let sidebarTab = localStorage.getItem("kshelf_sidebar_tab") || "albums";

function switchSidebarTab(tab) {
  sidebarTab = tab;
  localStorage.setItem("kshelf_sidebar_tab", tab);
  initSidebar();
  if (tab === "albums")     showDashboard();
  else if (tab === "photocards") showBinder();
  else if (tab === "concerts")   showConcerts();
  else if (tab === "favorites")  showFavorites();
}
window.switchSidebarTab = switchSidebarTab;

function initSidebar() {
  const nav = document.getElementById("sidebar-nav");
  let html = "";

  // Switch d'onglets en haut
  html += `<div class="sidebar-tabs">
    <button class="sidebar-tab-btn ${sidebarTab === 'albums' ? 'active' : ''}" onclick="switchSidebarTab('albums')">Albums</button>
    <button class="sidebar-tab-btn ${sidebarTab === 'photocards' ? 'active' : ''}" onclick="switchSidebarTab('photocards')">Photos</button>
    <button class="sidebar-tab-btn ${sidebarTab === 'concerts' ? 'active' : ''}" onclick="switchSidebarTab('concerts')">Concerts</button>
    <button class="sidebar-tab-btn ${sidebarTab === 'favorites' ? 'active' : ''}" onclick="switchSidebarTab('favorites')">★</button>
  </div>`;

  if (sidebarTab === "albums") {
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
    html += `<div class="agency-section">
      <div class="artist-list">
        <div class="artist-item lightstick-nav" onclick="showLightsticks()">✦ lightsticks</div>
      </div>
    </div>`;
  } else if (sidebarTab === "photocards") {
    const artists = (typeof getBinderArtists === "function") ? getBinderArtists() : [];
    html += `<div class="agency-section">
      <div class="artist-list">
        <div class="artist-item" onclick="showBinder('all')">Tout le binder</div>`;
    artists.forEach(a => {
      html += `<div class="artist-item" onclick="showBinder('${a.replace(/'/g,"\'")}')">${a}</div>`;
    });
    html += `</div></div>`;
  } else if (sidebarTab === "concerts") {
    html += `<div class="agency-section">
      <div class="artist-list">
        <div class="artist-item" onclick="showConcerts()">Tous mes concerts</div>
      </div>
    </div>`;
  } else if (sidebarTab === "favorites") {
    const favAlbums = [];
    for (const ag in collectionData)
      for (const ar in collectionData[ag])
        collectionData[ag][ar].forEach(a => { if (a.status === "favorite") favAlbums.push(a); });
    const favPcs   = photocardsData.filter(pc => pc.status === "favorite");
    const favConcs = concertsData.filter(c => c.favorite);
    html += `<div class="agency-section">
      <div class="artist-list">
        <div class="artist-item" onclick="showFavorites()">Tous les favoris</div>
        <div class="artist-item" onclick="showFavorites('albums')">Albums (${favAlbums.length})</div>
        <div class="artist-item" onclick="showFavorites('photocards')">Photocards (${favPcs.length})</div>
        <div class="artist-item" onclick="showFavorites('concerts')">Concerts (${favConcs.length})</div>
      </div>
    </div>`;
  }

  // Bouton ajout — contextuel selon l'onglet
  let addBtnLabel = "+ ajouter un album";
  let addBtnAction = "openAddModal()";
  if (sidebarTab === "photocards") { addBtnLabel = "+ ajouter une photocard"; addBtnAction = "openAddPhotocard(binderCurrentPage, findFirstEmptySlot())"; }
  if (sidebarTab === "concerts")   { addBtnLabel = "+ ajouter un concert";    addBtnAction = "openAddConcert()"; }
  if (sidebarTab === "favorites")  { addBtnLabel = ""; addBtnAction = ""; }

  html += `<div class="add-album-btn-wrap">
    <button class="add-album-nav-btn" onclick="${addBtnAction}">${addBtnLabel}</button>
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
  const isFav = album.status === "favorite";
  const media = album.img
    ? `<img src="${album.img}" alt="${album.title}" class="album-artwork" loading="lazy">`
    : `<div class="album-artwork-placeholder">💿</div>`;
  const spotifyOverlay = spotifyAccessToken
    ? `<div class="card-spotify-overlay"><span>▶ Spotify</span></div>`
    : "";

  return `
    <div class="album-card"
      data-title="${safeTitle}"
      data-artist="${safeArtist}"
      data-agency="${safeAgency}"
      data-img="${encodeURIComponent(album.img||'')}"
      data-status="${album.status || 'none'}">
      <div class="album-media-wrapper">
        ${media}
        ${spotifyOverlay}
        <button class="album-fav-btn ${isFav ? 'active' : ''}" data-toggle="fav" title="${isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}">★</button>
      </div>
      <div class="album-meta-header">
        <h4 class="album-title-text">${album.title}</h4>
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
      <p class="album-total-count">${albums.length} disque(s)</p>
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

  // Clic sur le bouton favori
  if (e.target.closest("[data-toggle='fav']")) {
    e.stopPropagation();
    toggleAlbumFav(card.dataset.agency, card.dataset.artist, card.dataset.title);
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

window.toggleAlbumFav = function(encodedAgency, encodedArtist, encodedTitle) {
  const agency = decodeURIComponent(encodedAgency);
  const artist = decodeURIComponent(encodedArtist);
  const title  = decodeURIComponent(encodedTitle);
  const albums = collectionData[agency]?.[artist];
  if (!albums) return;
  const album = albums.find(a => a.title === title);
  if (!album) return;
  album.status = album.status === "favorite" ? "none" : "favorite";
  saveCollection();
  const q = document.getElementById("album-search").value.toLowerCase().trim();
  if (q) handleSearch();
  else if (sidebarTab === "favorites") showFavorites();
  else renderAlbumGrid(agency, artist, albums);
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
  if (window.syncToFirestore) window.syncToFirestore();
  showBinder();
}

function findFirstEmptySlot() {
  const used = new Set(
    photocardsData.filter(pc => pc.page === binderCurrentPage).map(pc => pc.slot)
  );
  for (let i = 0; i < SLOTS_PER_PAGE; i++) {
    if (!used.has(i)) return i;
  }
  return 0; // page pleine, ouvrira sur le slot 0 (l'utilisateur peut changer de page)
}
window.findFirstEmptySlot = findFirstEmptySlot;

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

function resetToDefaultCollection() {
  if (!confirm("Restaurer la collection originale (28 albums) ? Cette action écrasera tes modifications actuelles.")) return;
  collectionData = JSON.parse(JSON.stringify(defaultCollectionData)); // deep clone
  saveCollection();
  initSidebar();
  showDashboard();
  if (window.syncToFirestore) window.syncToFirestore();
  if (typeof showDebugToast === "function") showDebugToast("✅ Collection restaurée !");
  else alert("Collection restaurée !");
}
window.resetToDefaultCollection = resetToDefaultCollection;

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
// EXPOSITION GLOBALE POUR FIREBASE SYNC
// ==========================================
// Firebase.js lit/écrit window.collectionData et window.photocardsData
Object.defineProperty(window, 'collectionData', {
  get: () => collectionData,
  set: (v) => { collectionData = v; },
  configurable: true
});
Object.defineProperty(window, 'photocardsData', {
  get: () => photocardsData,
  set: (v) => { photocardsData = v; },
  configurable: true
});
Object.defineProperty(window, 'binderTotalPages', {
  get: () => binderTotalPages,
  set: (v) => { binderTotalPages = v; },
  configurable: true
});

window._loadLocalData = function() {
  collectionData   = JSON.parse(localStorage.getItem("kshelf_save"))        || defaultCollectionData;
  photocardsData   = JSON.parse(localStorage.getItem("kshelf_photocards"))  || [];
  binderTotalPages = parseInt(localStorage.getItem("kshelf_binder_pages")   || "1");
  if (window.initSidebar)   window.initSidebar();
  if (window.showDashboard) window.showDashboard();
};

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

// ==========================================
// CONCERTS — système complet
// ==========================================
let concertsData = JSON.parse(localStorage.getItem("kshelf_concerts")) || [];

function saveConcerts() {
  localStorage.setItem("kshelf_concerts", JSON.stringify(concertsData));
  syncSafe();
}

function concertDateLabel(dateStr) {
  if (!dateStr) return "Date inconnue";
  const d = new Date(dateStr);
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

function starsHtml(rating, interactive = false) {
  let html = `<div class="stars-row ${interactive ? 'interactive' : ''}" data-rating="${rating || 0}">`;
  for (let i = 1; i <= 5; i++) {
    const filled = i <= (rating || 0);
    html += interactive
      ? `<span class="star-icon ${filled ? 'filled' : ''}" onclick="setConcertRating(${i})">★</span>`
      : `<span class="star-icon ${filled ? 'filled' : ''}">★</span>`;
  }
  html += `</div>`;
  return html;
}

// ==========================================
// VUE LISTE DES CONCERTS
// ==========================================
function showConcerts() {
  document.querySelectorAll(".artist-item").forEach(el => el.classList.remove("active"));
  // sidebarTab est déjà "concerts" donc initSidebar() régénère le bon état actif
  document.documentElement.style.setProperty("--dynamic-agency-color", "rgba(255,255,255,0.3)");

  const sorted = [...concertsData].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  const cardsHtml = sorted.map(c => {
    const cover = c.photos && c.photos[0] ? c.photos[0] : null;
    const mediaContent = cover
      ? `<img src="${cover}" alt="${c.artist}" class="concert-card-img">`
      : `<div class="concert-card-placeholder">🎤</div>`;
    return `
      <div class="concert-card" onclick="openConcertDetail('${c.id}')">
        <div class="concert-card-media">
          ${mediaContent}
          <div class="concert-card-overlay">
            ${starsHtml(c.rating)}
          </div>
        </div>
        <div class="concert-card-info">
          <h4 class="concert-card-artist">${c.artist}</h4>
          <p class="concert-card-meta">${concertDateLabel(c.date)} · ${c.venue || "Lieu non renseigné"}</p>
          ${c.tour ? `<p class="concert-card-tour">${c.tour}</p>` : ""}
        </div>
      </div>`;
  }).join("");

  document.getElementById("main-content").innerHTML = `
    <div class="artist-view-header animate-fade">
      <div class="breadcrumbs">collection</div>
      <h2 class="artist-main-title">concerts.</h2>
      <p class="album-total-count">${concertsData.length} concert(s) vécu(s)</p>
    </div>
    <div class="concerts-grid animate-fade">
      ${cardsHtml || `
        <div class="concerts-empty-state">
          <div class="concerts-empty-icon">🎫</div>
          <p class="concerts-empty-title">Aucun concert pour l'instant</p>
          <p class="concerts-empty-desc">Ajoute ton premier souvenir de concert !</p>
          <button class="add-submit-btn" style="max-width:280px" onclick="openAddConcert()">+ Ajouter un concert</button>
        </div>`}
    </div>`;
}
window.showConcerts = showConcerts;

// ==========================================
// MODAL AJOUT / EDITION CONCERT
// ==========================================
let concertFormState = {
  id: null,
  rating: 0,
  photos: [],
  videos: [],
  setlist: [],
};

function openAddConcert(concertId = null) {
  const existing = concertId ? concertsData.find(c => c.id === concertId) : null;

  concertFormState = existing
    ? {
        id: existing.id,
        rating: existing.rating || 0,
        photos: [...(existing.photos || [])],
        videos: [],
        setlist: [...(existing.setlist || [])],
      }
    : { id: null, rating: 0, photos: [], videos: [], setlist: [] };

  const overlay = document.createElement("div");
  overlay.id = "concert-modal-overlay";
  overlay.className = "add-modal-overlay visible";
  overlay.onclick = (e) => { if (e.target === overlay) closeConcertModal(); };

  overlay.innerHTML = `
    <div class="add-modal glass-panel concert-form-modal">
      <button class="modal-close" onclick="closeConcertModal()">✕</button>
      <h2 class="add-modal-title">${existing ? "Modifier le concert" : "Ajouter un concert"}</h2>

      <div class="add-form concert-form">
        <div class="add-form-row">
          <div class="add-form-group">
            <label>Artiste *</label>
            <input type="text" id="concert-artist" placeholder="NewJeans" value="${existing?.artist || ""}">
          </div>
          <div class="add-form-group">
            <label>Date *</label>
            <input type="date" id="concert-date" value="${existing?.date || ""}">
          </div>
        </div>

        <div class="add-form-row">
          <div class="add-form-group">
            <label>Lieu</label>
            <input type="text" id="concert-venue" placeholder="AccorHotels Arena, Paris" value="${existing?.venue || ""}">
          </div>
          <div class="add-form-group">
            <label>Tournée</label>
            <input type="text" id="concert-tour" placeholder="World Tour 2026" value="${existing?.tour || ""}">
          </div>
        </div>

        <div class="add-form-group">
          <label>Ma note</label>
          <div id="concert-rating-picker">${starsHtml(concertFormState.rating, true)}</div>
        </div>

        <div class="add-form-group">
          <label>Mon avis</label>
          <textarea id="concert-review" placeholder="Une expérience inoubliable..." rows="4">${existing?.review || ""}</textarea>
        </div>

        <div class="add-form-group">
          <label>Setlist (un titre par ligne)</label>
          <textarea id="concert-setlist" placeholder="Hype Boy&#10;Attention&#10;Super Shy" rows="4">${(existing?.setlist || []).join("\n")}</textarea>
        </div>

        <div class="add-form-group">
          <label>Photos (URLs)</label>
          <div class="concert-url-input-row">
            <input type="text" id="concert-photo-url" placeholder="https://... (URL d'une image)">
            <button type="button" class="concert-add-url-btn" onclick="addConcertPhotoUrl()">+ Ajouter</button>
          </div>
          <div id="concert-photos-preview" class="concert-media-preview-grid">${renderMediaPreview(concertFormState.photos, 'photos')}</div>
        </div>

        <div id="concert-error" class="add-error" style="display:none"></div>
        <button class="add-submit-btn" onclick="submitConcert()">${existing ? "Enregistrer les modifications" : "Ajouter ce concert"}</button>
        ${existing ? `<button class="signout-btn" onclick="deleteConcert('${existing.id}')">Supprimer ce concert</button>` : ""}
      </div>
    </div>`;

  document.body.appendChild(overlay);

  // Attacher le listener preview sur le champ URL
  const urlInput = document.getElementById("concert-photo-url");
  if (urlInput) {
    urlInput.addEventListener("keydown", function(e) {
      if (e.key === "Enter") { e.preventDefault(); addConcertPhotoUrl(); }
    });
  }
}
window.openAddConcert = openAddConcert;

function closeConcertModal() {
  document.getElementById("concert-modal-overlay")?.remove();
}
window.closeConcertModal = closeConcertModal;

function setConcertRating(n) {
  concertFormState.rating = n;
  document.getElementById("concert-rating-picker").innerHTML = starsHtml(n, true);
}
window.setConcertRating = setConcertRating;

// ==========================================
// UPLOAD MEDIA (compression photos, vidéos en l'état)
// ==========================================
function compressConcertImage(file, maxSize = 1000, quality = 0.78) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxSize) { height *= maxSize / width; width = maxSize; }
        const canvas = document.createElement("canvas");
        canvas.width = width; canvas.height = height;
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

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleConcertMediaUpload(input, type) {
  const files = Array.from(input.files || []);
  for (const file of files) {
    try {
      if (type === "photos") {
        const compressed = await compressConcertImage(file);
        concertFormState.photos.push(compressed);
      } else {
        // Vidéos : pas de compression possible côté client simplement —
        // on prévient si trop lourd pour éviter de saturer le localStorage
        if (file.size > 8 * 1024 * 1024) {
          alert(`"${file.name}" dépasse 8MB et risque de ne pas pouvoir être sauvegardée localement. Privilégie des vidéos courtes.`);
        }
        const dataUrl = await readFileAsDataURL(file);
        concertFormState.videos.push(dataUrl);
      }
    } catch(e) {
      console.error("Erreur upload média concert:", e);
    }
  }
  document.getElementById(`concert-${type}-preview`).innerHTML = renderMediaPreview(concertFormState[type], type);
  input.value = "";
}
window.handleConcertMediaUpload = handleConcertMediaUpload;

function addConcertPhotoUrl() {
  const input = document.getElementById("concert-photo-url");
  if (!input) return;
  const url = input.value.trim();
  if (!url) return;
  if (!url.startsWith("http")) {
    alert("Merci d'entrer une URL valide commençant par http");
    return;
  }
  concertFormState.photos.push(url);
  document.getElementById("concert-photos-preview").innerHTML = renderMediaPreview(concertFormState.photos, "photos");
  input.value = "";
}
window.addConcertPhotoUrl = addConcertPhotoUrl;

function renderMediaPreview(items, type) {
  return items.map((src, i) => {
    const thumb = type === "photos"
      ? `<img src="${src}" class="concert-media-thumb">`
      : `<video src="${src}" class="concert-media-thumb"></video>`;
    return `<div class="concert-media-item">
      ${thumb}
      <button class="concert-media-remove" onclick="removeConcertMedia('${type}', ${i})">✕</button>
    </div>`;
  }).join("");
}

function removeConcertMedia(type, index) {
  concertFormState[type].splice(index, 1);
  document.getElementById(`concert-${type}-preview`).innerHTML = renderMediaPreview(concertFormState[type], type);
}
window.removeConcertMedia = removeConcertMedia;

// ==========================================
// SUBMIT / DELETE
// ==========================================
function submitConcert() {
  const artist = document.getElementById("concert-artist").value.trim();
  const date   = document.getElementById("concert-date").value;
  const venue  = document.getElementById("concert-venue").value.trim();
  const tour   = document.getElementById("concert-tour").value.trim();
  const review = document.getElementById("concert-review").value.trim();
  const setlistRaw = document.getElementById("concert-setlist").value.trim();
  const setlist = setlistRaw ? setlistRaw.split("\n").map(s => s.trim()).filter(Boolean) : [];
  const errEl = document.getElementById("concert-error");

  if (!artist || !date) {
    errEl.textContent = "L'artiste et la date sont obligatoires.";
    errEl.style.display = "block";
    return;
  }

  const concertObj = {
    id: concertFormState.id || ("concert_" + Date.now()),
    artist, date, venue, tour, review, setlist,
    rating: concertFormState.rating,
    photos: concertFormState.photos,
  };

  if (concertFormState.id) {
    const idx = concertsData.findIndex(c => c.id === concertFormState.id);
    if (idx !== -1) concertsData[idx] = concertObj;
  } else {
    concertsData.push(concertObj);
  }

  saveConcerts();
  closeConcertModal();
  showConcerts();
}
window.submitConcert = submitConcert;

function deleteConcert(id) {
  if (!confirm("Supprimer ce concert et tous ses souvenirs ?")) return;
  concertsData = concertsData.filter(c => c.id !== id);
  saveConcerts();
  closeConcertModal();
  showConcerts();
}
window.deleteConcert = deleteConcert;

// ==========================================
// FICHE DÉTAIL CONCERT
// ==========================================
function openConcertDetail(id) {
  const c = concertsData.find(x => x.id === id);
  if (!c) return;

  const overlay = document.createElement("div");
  overlay.id = "concert-detail-overlay";
  overlay.className = "add-modal-overlay visible";
  overlay.onclick = (e) => { if (e.target === overlay) closeConcertDetail(); };

  const photosHtml = (c.photos || []).map(src => `<img src="${src}" class="concert-gallery-photo" onclick="event.stopPropagation()">`).join("");
  const setlistHtml = (c.setlist || []).map((t, i) => `<div class="modal-track"><span class="modal-track-num">${i+1}</span><span class="modal-track-name">${t}</span></div>`).join("");

  overlay.innerHTML = `
    <div class="album-modal concert-detail-modal" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeConcertDetail()">✕</button>
      <div class="concert-detail-scroll">

        <div class="concert-detail-header">
          <p class="modal-agency">${concertDateLabel(c.date)}${c.tour ? " · " + c.tour : ""}</p>
          <h2 class="modal-title">${c.artist}</h2>
          <p class="modal-artist">📍 ${c.venue || "Lieu non renseigné"}</p>
          ${starsHtml(c.rating)}
        </div>

        ${c.review ? `<div class="concert-detail-section">
          <h3 class="modal-section-title">Mon avis</h3>
          <p class="concert-review-text">${c.review}</p>
        </div>` : ""}

        ${setlistHtml ? `<div class="concert-detail-section">
          <h3 class="modal-section-title">Setlist</h3>
          <div class="modal-tracks-container">${setlistHtml}</div>
        </div>` : ""}

        ${photosHtml ? `<div class="concert-detail-section">
          <h3 class="modal-section-title">Photos</h3>
          <div class="concert-gallery-grid">${photosHtml}</div>
        </div>` : ""}

        <div class="concert-detail-actions">
          <button class="add-submit-btn" onclick="closeConcertDetail(); openAddConcert('${c.id}')">✎ Modifier</button>
        </div>

      </div>
    </div>`;

  document.body.appendChild(overlay);
}
window.openConcertDetail = openConcertDetail;

function closeConcertDetail() {
  document.getElementById("concert-detail-overlay")?.remove();
}
window.closeConcertDetail = closeConcertDetail;

// Exposer pour Firebase sync
Object.defineProperty(window, 'concertsData', {
  get: () => concertsData,
  set: (v) => { concertsData = v; },
  configurable: true
});

// ==========================================
// VUE FAVORIS
// ==========================================
function showFavorites(filter = "all") {
  document.querySelectorAll(".artist-item").forEach(el => el.classList.remove("active"));
  document.documentElement.style.setProperty("--dynamic-agency-color", "rgba(255,215,0,0.4)");

  // Collecter tous les favoris
  const favAlbums = [];
  for (const ag in collectionData)
    for (const ar in collectionData[ag])
      collectionData[ag][ar].forEach(a => {
        if (a.status === "favorite") favAlbums.push({ ...a, artist: ar, agency: ag });
      });
  const favPcs    = photocardsData.filter(pc => pc.status === "favorite");
  const favConcs  = concertsData.filter(c => c.favorite);

  let html = "";

  // Albums favoris
  if (filter === "all" || filter === "albums") {
    if (favAlbums.length) {
      const cards = favAlbums.map(a => albumCardHtml(a, a.artist, a.agency)).join("");
      html += `<div class="favorites-section">
        <h3 class="favorites-section-label">⭐ Albums</h3>
        <div class="albums-display-grid">${cards}</div>
      </div>`;
    }
  }

  // Photocards favorites
  if (filter === "all" || filter === "photocards") {
    if (favPcs.length) {
      const cards = favPcs.map(pc => {
        const isFav = true;
        const agencyOfCard = Object.keys(collectionData).find(ag => collectionData[ag][pc.artist] !== undefined) || "Autres / Indés";
        const auraColor = agencyThemes[agencyOfCard] || "#ffffff";
        const imgContent = pc.img
          ? `<img src="${pc.img}" alt="${pc.member||''}" class="binder-card-img">`
          : `<div class="binder-card-empty-img"><span>${pc.member?pc.member[0]:"?"}</span></div>`;
        return `
          <div class="binder-slot-wrapper is-favorite">
            <div class="group-aura" style="--aura-color:${auraColor}"></div>
            <div class="binder-slot filled is-favorite">
              <div class="binder-card-tilt">
                ${imgContent}
                <div class="holo-layer"></div>
                <div class="binder-card-info">
                  <span class="binder-card-member">${pc.member||"—"}</span>
                  <span class="binder-card-artist">${pc.artist}</span>
                </div>
              </div>
            </div>
          </div>`;
      }).join("");
      html += `<div class="favorites-section">
        <h3 class="favorites-section-label">★ Photocards</h3>
        <div class="binder-grid" style="max-width:600px">${cards}</div>
      </div>`;
    }
  }

  // Concerts favoris
  if (filter === "all" || filter === "concerts") {
    if (favConcs.length) {
      const cards = favConcs.map(c => {
        const cover = c.photos && c.photos[0] ? c.photos[0] : null;
        return `
          <div class="concert-card" onclick="openConcertDetail('${c.id}')">
            <div class="concert-card-media">
              ${cover ? `<img src="${cover}" alt="${c.artist}" class="concert-card-img">` : `<div class="concert-card-placeholder">🎤</div>`}
              <div class="concert-card-overlay">${starsHtml(c.rating)}</div>
            </div>
            <div class="concert-card-info">
              <h4 class="concert-card-artist">${c.artist}</h4>
              <p class="concert-card-meta">${concertDateLabel(c.date)}</p>
            </div>
          </div>`;
      }).join("");
      html += `<div class="favorites-section">
        <h3 class="favorites-section-label">🎤 Concerts</h3>
        <div class="concerts-grid">${cards}</div>
      </div>`;
    }
  }

  if (!html) {
    html = `<div class="concerts-empty-state">
      <div class="concerts-empty-icon">⭐</div>
      <p class="concerts-empty-title">Aucun favori pour l'instant</p>
      <p class="concerts-empty-desc">Clique sur ★ sur un album, une photocard ou un concert !</p>
    </div>`;
  }

  document.getElementById("main-content").innerHTML = `
    <div class="artist-view-header animate-fade">
      <div class="breadcrumbs">collection</div>
      <h2 class="artist-main-title">favoris.</h2>
      <p class="album-total-count">${favAlbums.length + favPcs.length + favConcs.length} élément(s)</p>
    </div>
    <div class="favorites-content animate-fade">${html}</div>`;

  // Réactiver le tilt sur les photocards favoris
  setTimeout(initTilt, 60);
}
window.showFavorites = showFavorites;

// ==========================================
// PROFIL ENRICHI — BIASES & RÉSEAUX
// ==========================================
let profileExtra = JSON.parse(localStorage.getItem("kshelf_profile_extra") || "{}");
Object.defineProperty(window, 'profileExtra', {
  get: () => profileExtra,
  set: (v) => { profileExtra = v; },
  configurable: true
});
// { favGroup, favAlbum, youtube, tiktok, pinterest, kpopping, biases: [{name, group, img}] }

function saveProfileExtra() {
  localStorage.setItem("kshelf_profile_extra", JSON.stringify(profileExtra));
  if (window.syncToFirestore) window.syncToFirestore();
}

// Charger les données dans le modal
function loadProfileExtraIntoForm() {
  const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ""; };
  setVal("profile-fav-group",  profileExtra.favGroup);
  setVal("profile-fav-album",  profileExtra.favAlbum);
  setVal("profile-youtube",    profileExtra.youtube);
  setVal("profile-tiktok",     profileExtra.tiktok);
  setVal("profile-pinterest",  profileExtra.pinterest);
  setVal("profile-kpopping",   profileExtra.kpopping);
  renderBiasesGrid();
}
window.loadProfileExtraIntoForm = loadProfileExtraIntoForm;

// Chercher une photo de l'artiste via MusicBrainz cover art / last.fm
async function fetchArtistPhoto(name, group) {
  const query = group ? `${name} ${group} kpop` : `${name} kpop`;
  // On utilise l'API de recherche d'images publique de Wikipedia (librement accessible)
  try {
    const wikiRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(name + (group ? " (" + group + ")" : ""))}&prop=pageimages&format=json&pithumbsize=200&origin=*`);
    const wikiData = await wikiRes.json();
    const pages = wikiData.query?.pages;
    if (pages) {
      const page = Object.values(pages)[0];
      if (page?.thumbnail?.source) return page.thumbnail.source;
    }
  } catch(e) {}
  // Fallback : avatar généré avec initiales
  return null;
}

// Rendu de la grille des biases
function renderBiasesGrid() {
  const grid = document.getElementById("biases-grid");
  if (!grid) return;
  const biases = profileExtra.biases || [];
  grid.innerHTML = biases.map((b, i) => `
    <div class="bias-card">
      <div class="bias-avatar">
        ${b.img ? `<img src="${b.img}" alt="${b.name}">` : `<span>${b.name[0]}</span>`}
      </div>
      <p class="bias-name">${b.name}</p>
      <p class="bias-group">${b.group || ""}</p>
      <button class="bias-remove" onclick="removeBias(${i})">✕</button>
    </div>`).join("") +
    (biases.length < 6 ? "" : "");
}

async function addBias() {
  const nameEl  = document.getElementById("bias-name-input");
  const groupEl = document.getElementById("bias-group-input");
  const name  = nameEl?.value.trim();
  const group = groupEl?.value.trim();
  if (!name) return;
  if ((profileExtra.biases || []).length >= 6) { alert("Maximum 6 biases !"); return; }

  // Chercher une photo automatiquement
  const img = await fetchArtistPhoto(name, group);
  if (!profileExtra.biases) profileExtra.biases = [];
  profileExtra.biases.push({ name, group, img: img || "" });
  renderBiasesGrid();
  if (nameEl) nameEl.value = "";
  if (groupEl) groupEl.value = "";
}
window.addBias = addBias;

function removeBias(index) {
  profileExtra.biases = (profileExtra.biases || []).filter((_, i) => i !== index);
  renderBiasesGrid();
}
window.removeBias = removeBias;

// ==========================================
// PROFIL PUBLIC
// ==========================================
function openPublicProfile() {
  const user = window._currentUser;
  if (!user) return;
  const pseudo   = localStorage.getItem(`kshelf_pseudo_${user.uid}`) || user.displayName || "Utilisateur";
  const photoURL = localStorage.getItem(`kshelf_photo_${user.uid}`) || user.photoURL || "";
  const extra    = profileExtra;

  // Stats
  let totalAlbums = 0, favAlbums = 0;
  for (const ag in collectionData)
    for (const ar in collectionData[ag]) {
      totalAlbums += collectionData[ag][ar].length;
      favAlbums   += collectionData[ag][ar].filter(a => a.status === "favorite").length;
    }

  const biasesHtml = (extra.biases || []).map(b => `
    <div class="public-bias-card">
      <div class="public-bias-avatar">
        ${b.img ? `<img src="${b.img}" alt="${b.name}">` : `<span>${b.name[0]}</span>`}
      </div>
      <p class="public-bias-name">${b.name}</p>
      <p class="public-bias-group">${b.group || ""}</p>
    </div>`).join("");

  const socialsHtml = [
    extra.youtube    ? `<a class="public-social-link" href="https://youtube.com/${extra.youtube}" target="_blank"><span class="public-social-icon">▶</span>${extra.youtube}</a>` : "",
    extra.tiktok     ? `<a class="public-social-link" href="https://tiktok.com/${extra.tiktok}" target="_blank"><span class="public-social-icon">♪</span>${extra.tiktok}</a>` : "",
    extra.pinterest  ? `<a class="public-social-link" href="https://pinterest.com/${extra.pinterest}" target="_blank"><span class="public-social-icon">P</span>${extra.pinterest}</a>` : "",
    extra.kpopping   ? `<a class="public-social-link" href="https://kpopping.com/${extra.kpopping}" target="_blank"><span class="public-social-icon">K</span>${extra.kpopping}</a>` : "",
  ].filter(Boolean).join("");

  const overlay = document.createElement("div");
  overlay.id = "public-profile-overlay";
  overlay.className = "add-modal-overlay visible";
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

  overlay.innerHTML = `
    <div class="album-modal public-profile-modal" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="document.getElementById('public-profile-overlay').remove()">✕</button>
      <div class="public-profile-scroll">

        <div class="public-profile-header">
          <div class="public-profile-avatar">
            ${photoURL ? `<img src="${photoURL}" alt="${pseudo}">` : `<span>${pseudo[0]}</span>`}
          </div>
          <h2 class="public-profile-name">${pseudo}</h2>
          ${socialsHtml ? `<div class="public-socials">${socialsHtml}</div>` : ""}
        </div>

        <div class="public-stats-row">
          <div class="public-stat"><span class="public-stat-num">${totalAlbums}</span><span class="public-stat-label">albums</span></div>
          <div class="public-stat"><span class="public-stat-num">${favAlbums}</span><span class="public-stat-label">favoris</span></div>
          <div class="public-stat"><span class="public-stat-num">${concertsData.length}</span><span class="public-stat-label">concerts</span></div>
          <div class="public-stat"><span class="public-stat-num">${photocardsData.length}</span><span class="public-stat-label">photocards</span></div>
        </div>

        ${extra.favGroup || extra.favAlbum ? `
        <div class="public-fav-section">
          ${extra.favGroup ? `<div class="public-fav-item"><span class="public-fav-label">Groupe favori</span><span class="public-fav-value">${extra.favGroup}</span></div>` : ""}
          ${extra.favAlbum ? `<div class="public-fav-item"><span class="public-fav-label">Album favori</span><span class="public-fav-value">${extra.favAlbum}</span></div>` : ""}
        </div>` : ""}

        ${biasesHtml ? `
        <div class="public-biases-section">
          <h3 class="modal-section-title">Mes biases</h3>
          <div class="public-biases-grid">${biasesHtml}</div>
        </div>` : ""}

      </div>
    </div>`;

  document.body.appendChild(overlay);
}
window.openPublicProfile = openPublicProfile;
