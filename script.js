/**
 * LIEN QUAN STUDIO - PHIÊN BẢN VIỀN MẢNH & INFO PANEL
 * Ảnh dính liền – Viền bao hàng – Khung info mờ
 */

const skinDatabase = {
  "alecter": ["alecter_1.jpg"],
  "alice": ["alice_1.jpg","alice_2.jpg","alice_3.jpg"],
  "allain": ["allain_1.jpg","allain_2.jpg","allain_3.jpg"],
  "arduin": ["arduin_1.jpg","arduin_2.jpg"],
  "ari": ["ari_1.jpg","ari_2.jpg","ari_3.jpg","ari_4.jpg"],
  "arum": ["arum_1.jpg","arum_2.jpg"],
  "athur": ["athur_1.jpg","athur_2.jpg","athur_3.jpg"],
  "aya": ["aya_1.jpg"],
  "batman": ["batman_1.jpg"],
  "bijan": ["bijan_1.jpg","bijan_2.jpg","bijan_3.jpg"],
  "billow": ["billow_1.jpg"],
  "biron": ["biron_1.jpg"],
  "boltbaron": ["boltbaron_1.jpg"],
  "bright": ["bright_1.jpg"],
  "butterfly": ["butterfly_1.jpg","butterfly_2.jpg","butterfly_3.jpg","butterfly_4.jpg","butterfly_5.jpg","butterfly_6.jpg","butterfly_7.jpg"],
  "capheny": ["capheny_1.jpg","capheny_2.jpg","capheny_3.jpg","capheny_4.jpg"],
  "charlotte": ["charlotte_1.jpg"],
  "cresht": ["cresht_1.jpg"],
  "eland'oor": ["eland'oor_1.jpg","eland'oor_2.jpg"],
  "elsu": ["elsu_1.jpg","elsu_2.jpg","elsu_3.jpg","elsu_4.jpg","elsu_5.jpg"],
  "enzo": ["enzo_1.jpg","enzo_2.jpg"],
  "erin": ["erin_1.jpg","erin_2.jpg"],
  "errol": ["errol_1.jpg"],
  "fennik": ["fennik_1.jpg"],
  "flo": ["flo_1.jpg","flo_2.jpg","flo_3.jpg"],
  "gildu": ["gildu_1.jpg","gildu_2.jpg"],
  "hayate": ["hayate_1.jpg","hayate_2.jpg","hayate_3.jpg","hayate_4.jpg"],
  "helen": ["helen_1.jpg","helen_2.jpg","helen_3.jpg"],
  "iggy": ["iggy_1.jpg"],
  "ilumia": ["ilumia_1.jpg","ilumia_2.jpg","ilumia_3.jpg","ilumia_4.jpg"],
  "joker": ["joker_1.jpg","joker_2.jpg"],
  "kerra": ["kerra_1.jpg"],
  "krixi": ["krixi_1.jpg","krixi_2.jpg","krixi_3.jpg"],
  "lauriel": ["lauriel_1.jpg","lauriel_2.jpg","lauriel_3.jpg","lauriel_4.jpg","lauriel_5.jpg","lauriel_6.jpg"],
  "laville": ["laville_1.jpg","laville_2.jpg","laville_3.jpg"],
  "liliana": ["liliana_1.jpg","liliana_2.jpg","liliana_3.jpg","liliana_4.jpg","liliana_5.jpg","liliana_6.jpg"],
  "lubu": ["lubu_1.jpg","lubu_2.jpg","lubu_3.jpg"],
  "maloch": ["maloch_1.jpg"],
  "marja": ["marja_1.jpg"],
  "mina": ["mina_1.jpg"],
  "murad": ["murad_1.jpg","murad_2.jpg","murad_3.jpg","murad_4.jpg","murad_5.jpg","murad_6.jpg","murad_7.jpg"],
  "nakroth": ["nakroth_1.jpg","nakroth_2.jpg","nakroth_3.jpg","nakroth_4.jpg","nakroth_5.jpg","nakroth_6.jpg"],
  "natallia": ["natallia_1.jpg","natallia_2.jpg"],
  "omen": ["omen_1.jpg"],
  "pain": ["pain_1.jpg","pain_2.jpg"],
  "qi": ["qi_1.jpg"],
  "quillen": ["quillen_1.jpg","quillen_2.jpg"],
  "raz": ["raz_1.jpg","raz_2.jpg","raz_3.jpg","raz_4.jpg"],
  "richter": ["richter_1.jpg"],
  "rouie": ["rouie_1.jpg"],
  "rouker": ["rouker_1.jpg"],
  "ryoma": ["ryoma_1.jpg","ryoma_2.jpg","ryoma_3.jpg"],
  "shaphera": ["shaphera_1.jpg","shaphera_2.jpg"],
  "sinestrea": ["sinestrea_1.jpg"],
  "tara": ["tara_1.jpg","tara_2.jpg"],
  "tel": ["tel_1.jpg","tel_2.jpg","tel_3.jpg","tel_4.jpg","tel_5.jpg","tel_6.jpg"],
  "toro": ["toro_1.jpg","toro_2.jpg"],
  "triệu vân": ["triệu vân_1.jpg","triệu vân_2.jpg"],
  "tulen": ["tulen_1.jpg","tulen_2.jpg","tulen_3.jpg","tulen_4.jpg","tulen_5.jpg","tulen_6.jpg","tulen_7.jpg"],
  "valhein": ["valhein_1.jpg","valhein_2.jpg","valhein_3.jpg"],
  "veera": ["veera_1.jpg","veera_2.jpg"],
  "veres": ["veres_1.jpg","veres_2.jpg"],
  "violet": ["violet_1.jpg","violet_2.jpg","violet_3.jpg","violet_4.jpg","violet_5.jpg","violet_6.jpg","violet_7.jpg"],
  "volkath": ["volkath_1.jpg"],
  "wukong": ["wukong_1.jpg","wukong_2.jpg","wukong_3.jpg","wukong_4.jpg","wukong_5.jpg","wukong_6.jpg"],
  "yan": ["yan_1.jpg"],
  "yena": ["yena_1.jpg","yena_2.jpg","yena_3.jpg"],
  "yorn": ["yorn_1.jpg","yorn_2.jpg"],
  "zata": ["zata_1.jpg","zata_2.jpg"],
  "zephis": ["zephis_1.jpg","zephis_2.jpg","zephis_3.jpg"],
  "điêu thuyền": ["điêu thuyền_1.jpg","điêu thuyền_2.jpg","điêu thuyền_3.jpg","điêu thuyền_4.jpg","điêu thuyền_5.jpg"]
};


const IMAGE_HOST = "https://qdev09-a12.github.io/kho-photo/";
let selectedSkins = [];
let currentHero = Object.keys(skinDatabase)[0];

window.onload = () => {
    filterHeroes();
    changeHero(currentHero);
};

/* ================= HERO LIST ================= */
function filterHeroes() {
    const q = document.getElementById('heroSearch')?.value.toLowerCase() || "";
    const nav = document.getElementById('heroTabs');
    if (!nav) return;

    nav.innerHTML = "";
    Object.keys(skinDatabase)
        .filter(h => h.includes(q))
        .forEach(h => {
            const btn = document.createElement('button');
            btn.textContent = h.toUpperCase();
            btn.className = h === currentHero ? 'active' : '';
            btn.onclick = () => changeHero(h);
            nav.appendChild(btn);
        });
}

function changeHero(h) {
    currentHero = h;
    renderGrid();
    filterHeroes();
}

/* ================= GRID ================= */
function renderGrid() {
    const grid = document.getElementById('skinGrid');
    if (!grid) return;
    grid.innerHTML = "";

    skinDatabase[currentHero].forEach(file => {
        const path =
            IMAGE_HOST +
            currentHero.toLowerCase() +
            "/" +
            file.toLowerCase();

        const card = document.createElement('div');
        card.className = "skin-card" + (selectedSkins.includes(path) ? " selected" : "");

        const img = document.createElement('img');
        img.src = path;
        img.crossOrigin = "anonymous";
        img.onerror = () => img.src = "https://via.placeholder.com/200x270?text=404";

        card.onclick = () => toggleSkin(path);
        card.appendChild(img);
        grid.appendChild(card);
    });
}

function toggleSkin(path) {
    const i = selectedSkins.indexOf(path);
    i > -1 ? selectedSkins.splice(i, 1) : selectedSkins.push(path);
    document.getElementById('selectedCount').innerText = selectedSkins.length;
    renderGrid();
    renderSelectedBar();
}

function closeResult() {
    const modal = document.getElementById('resultArea');
    if (modal) {
        modal.style.display = 'none';
    }
}

function downloadImage() {
    const canvas = document.getElementById('mainCanvas');

    if (!canvas || canvas.width === 0) {
        alert("Ảnh chưa sẵn sàng để tải");
        return;
    }

    try {
        const link = document.createElement('a');
        link.download = 'lien-quan-studio.png';
        link.href = canvas.toDataURL('image/png', 1.0);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (err) {
        console.error(err);
        alert("Không thể tải ảnh (lỗi CORS từ ảnh bên ngoài)");
    }
}



function renderSelectedBar() {
    const bar = document.getElementById('selectedSkinsBar');
    if (!bar) return;
    bar.innerHTML = "";
    selectedSkins.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.onclick = () => toggleSkin(path);
        bar.appendChild(img);
    });
}

function clearAllSelection() {
    selectedSkins = [];
    document.getElementById('selectedCount').innerText = "0";
    renderGrid();
    renderSelectedBar();
}

/* ================= CANVAS ================= */
function drawRoundedRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

/* ================= EXPORT IMAGE ================= */
async function processCollage() {
    if (!selectedSkins.length) return alert("Chọn skin đã!");

    const canvas = document.getElementById('mainCanvas');
    const ctx = canvas.getContext('2d');

    const images = await Promise.all(selectedSkins.map(src => new Promise(res => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => res(img);
        img.onerror = () => res(null);
        img.src = src;
    })));

    const validImages = images.filter(Boolean);

    const cardW = 200, cardH = 270;
    const rowGap = 14;
    const margin = 90;
    const borderW = 2.5;

    const n = validImages.length;
    const cols = n <= 8 ? n : Math.ceil(Math.sqrt(n * 1.4));
    const rows = Math.ceil(n / cols);

    canvas.width = cols * cardW + margin * 2;
    canvas.height = rows * cardH + (rows - 1) * rowGap + margin * 2;

    /* NỀN */
    const bg = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bg.addColorStop(0, "#dff1fb");
    bg.addColorStop(1, "#b8def2");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    /* VIỀN NGOÀI */
    ctx.lineWidth = borderW;
    ctx.strokeStyle = "#4aa3ff";
    drawRoundedRect(ctx, 20, 20, canvas.width - 40, canvas.height - 40, 26);
    ctx.stroke();

    let idx = 0;
    const skinInput = document.getElementById('skin')?.value || validImages.length;
    const heroCount = new Set(selectedSkins.map(p => p.split('/').slice(-2, -1)[0])).size;

    for (let r = 0; r < rows; r++) {
        const y = margin + r * (cardH + rowGap);
        const rowW = cols * cardW;

        /* VIỀN HÀNG */
        ctx.strokeStyle = "#00aaff";
        ctx.lineWidth = borderW;
        drawRoundedRect(ctx, margin - 2, y - 2, rowW + 4, cardH + 4, 18);
        ctx.stroke();

        ctx.save();
        drawRoundedRect(ctx, margin, y, rowW, cardH, 16);
        ctx.clip();

        for (let c = 0; c < cols; c++) {
            const x = margin + c * cardW;

            /* INFO PANEL */
            if (rows > 1 && r === 1 && c < 3) {
                if (c === 0) {
                    const bw = cardW * 3 - 20;
                    ctx.globalAlpha = 0.45;
                    ctx.fillStyle = "#fff";
                    ctx.fillRect(x, y, bw, cardH);
                    ctx.globalAlpha = 1;

                    ctx.fillStyle = "#073ff6";
                    ctx.font = "bold 44px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText(`${skinInput} SKINS`, x + bw / 2, y + cardH / 2 - 10);

                    ctx.font = "24px Arial";
                    ctx.fillStyle = "#333";
                    ctx.fillText(`${heroCount} TƯỚNG • ${validImages.length} ẢNH`,
                        x + bw / 2,
                        y + cardH / 2 + 30
                    );
                }
                continue;
            }

            if (idx < validImages.length) {
                ctx.drawImage(validImages[idx++], x, y, cardW, cardH);
            }
        }
        ctx.restore();
    }

    document.getElementById('resultArea').style.display = 'flex';
}


