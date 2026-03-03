/* ================= UTILITÁRIOS ================= */

// normaliza texto removendo acentos/diacríticos
function sanitizedName(str) {
  if (!str) return "";
  return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function normalizeKey(str) {
  return sanitizedName(str || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function buildTeamAssets(nomeTime) {
  const clean = sanitizedName(nomeTime);
  const slug = clean.toLowerCase();

  return {
    flag: `img/bandeiras/bandeira-${slug}.png`,
    logoPng: `img/logos/${clean}.png`,
    logoJpg: `img/logos/${clean}.jpg`,
  };
}

function applyImageFallback(imgEl, candidates, onFail) {
  let index = 0;

  const tryNext = () => {
    if (index >= candidates.length) {
      if (onFail) onFail();
      return;
    }

    imgEl.src = candidates[index++];
  };

  imgEl.onerror = tryNext;
  tryNext();
}

function generatePhotoPaths(nomeJogador) {
  const baseFolders = ["img/Jogadores", "img/jogadores"];
  const exts = ["jpg", "jpeg", "png"];

  const trimmed = (nomeJogador || "").trim();
  const sanitary = sanitizedName(trimmed);
  const variants = new Set([
    trimmed,
    sanitary,
    `${trimmed} `,
    `${sanitary} `,
    trimmed.replace(/\s+/g, ""),
    sanitary.replace(/\s+/g, ""),
    trimmed.replace(/\s+/g, "_"),
    sanitary.replace(/\s+/g, "_"),
    trimmed.replace(/\s+/g, "-"),
    sanitary.replace(/\s+/g, "-"),
  ]);

  const paths = [];
  baseFolders.forEach((folder) => {
    variants.forEach((nameVariant) => {
      if (!nameVariant) return;
      exts.forEach((ext) => {
        paths.push(`${folder}/${nameVariant}.${ext}`);
      });
    });
  });

  return [...new Set(paths)];
}

// Mapa de posições
const coresPosicoes = {
  GOL: "#15ff00",
  ZAG: "#0099ff",
  MEI: "#ffdd00",
  ATA: "#ff3333",
};

const nomesPosicoes = {
  GOL: "Goleiro",
  ZAG: "Defesa",
  MEI: "Meio-campo",
  ATA: "Atacante",
};

// Busca os dados salvos no localStorage
function getTimes() {
  return JSON.parse(localStorage.getItem("times")) || [];
}

// Obtém o ID do time pela URL (ex: time.html?id=0)
function getTimeId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"), 10);
}

// Carrega todos os jogadores do JSON
async function carregarTodosJogadores() {
  try {
    const response = await fetch("jogadores.json");
    const data = await response.json();
    return data.jogadores;
  } catch (e) {
    console.error("Erro ao carregar jogadores:", e);
    return [];
  }
}

function encontrarDadosJogador(todosJogadores, nomeJogador) {
  const key = normalizeKey(nomeJogador);

  return (
    todosJogadores.find((j) => normalizeKey(j.nome) === key) ||
    todosJogadores.find((j) =>
      normalizeKey(j.nome).includes(key) || key.includes(normalizeKey(j.nome)),
    )
  );
}

/* ================= PRINCIPAL ================= */

document.addEventListener("DOMContentLoaded", async () => {
  const times = getTimes();
  const id = getTimeId();

  // Verifica se o time existe nos dados salvos
  if (times.length === 0 || isNaN(id) || !times[id]) {
    document.body.innerHTML = "<h2 style='color:white; text-align:center; margin-top:50px;'>Time não encontrado</h2>";
    return;
  }

  const time = times[id];
  const nomeTime = time.nome;
  const jogadoresMeta = Array.isArray(time.jogadoresMeta) ? time.jogadoresMeta : [];
  const poteEscolhidoPorJogador = new Map(
    jogadoresMeta
      .filter((item) => item && item.nome)
      .map((item) => [item.nome, item.poteEscolhido]),
  );

  // MAPEAMENTO DE CORES PARA AS BORDAS (Baseado nos escudos oficiais)
  const coresBordas = {
    "Brasil": "#009c3b",
    "Argentina": "#74acdf",
    "Estados Unidos": "#bf0a30",
    "USA": "#bf0a30",
    "EUA": "#bf0a30",
    "Portugal": "#ff0000",
    "Espanha": "#f1bf00",
    "Austrália": "#000031",
    "Japão": "#bc002d",
    "Senegal": "#00853f",
    "México": "#006847",
    "Canadá": "#ff0000"
  };

  // MAPEAMENTO DE EXTENSÕES (Conforme a organização das suas pastas)
  const extensoes = {
    "Argentina": "png", "Austrália": "png", "Brasil": "png", "Canadá": "png",
    "Espanha": "png", "EUA": "jpg", "Japão": "png", "México": "jpg",
    "Portugal": "png", "Senegal": "png", "USA": "png", "Estados Unidos": "png"
  };

  const ext = extensoes[nomeTime] || "png";
  const teamAssets = buildTeamAssets(nomeTime);
  const caminhoBandeira = `img/bandeiras/bandeira-${sanitizedName(nomeTime).toLowerCase()}.${ext}`;
  const corTime = coresBordas[nomeTime] || "#ddd";

  document.documentElement.style.setProperty("--team-border-color", corTime);

  /* ---------- TÍTULO DA PÁGINA ---------- */
  document.title = "Draft - " + nomeTime;

  /* ---------- FUNDO (BANDEIRA COM MOVIMENTO) ---------- */
  const flagBg = document.getElementById("flag-bg");
  if (flagBg) {
    flagBg.style.backgroundImage = `url("${caminhoBandeira}")`;
    flagBg.style.display = "block"; 
  }

  /* ---------- LOGO CENTRAL COM BORDA COLORIDA ---------- */
  const logo = document.getElementById("logo");
  if (logo) {
    logo.src = teamAssets.logoPng;
    logo.alt = `Escudo de ${nomeTime}`;
    
    // Aplica a cor da borda personalizada
    logo.style.borderColor = corTime;
    logo.style.borderStyle = "solid";
    
    // Fallback: se não achar a logo na pasta específica, usa a logo geral
    logo.onerror = () => {
      if (logo.src.includes(".png")) {
        logo.src = teamAssets.logoJpg;
      } else {
        logo.src = "img/Logo.jpg";
        logo.style.borderColor = "#ddd";
      }
    };
  }

  /* ---------- INFORMAÇÕES DO TIME ---------- */
  const nomeTimeElement = document.getElementById("nome-time");
  const capitaoTimeElement = document.getElementById("capitão-time");

  if (nomeTimeElement) nomeTimeElement.innerText = nomeTime;
  if (capitaoTimeElement) capitaoTimeElement.innerText = `Capitão: ${time.capitao || "Sem capitão"}`;

  /* ---------- LISTA DE JOGADORES (ELENCO) - CARDS ---------- */
  const todosJogadores = await carregarTodosJogadores();
  const containerJogadores = document.getElementById("lista-jogadores");
  
  if (containerJogadores) {
    containerJogadores.innerHTML = "";

    // Array para renderizar: com capitão no início
    const jogadoresParaRender = [];

    // Adiciona capitão no início se existir
    if (time.capitao) {
      jogadoresParaRender.push({ nome: time.capitao, isCaptain: true });
    }

    // Adiciona outros jogadores
    if (time.jogadores && time.jogadores.length > 0) {
      time.jogadores.forEach((jogador) => {
        if (jogador !== time.capitao) {
          jogadoresParaRender.push({ nome: jogador, isCaptain: false });
        }
      });
    }

    if (jogadoresParaRender.length === 0) {
      containerJogadores.innerHTML =
        "<p style='color:#fff; opacity:0.8'>Nenhum jogador encontrado para este time.</p>";
      return;
    }

    // Renderiza cada jogador
    jogadoresParaRender.forEach((jogadorObj, index) => {
      const nomeJogador = jogadorObj.nome;
      const isCaptain = jogadorObj.isCaptain;

      // Busca dados completos do jogador
      const dadosJogador = encontrarDadosJogador(todosJogadores, nomeJogador) || {};

      const posicao = dadosJogador.posicao || "MEI";
      const posicaoColor = coresPosicoes[posicao] || "#999";
      const poteEscolhido = isCaptain
        ? 1
        : poteEscolhidoPorJogador.get(nomeJogador);
      const poteExibicao = poteEscolhido ?? dadosJogador.pote;

      const card = document.createElement("div");
      card.className = "player-card" + (isCaptain ? " captain" : "");
      card.style.setProperty("--delay", `${index * 0.05}s`);
      card.style.setProperty("--team-logo", `url('${teamAssets.flag}')`);
      card.style.setProperty("--team-logo-fallback", `url('${teamAssets.flag}')`);

      const bg = document.createElement("div");
      bg.className = "player-card-bg";
      bg.style.backgroundImage = `url('${teamAssets.flag}')`;

      const imageContainer = document.createElement("div");
      imageContainer.className = "player-image-container";

      const image = document.createElement("img");
      image.alt = nomeJogador;
      image.className = "player-image";

      applyImageFallback(image, generatePhotoPaths(nomeJogador), () => {
        image.style.display = "none";
        imageContainer.style.background =
          "linear-gradient(135deg, rgba(25, 25, 35, 0.7), rgba(8, 8, 16, 0.85))";
      });

      imageContainer.appendChild(image);

      const content = document.createElement("div");
      content.className = "player-card-content";
      content.innerHTML = `
        ${isCaptain ? '<div class="captain-badge">©️ Capitão</div>' : ""}
        ${isCaptain ? "" : `<div class="player-position" style="background-color: ${posicaoColor}">${posicao}</div>`}
        <h3 class="player-name">${nomeJogador}</h3>
        ${poteExibicao === "goleiro"
          ? '<div class="player-pote"><span class="pote-label">Goleiro</span></div>'
          : `<div class="player-pote"><span class="pote-label">Pote</span><span class="pote-number">${poteExibicao ?? "-"}</span></div>`}
      `;

      card.appendChild(bg);
      card.appendChild(imageContainer);
      card.appendChild(content);

      containerJogadores.appendChild(card);
    });
  }
});