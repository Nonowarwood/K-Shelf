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
  const albums = collectionData[agency]?.[artist];
  if (!albums) return;
  
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
      const safeArtist = encodeURIComponent(artist);
      const safeAgency = encodeURIComponent(agency);
      html += `<div class="artist-item" data-artist="${artist}" onclick="selectArtist('${safeAgency}', '${safeArtist}')">${artist}</div>`;
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

function selectArtist(encodedAgency, encodedArtist) {
  const agency = decodeURIComponent(encodedAgency);
  const artist = decodeURIComponent(encodedArtist);

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
    currentPlaylist = [];
    audioPlayer.pause();
    audioPlayer.src = "";
    playerTitle.innerText = "Aucun morceau sélectionné";
    trackStatus.innerText = "Lecteur Hors-Ligne";
    progressBar.style.width = "0%";
    playBtn.innerText = "▶";
    
    document.getElementById("player-cover").style.display = "none";
    document.getElementById("player-emoji").style.display = "inline";
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

    const safeTitle = encodeURIComponent(album.title);
    const safeArtist = encodeURIComponent(artist);
    const safeAgency = encodeURIComponent(agency);

    const spotifyBtn = spotifyAccessToken
      ? `<button class="spotify-album-btn" onclick="playAlbumOnSpotify('${artist}', '${album.title.replace(/'/g, "\\'")}')">▶ Spotify</button>`
      : "";

    cardsHtml += `
            <div class="album-card">
                <div class="album-media-wrapper">${mediaContent}</div>
                <div class="album-meta-header">
                    <h4 class="album-title-text">${album.title}</h4>
                    <span class="status-badge ${album.status}" onclick="toggleAlbumStatus('${safeAgency}', '${safeArtist}', '${safeTitle}')">${statusLabel}</span>
                </div>
                <div class="album-card-footer">
                  <span class="agency-tag">${agency}</span>
                  ${spotifyBtn}
                </div>
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

window.toggleAlbumStatus = function(encodedAgency, encodedArtist, encodedTitle) {
  toggleAlbumStatus(
    decodeURIComponent(encodedAgency),
    decodeURIComponent(encodedArtist),
    decodeURIComponent(encodedTitle)
  );
};

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

    const safeTitle = encodeURIComponent(album.title);
    const safeArtist = encodeURIComponent(album.artist);
    const safeAgency = encodeURIComponent(album.agency);

    const spotifyBtnSearch = spotifyAccessToken
      ? `<button class="spotify-album-btn" onclick="playAlbumOnSpotify('${album.artist}', '${album.title.replace(/'/g, "\\'")}')">▶ Spotify</button>`
      : "";

    cardsHtml += `
            <div class="album-card">
                <div class="album-media-wrapper">${mediaContent}</div>
                <div class="album-meta-header">
                    <h4 class="album-title-text">${album.title}</h4>
                    <span class="status-badge ${album.status}" onclick="toggleAlbumStatus('${safeAgency}', '${safeArtist}', '${safeTitle}')">${statusLabel}</span>
                </div>
                <div class="album-card-footer">
                  <span class="agency-tag">${album.artist}</span>
                  ${spotifyBtnSearch}
                </div>
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
  
  let songTitle = track.title;
  if (track.title.includes(" - ")) {
    songTitle = track.title.split(" - ")[1];
  }
  playerTitle.innerText = songTitle;
  
  const playerCover = document.getElementById("player-cover");
  const playerEmoji = document.getElementById("player-emoji");
  
  if (track.img) {
    playerCover.src = track.img;
    playerCover.style.display = "block";
    if (playerEmoji) playerEmoji.style.display = "none";
  } else {
    playerCover.style.display = "none";
    if (playerEmoji) playerEmoji.style.display = "inline";
  }
  
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

// ==========================================
// SPOTIFY INTEGRATION — PKCE OAuth Flow
// ==========================================

const SPOTIFY_CLIENT_ID = "af102f75697746ccbc32cdd3e24e7a55";
const SPOTIFY_REDIRECT_URI = "https://nonowarwood.github.io/K-Shelf/";
const SPOTIFY_SCOPES = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
].join(" ");

let spotifyAccessToken = null;
let spotifyTokenExpiry = null;
let nowPlayingInterval = null;

// --- PKCE helpers ---
function generateCodeVerifier() {
  const array = new Uint8Array(64);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

async function generateCodeChallenge(verifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

// --- Login ---
async function loginSpotify() {
  const verifier = generateCodeVerifier();
  const challenge = await generateCodeChallenge(verifier);
  localStorage.setItem("spotify_code_verifier", verifier);

  const params = new URLSearchParams({
    client_id: SPOTIFY_CLIENT_ID,
    response_type: "code",
    redirect_uri: SPOTIFY_REDIRECT_URI,
    code_challenge_method: "S256",
    code_challenge: challenge,
    scope: SPOTIFY_SCOPES,
  });

  window.location.href = `https://accounts.spotify.com/authorize?${params}`;
}

// --- Exchange code for token ---
async function exchangeSpotifyCode(code) {
  const verifier = localStorage.getItem("spotify_code_verifier");
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: SPOTIFY_REDIRECT_URI,
      client_id: SPOTIFY_CLIENT_ID,
      code_verifier: verifier,
    }),
  });

  if (!response.ok) {
    console.error("Spotify token exchange failed:", await response.text());
    return;
  }

  const data = await response.json();
  spotifyAccessToken = data.access_token;
  spotifyTokenExpiry = Date.now() + data.expires_in * 1000;
  localStorage.setItem("spotify_access_token", spotifyAccessToken);
  localStorage.setItem("spotify_token_expiry", spotifyTokenExpiry);

  localStorage.removeItem("spotify_code_verifier");
  // Nettoyer l'URL
  window.history.replaceState({}, document.title, SPOTIFY_REDIRECT_URI);

  onSpotifyConnected();
}

// --- Restore token depuis localStorage ---
function restoreSpotifySession() {
  const token = localStorage.getItem("spotify_access_token");
  const expiry = parseInt(localStorage.getItem("spotify_token_expiry") || "0");
  if (token && Date.now() < expiry) {
    spotifyAccessToken = token;
    spotifyTokenExpiry = expiry;
    onSpotifyConnected();
    return true;
  }
  return false;
}

// --- Disconnect ---
function disconnectSpotify() {
  spotifyAccessToken = null;
  spotifyTokenExpiry = null;
  localStorage.removeItem("spotify_access_token");
  localStorage.removeItem("spotify_token_expiry");
  if (nowPlayingInterval) clearInterval(nowPlayingInterval);
  nowPlayingInterval = null;
  updateSpotifyButton(false);
  // Remettre le player en mode hors-ligne
  trackStatus.innerText = "Lecteur Hors-Ligne";
  playerTitle.innerText = "Aucun morceau sélectionné";
  document.getElementById("player-cover").style.display = "none";
  document.getElementById("player-emoji").style.display = "inline";
}

// --- UI du bouton Spotify ---
function updateSpotifyButton(connected) {
  const btn = document.getElementById("spotify-connect-btn");
  if (!btn) return;
  if (connected) {
    btn.innerText = "✓ Spotify connecté";
    btn.style.background = "#1DB954";
    btn.style.color = "#000";
    btn.style.cursor = "pointer";
    btn.onclick = disconnectSpotify;
  } else {
    btn.innerText = "connexion spotify";
    btn.style.background = "";
    btn.style.color = "";
    btn.style.cursor = "pointer";
    btn.onclick = loginSpotify;
  }
}

// --- Appelé quand Spotify est connecté ---
function onSpotifyConnected() {
  updateSpotifyButton(true);
  startNowPlayingPolling();
}

// ==========================================
// NOW PLAYING — Polling toutes les 5s
// ==========================================
async function fetchNowPlaying() {
  if (!spotifyAccessToken || Date.now() > spotifyTokenExpiry) {
    disconnectSpotify();
    return;
  }

  try {
    const res = await fetch("https://api.spotify.com/v1/me/player", {
      headers: { Authorization: `Bearer ${spotifyAccessToken}` },
    });

    if (res.status === 204 || res.status === 404) {
      // Rien en cours de lecture
      trackStatus.innerText = "Spotify connecté — rien en lecture";
      return;
    }

    if (!res.ok) return;

    const data = await res.json();
    const track = data.item;
    if (!track) return;

    const isPlaying = data.is_playing;
    const title = track.name;
    const artist = track.artists.map(a => a.name).join(", ");
    const coverUrl = track.album?.images?.[0]?.url;
    const progressPct = (data.progress_ms / track.duration_ms) * 100;

    // Mettre à jour le mini-player
    playerTitle.innerText = `${title}`;
    trackStatus.innerText = isPlaying ? `▶ ${artist}` : `⏸ ${artist}`;

    const playerCover = document.getElementById("player-cover");
    const playerEmoji = document.getElementById("player-emoji");
    if (coverUrl) {
      playerCover.src = coverUrl;
      playerCover.style.display = "block";
      if (playerEmoji) playerEmoji.style.display = "none";
    }

    progressBar.style.width = `${progressPct}%`;
    playBtn.innerText = isPlaying ? "⏸" : "▶";

  } catch (err) {
    console.error("Now playing error:", err);
  }
}

function startNowPlayingPolling() {
  fetchNowPlaying();
  if (nowPlayingInterval) clearInterval(nowPlayingInterval);
  nowPlayingInterval = setInterval(fetchNowPlaying, 5000);
}

// ==========================================
// CONTROLES SPOTIFY
// ==========================================
async function spotifyControl(endpoint, method = "POST") {
  if (!spotifyAccessToken) return false;
  try {
    const res = await fetch(`https://api.spotify.com/v1/me/player/${endpoint}`, {
      method,
      headers: { Authorization: `Bearer ${spotifyAccessToken}` },
    });
    // 204 = succès sans body, 403 = pas Premium
    if (res.status === 403) {
      alert("Le contrôle de lecture nécessite Spotify Premium.");
      return false;
    }
    return true;
  } catch (err) {
    console.error("Spotify control error:", err);
    return false;
  }
}

async function spotifyTogglePlay() {
  if (!spotifyAccessToken) { togglePlay(); return; }
  const isPlaying = playBtn.innerText === "⏸";
  const ok = await spotifyControl(isPlaying ? "pause" : "play");
  if (ok) setTimeout(fetchNowPlaying, 300);
}

async function spotifyNext() {
  if (!spotifyAccessToken) { nextTrack(); return; }
  const ok = await spotifyControl("next");
  if (ok) setTimeout(fetchNowPlaying, 300);
}

async function spotifyPrev() {
  if (!spotifyAccessToken) { prevTrack(); return; }
  const ok = await spotifyControl("previous");
  if (ok) setTimeout(fetchNowPlaying, 300);
}

// ==========================================
// LIER UN ALBUM A SPOTIFY (recherche + lecture)
// ==========================================
async function playAlbumOnSpotify(artistName, albumTitle) {
  if (!spotifyAccessToken) {
    alert("Connecte-toi à Spotify d'abord !");
    return;
  }

  // Extraire le vrai titre de l'album (avant la parenthèse de version)
  const cleanTitle = albumTitle
    .replace(/\s*\(.*?\)\s*/g, "")  // enlève (Moon ver.) etc.
    .replace(/\s*\[.*?\]\s*/g, "")  // enlève [EUROPE] etc.
    .trim();

  const query = encodeURIComponent(`album:${cleanTitle} artist:${artistName}`);

  try {
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=album&limit=1`,
      { headers: { Authorization: `Bearer ${spotifyAccessToken}` } }
    );
    const data = await res.json();
    const album = data.albums?.items?.[0];

    if (!album) {
      alert(`Album introuvable sur Spotify : "${cleanTitle}"`);
      return;
    }

    // Lancer la lecture de l'album
    await fetch("https://api.spotify.com/v1/me/player/play", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${spotifyAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ context_uri: album.uri }),
    });

    setTimeout(fetchNowPlaying, 800);
  } catch (err) {
    console.error("Spotify album search error:", err);
  }
}

// Exposer pour les cards HTML
window.playAlbumOnSpotify = playAlbumOnSpotify;

// ==========================================
// OVERRIDE DES BOUTONS DU PLAYER
// ==========================================
document.querySelector(".player-btn.play").onclick = spotifyTogglePlay;
document.querySelectorAll(".player-btn")[0].onclick = spotifyPrev;
document.querySelectorAll(".player-btn")[2].onclick = spotifyNext;

// ==========================================
// INIT — gestion du callback OAuth
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const authCode = urlParams.get("code");

if (authCode) {
  exchangeSpotifyCode(authCode);
} else {
  restoreSpotifySession();
  updateSpotifyButton(!!spotifyAccessToken);
}

initSidebar();
showDashboard();

window.showDashboard = showDashboard;
window.selectArtist = selectArtist;
window.handleSearch = handleSearch;
