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

// 💾 Ta base de données complète avec l'option "mp3" pour chaque premier album !
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
    ILLIT: [{ title: "ILLIT - NOT CUTE ANYMORE", img: "https://media.asiaworldmusic.fr/94638-large_default/illit-not-cute-anymore.jpg", status: "wishlist", mp3: "musique/illit-NOT-CUTE-ANYMORE" }],
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

let collectionData = JSON.parse(localStorage.getItem("kshelf_save")) || defaultCollectionData;
let currentPlaylist = [];
let currentTrackIndex = 0;

const audioPlayer = document.getElementById("local-audio-player");
const playBtn = document.querySelector(".player-btn.play");
const progressBar = document.querySelector(".progress-bar");
const trackStatus = document.querySelector(".track-status");
const playerTitle = document.getElementById("player-title");

function saveCollection() {
  localStorage.setItem("kshelf_save", JSON.stringify(collectionData));
}

function toggleAlbumStatus(agency, artist, albumTitle) {
  const albums = collectionData[agency][artist];
  const album = albums.find((a) => a.title === albumTitle);
  if (album) {
    album.status = album.status === "owned" ? "wishlist" : "owned";
    saveCollection();
    const searchQuery = document.getElementById("album-search").value.toLowerCase().trim();
    if (searchQuery) handleSearch(); else renderAlbumGrid(agency, artist, albums);
  }
}

function initSidebar() {
  const nav = document.getElementById("sidebar-nav");
  let html = "";
  for (const agency in collectionData) {
    const color = agencyThemes[agency] || "#ffffff";
    html += `
        <div class="agency-section">
            <div class="agency-title" style="color: ${color}">${agency}</div>
            <div class="artist-list">
    `;
    for (const artist in collectionData[agency]) {
      html += `<div class="artist-item" data-artist="${artist}" onclick="selectArtist('${agency}', '${artist}')">${artist}</div>`;
    }
    html += `</div></div>`;
  }
  nav.innerHTML = html;
}

function showDashboard() {
  document.querySelectorAll(".artist-item").forEach((el) => el.classList.remove("active"));
  document.getElementById("album-search").value = "";
  document.documentElement.style.setProperty("--dynamic-agency-color", "rgba(255,255,255,0.2)");

  let totalAlbums = 0; let totalArtists = 0;
  let totalAgencies = Object.keys(collectionData).length;

  for (const agency in collectionData) {
    totalArtists += Object.keys(collectionData[agency]).length;
    for (const artist in collectionData[agency]) {
      totalAlbums += collectionData[agency][artist].length;
    }
  }

  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
        <div class="dashboard-view animate-fade">
            <h2 class="welcome-title">ma collection virtuelle.</h2>
            <p class="welcome-desc">explorez et gérez vos albums physiques en temps réel.</p>
            <div class="stats-grid">
                <div class="stat-card"><span class="stat-number">${totalAlbums}</span><br><span class="stat-label">albums</span></div>
                <div class="stat-card"><span class="stat-number">${totalArtists}</span><br><span class="stat-label">artistes</span></div>
                <div class="stat-card"><span class="stat-number">${totalAgencies}</span><br><span class="stat-label">agences</span></div>
            </div>
        </div>
    `;
}

function selectArtist(agency, artist) {
  document.querySelectorAll(".artist-item").forEach((el) => el.classList.remove("active"));
  const activeItem = document.querySelector(`[data-artist="${artist}"]`);
  if (activeItem) activeItem.classList.add("active");

  const brandColor = agencyThemes[agency] || "#ffffff";
  document.documentElement.style.setProperty("--dynamic-agency-color", brandColor);

  const albums = collectionData[agency][artist];
  
  currentPlaylist = albums.filter(album => album.mp3 !== "");
  if (currentPlaylist.length > 0) {
    currentTrackIndex = 0;
    loadTrack(currentTrackIndex);
  } else {
    playerTitle.innerText = "Aucun MP3 associé à cet artiste";
    trackStatus.innerText = "Lecteur Hors-Ligne";
    audioPlayer.src = "";
  }

  renderAlbumGrid(agency, artist, albums);
}

function renderAlbumGrid(agency, artist, albums) {
  const mainContent = document.getElementById("main-content");
  let cardsHtml = "";

  albums.forEach((album) => {
    const mediaContent = album.img
      ? `<img src="${album.img}" alt="${album.title}" class="album-artwork" loading="lazy">`
      : `<div class="album-artwork-placeholder">💿</div>`;
    const statusLabel = album.status === "owned" ? "● possédé" : "○ wishlist";

    cardsHtml += `
            <div class="album-card">
                <div class="album-media-wrapper">${mediaContent}</div>
                <div class="album-meta-header">
                    <h4 class="album-title-text">${album.title}</h4>
                    <span class="status-badge ${album.status}" onclick="toggleAlbumStatus('${agency}', '${artist}', '${album.title.replace(/'/g, "\\'")}')">${statusLabel}</span>
                </div>
                <span class="agency-tag">${agency}</span>
            </div>
        `;
  });

  mainContent.innerHTML = `
        <div class="artist-view-header animate-fade">
            <div class="breadcrumbs">${agency}  ›  ${artist}</div>
            <h2 class="artist-main-title">${artist}.</h2>
            <p class="album-total-count">${albums.length} disque(s) trouvé(s) — Clic sur le badge pour modifier</p>
        </div>
        <div class="albums-display-grid animate-fade">
            ${cardsHtml ? cardsHtml : '<p class="no-result">Aucun album trouvé.</p>'}
        </div>
    `;
}

function handleSearch() {
  const query = document.getElementById("album-search").value.toLowerCase().trim();
  if (!query) { showDashboard(); return; }

  document.querySelectorAll(".artist-item").forEach((el) => el.classList.remove("active"));
  document.documentElement.style.setProperty("--dynamic-agency-color", "#ffffff");

  let results = [];
  for (const agency in collectionData) {
    for (const artist in collectionData[agency]) {
      collectionData[agency][artist].forEach((album) => {
        if (album.title.toLowerCase().includes(query) || artist.toLowerCase().includes(query)) {
          results.push({ ...album, agency: agency, artist: artist });
        }
      });
    }
  }

  const mainContent = document.getElementById("main-content");
  let cardsHtml = "";

  results.forEach((album) => {
    const mediaContent = album.img ? `<img src="${album.img}" alt="${album.title}" class="album-artwork" loading="lazy">` : `<div class="album-artwork-placeholder">💿</div>`;
    const statusLabel = album.status === "owned" ? "● possédé" : "○ wishlist";

    cardsHtml += `
            <div class="album-card">
                <div class="album-media-wrapper">${mediaContent}</div>
                <div class="album-meta-header">
                    <h4 class="album-title-text">${album.title}</h4>
                    <span class="status-badge ${album.status}" onclick="toggleAlbumStatus('${album.agency}', '${album.artist}', '${album.title.replace(/'/g, "\\'")}')">${statusLabel}</span>
                </div>
                <span class="agency-tag">${album.artist}</span>
            </div>
        `;
  });

  mainContent.innerHTML = `
        <div class="artist-view-header animate-fade">
            <div class="breadcrumbs">Recherche globale</div>
            <h2 class="artist-main-title">résultats.</h2>
            <p class="album-total-count">${results.length} album(s) trouvé(s)</p>
        </div>
        <div class="albums-display-grid animate-fade">
            ${cardsHtml ? cardsHtml : '<p class="no-result">Aucun résultat.</p>'}
        </div>
    `;
}

// ==========================================
// SYSTEME AUDIO LOCAL
// ==========================================
function loadTrack(index) {
  if (currentPlaylist.length === 0) return;
  const track = currentPlaylist[index];
  audioPlayer.src = track.mp3;
  playerTitle.innerText = track.title;
  trackStatus.innerText = "Prêt à écouter 🎧";
  progressBar.style.width = "0%";
  playBtn.innerText = "▶";
}

function togglePlay() {
  if (!audioPlayer.src || currentPlaylist.length === 0) return;
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.innerText = "⏸";
    trackStatus.innerText = "En cours de lecture 🔊";
  } else {
    audioPlayer.pause();
    playBtn.innerText = "▶";
    trackStatus.innerText = "Pause ⏸";
  }
}

function nextTrack() {
  if (currentPlaylist.length === 0) return;
  currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
  loadTrack(currentTrackIndex);
  audioPlayer.play();
  playBtn.innerText = "⏸";
  trackStatus.innerText = "En cours de lecture 🔊";
}

function prevTrack() {
  if (currentPlaylist.length === 0) return;
  currentTrackIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
  loadTrack(currentTrackIndex);
  audioPlayer.play();
  playBtn.innerText = "⏸";
  trackStatus.innerText = "En cours de lecture 🔊";
}

audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.duration) {
    const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${pct}%`;
  }
});

audioPlayer.addEventListener("ended", nextTrack);

document.querySelector(".player-btn.play").onclick = togglePlay;
document.querySelectorAll(".player-btn")[0].onclick = prevTrack;
document.querySelectorAll(".player-btn")[2].onclick = nextTrack;

const spotifyBtn = document.getElementById("spotify-connect-btn");
if (spotifyBtn) {
  spotifyBtn.innerText = "Mode Hors-Ligne Actif";
  spotifyBtn.style.background = "#2e3440";
  spotifyBtn.style.cursor = "default";
  spotifyBtn.onclick = null;
}

initSidebar();
showDashboard();

window.showDashboard = showDashboard;
window.selectArtist = selectArtist;
window.handleSearch = handleSearch;
window.toggleAlbumStatus = toggleAlbumStatus;
