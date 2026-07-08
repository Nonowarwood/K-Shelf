// ═══════════════════════════════════════════════════════════════
// K-SHELF — PROFIL V2 (top 3 albums + badges + partage fan card)
// À charger APRÈS script.js et firebase.js :
//   <script src="kprofile-v2.js"></script>
// N'écrase rien : étend openProfilePage, réutilise profileExtra,
// collectionData, concertsData, photocardsData, saveProfileExtra.
// ═══════════════════════════════════════════════════════════════

(function () {
  "use strict";

  // ---------- Helpers ----------
  function allAlbumsFlat() {
    const out = [];
    for (const ag in collectionData)
      for (const ar in collectionData[ag])
        collectionData[ag][ar].forEach(a => out.push({ ...a, artist: ar, agency: ag }));
    return out;
  }

  function getExtra() {
    return JSON.parse(localStorage.getItem("kshelf_profile_extra") || "{}");
  }

  // ══════════════════════════════════════
  // TOP 3 ALBUMS
  // profileExtra.top3 = ["title|artist", ...] (choisis par l'utilisateur)
  // Défaut : les 3 premiers favoris de la collection.
  // Clic sur une cover → cycle parmi les favoris.
  // ══════════════════════════════════════
  function getFavorites() {
    return allAlbumsFlat().filter(a => a.status === "favorite");
  }

  function getTop3() {
    const favs = getFavorites();
    const keys = (profileExtra.top3 || []);
    const chosen = keys
      .map(k => favs.find(a => `${a.title}|${a.artist}` === k))
      .filter(Boolean);
    // Compléter avec les premiers favoris non déjà choisis
    for (const f of favs) {
      if (chosen.length >= 3) break;
      if (!chosen.includes(f)) chosen.push(f);
    }
    return chosen.slice(0, 3);
  }

  function renderKp2Top3() {
    const grid = document.getElementById("kp2-top3-grid");
    if (!grid) return;
    const top3 = getTop3();
    if (!top3.length) {
      grid.innerHTML = `<p class="kp2-top3-empty">Marque des albums en ★ favori pour remplir ton top 3</p>`;
      return;
    }
    grid.innerHTML = top3.map((a, i) => `
      <div class="kp2-top3-item" onclick="kp2CycleTop3(${i})" title="Cliquer pour changer">
        <span class="kp2-top3-rank kp2-rank-${i + 1}">${i + 1}</span>
        <div class="kp2-top3-cover">
          ${a.img ? `<img src="${a.img}" alt="${a.title}" loading="lazy">` : `<div class="album-artwork-placeholder">💿</div>`}
        </div>
        <p class="kp2-top3-title">${a.title}</p>
        <p class="kp2-top3-artist">${a.artist}</p>
      </div>`).join("");
  }

  // Clic sur la position i → passe au favori suivant non utilisé
  window.kp2CycleTop3 = function (i) {
    const favs = getFavorites();
    if (favs.length <= 3) return;
    const current = getTop3().map(a => `${a.title}|${a.artist}`);
    const startIdx = favs.findIndex(a => `${a.title}|${a.artist}` === current[i]);
    for (let step = 1; step <= favs.length; step++) {
      const cand = favs[(startIdx + step) % favs.length];
      const key = `${cand.title}|${cand.artist}`;
      if (!current.includes(key)) { current[i] = key; break; }
    }
    profileExtra.top3 = current;
    saveProfileExtra();
    renderKp2Top3();
  };

  // ══════════════════════════════════════
  // BADGES — calculés depuis la collection
  // ══════════════════════════════════════
  const BADGES = [
    { id: "first",     glyph: "✦", name: "Premier album",    desc: "Ajouter ton 1er album",      test: s => s.albums >= 1 },
    { id: "ten",       glyph: "◈", name: "Collectionneur",   desc: "10 albums catalogués",       test: s => s.albums >= 10 },
    { id: "twentyfive",glyph: "◆", name: "Sérieux",          desc: "25 albums catalogués",       test: s => s.albums >= 25 },
    { id: "fifty",     glyph: "❖", name: "Obsédé (avoué)",   desc: "50 albums catalogués",       test: s => s.albums >= 50 },
    { id: "fav5",      glyph: "★", name: "Cœur de fan",      desc: "5 albums en favori",         test: s => s.favs >= 5 },
    { id: "multi",     glyph: "♫", name: "Multi-fandom",     desc: "5 artistes différents",      test: s => s.artists >= 5 },
    { id: "bias1",     glyph: "♥", name: "Bias confirmé",    desc: "Déclarer un bias",           test: s => s.biases >= 1 },
    { id: "bias6",     glyph: "❤", name: "Polyamour",        desc: "6 biases (le max !)",        test: s => s.biases >= 6 },
    { id: "pc10",      glyph: "◎", name: "Photocard hunter", desc: "10 photocards",              test: s => s.photocards >= 10 },
    { id: "concert1",  glyph: "♪", name: "Concert-goer",     desc: "1er concert vécu",           test: s => s.concerts >= 1 },
    { id: "concert5",  glyph: "✧", name: "Tour de chauffe",  desc: "5 concerts vécus",           test: s => s.concerts >= 5 },
    { id: "complete",  glyph: "✪", name: "Profil complet",   desc: "Pseudo, photo, groupe et album favoris", test: s => s.profileComplete },
  ];

  function computeBadgeStats() {
    const albums = allAlbumsFlat();
    const extra = getExtra();
    const user = window._currentUser;
    const hasPhoto = user ? !!(localStorage.getItem(`kshelf_photo_${user.uid}`) || user.photoURL) : false;
    const hasPseudo = user ? !!localStorage.getItem(`kshelf_pseudo_${user.uid}`) : false;
    return {
      albums: albums.length,
      favs: albums.filter(a => a.status === "favorite").length,
      artists: new Set(albums.map(a => a.artist)).size,
      biases: (extra.biases || []).length,
      photocards: (typeof photocardsData !== "undefined" ? photocardsData.length : 0),
      concerts: (typeof concertsData !== "undefined" ? concertsData.length : 0),
      profileComplete: hasPhoto && hasPseudo && !!extra.favGroup && !!extra.favAlbum,
    };
  }

  function renderKp2Badges() {
    const grid = document.getElementById("kp2-badges-grid");
    if (!grid) return;
    const s = computeBadgeStats();
    let earned = 0;
    grid.innerHTML = BADGES.map(b => {
      const ok = b.test(s);
      if (ok) earned++;
      return `
      <div class="kp2-badge ${ok ? "unlocked" : "locked"}">
        <span class="kp2-badge-icon" style="background:${ok ? "rgba(245,255,0,.13)" : "rgba(255,255,255,.06)"};color:${ok ? "#f5ff00" : "#808799"}">${b.glyph}</span>
        <div style="min-width:0">
          <p class="kp2-badge-name">${b.name}</p>
          <p class="kp2-badge-desc">${b.desc}</p>
        </div>
      </div>`;
    }).join("");
    const count = document.getElementById("kp2-badges-count");
    if (count) count.innerText = `${earned}/${BADGES.length}`;
  }

  // ══════════════════════════════════════
  // PARTAGE FAN CARD — export PNG via canvas
  // ══════════════════════════════════════
  window.shareFanCard = async function () {
    const user = window._currentUser;
    const pseudo = user ? (localStorage.getItem(`kshelf_pseudo_${user.uid}`) || user.displayName || "Fan") : "Fan";
    const photoURL = user ? (localStorage.getItem(`kshelf_photo_${user.uid}`) || user.photoURL || "") : "";
    const extra = getExtra();

    const W = 720, H = 1080;
    const cv = document.createElement("canvas");
    cv.width = W; cv.height = H;
    const ctx = cv.getContext("2d");

    // Fond
    ctx.fillStyle = "#0c0c12";
    ctx.fillRect(0, 0, W, H);
    // Bordure holo
    const grad = ctx.createLinearGradient(0, 0, W, H);
    ["#4f8ef7", "#e040a0", "#f5ff00", "#34d399"].forEach((c, i) => grad.addColorStop(i / 3, c));
    ctx.strokeStyle = grad;
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, W - 10, H - 10);

    // En-tête
    ctx.fillStyle = "#808799";
    ctx.font = "700 20px 'Space Mono', monospace";
    ctx.fillText("FAN CARD № 001", 48, 76);
    ctx.fillStyle = "#f5ff00";
    ctx.textAlign = "right";
    ctx.fillText("★ HOLO", W - 48, 76);
    ctx.textAlign = "left";

    // Photo
    if (photoURL) {
      try {
        const img = new Image();
        img.crossOrigin = "anonymous";
        await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = photoURL; });
        const size = W - 96, x = 48, y = 110;
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(x, y, size, size * 0.82, 24);
        ctx.clip();
        const scale = Math.max(size / img.width, (size * 0.82) / img.height);
        ctx.drawImage(img, x + (size - img.width * scale) / 2, y + (size * 0.82 - img.height * scale) / 2, img.width * scale, img.height * scale);
        ctx.restore();
      } catch (e) { /* photo cross-origin non exportable → on continue sans */ }
    }

    // Pseudo
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 64px 'Syne', sans-serif";
    ctx.fillText(pseudo, 48, 780);

    // Favoris
    ctx.font = "700 20px 'Space Mono', monospace";
    ctx.fillStyle = "#808799";
    ctx.fillText("ULT GROUP", 48, 850);
    ctx.fillText("ALBUM FAVORI", 380, 850);
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 30px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(extra.favGroup || "—", 48, 890);
    ctx.fillText(extra.favAlbum || "—", 380, 890);

    // Stats
    const s = computeBadgeStats();
    ctx.fillStyle = "#808799";
    ctx.font = "700 20px 'Space Mono', monospace";
    ctx.fillText(`${s.albums} ALBUMS · ${s.favs} FAVORIS · ${s.concerts} CONCERTS`, 48, 950);

    // Footer
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 28px 'Syne', sans-serif";
    ctx.fillText("k-shelf", 48, H - 48);
    ctx.fillStyle = "#f5ff00";
    ctx.fillText(".", 48 + ctx.measureText("k-shelf").width, H - 48);

    // Télécharger
    cv.toBlob(blob => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `fan-card-${pseudo.toLowerCase().replace(/\s+/g, "-")}.png`;
      a.click();
      URL.revokeObjectURL(a.href);
    }, "image/png");
  };

  // ══════════════════════════════════════
  // HOOK — étendre openProfilePage sans le réécrire
  // ══════════════════════════════════════
  const _openProfilePage = window.openProfilePage;
  window.openProfilePage = function () {
    _openProfilePage();
    setTimeout(() => { renderKp2Top3(); renderKp2Badges(); }, 80);
  };

  // Re-rendre les badges quand la collection change (si l'app émet l'évènement)
  window.renderKp2Top3 = renderKp2Top3;
  window.renderKp2Badges = renderKp2Badges;
})();
