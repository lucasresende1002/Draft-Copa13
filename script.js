/* ================= DADOS ================= */

const times = [
  { nome: "Brasil", capitao: "Júlio Feitosa", jogadores: [] },
  { nome: "Argentina", capitao: "GH", jogadores: [] },
  { nome: "Estados Unidos", capitao: "Magno", jogadores: [] },
  { nome: "Portugal", capitao: "Eng. Juan", jogadores: [] },
  { nome: "Espanha", capitao: "Kayam", jogadores: [] },
  { nome: "Austrália", capitao: "Jopa", jogadores: [] },
  { nome: "Japão", capitao: "PPMIX", jogadores: [] },
  { nome: "Senegal", capitao: "Alexandre", jogadores: [] },
  { nome: "Marrocos", capitao: "PH", jogadores: [] },
  { nome: "Panamá", capitao: "Enrico", jogadores: [] },
];

const potes = {
  2: [
    "José Macias",
    "Ismael",
    "Isaac Barbosa",
    "Igão",
    "Gabriel Tavares",
    "Davi Pontes",
    "Alcides",
    "Manaus",
    "Mateus Mendonça",
    "Marcos Antonio",
  ],
  3: [
    "Pedro Torres",
    "Saulo",
    "Léo Tavares",
    "Delano",
    "Gustavo Dória",
    "Rery",
    "JP Caldas",
    "Ian Veganinho",
    "Anselmo",
    "Anthony Pinheiro",
  ],
  4: [
    "Icaro Gabigol",
    "Fernando Ferreira",
    "Keven Teles",
    "Augusto Bahia",
    "Pedim",
    "Filipe Preguiça",
    "Paulo Lyra",
    "Rommel",
    "Cauã Soares",
    "Marcel",
  ],
  5: [
    "Marqson",
    "Vitor Souza",
    "Vilela",
    "Vitor Mendes",
    "Heitor Santana",
    "Kevin Europa",
    "Eduardo Rouver",
    "Gabriel Xavier",
    "Iago Matheus",
    "Diogo Barbosa",
  ],
  6: [
    "Douglas França",
    "Edgard",
    "JV",
    "Dr. Tancredo",
    "Matheus Barbosa",
    "Thiago Rouver",
    "Cristiano",
    "Igor Sávio",
    "Deco",
    "Caio Mendes",
  ],
  7: [
    "Felipe Feichas",
    "Lucas Tavares",
    "Leitinho",
    "Gabriel Castro",
    "Paulo Sena",
    "Sávio",
    "Joma",
    "L.G",
    "Matheus Rouver",
    "Mago",
  ],
  8: [
    "JP Xerife",
    "Beto Salada",
    "Italo",
    "JP Machado",
    "Álvaro Xavier",
    "Luan Matos",
    "André CDC",
    "Bahia",
    "Luiz Paulo",
    "José Alberto",
  ],
  9: [
    "Antonio Gustavo",
    "Romão",
    "Gabriel Rolemberg",
    "Marcelo Lemos",
    "Flávio Farias",
    "Marcelo Augusto",
    "André Gustavo",
    "JP Sampaio",
    "Jean",
    "Japa",
  ],
  goleiro: [
    "Tico",
    "Pedral",
    "João Pedro",
    "Igor",
    "Pedro Vieira",
    "Rodrigo",
    "Diogo Ribeiro",
    "Neymar",
    "Matheus de Melo",
    "Fernando Barbosa",
  ],
};

const coresTimes = {
  Brasil: "#009c3b",
  Argentina: "#74acdf",
  "Estados Unidos": "#bf0a30",
  Portugal: "#ff0000",
  Espanha: "#f1bf00",
  Austrália: "#000031",
  Japão: "#bc002d",
  Senegal: "#00853f",
  Marrocos: "#c1272d",
  Panamá: "#006d5b",
};

// Cores das posições
const coresPosicoes = {
  GK: "#15ff00", // Azul para goleiro
  DEF: "#0099ff", // Azul para defesa
  MID: "#ffdd00", // Amarelo para meio-campo
  ATT: "#ff3333", // Vermelho para atacante
};

// Mapa de jogadores com suas posições
let jogadoresDB = {};

// Dados dos jogadores embutidos como fallback
const dadosJogadores = {
  "José Macias": "DEF",
  Ismael: "MID",
  "Isaac Barbosa": "ATT",
  Igão: "DEF",
  "Gabriel Tavares": "MID",
  "Davi Pontes": "ATT",
  Alcides: "DEF",
  Manaus: "MID",
  "Mateus Mendonça": "DEF",
  "Marcos Antonio": "ATT",
  "Pedro Torres": "MID",
  Saulo: "DEF",
  "Léo Tavares": "ATT",
  Delano: "MID",
  "Gustavo Doria": "DEF",
  Rery: "ATT",
  "JP Caldas": "DEF",
  "Ian Veganinho": "MID",
  Anselmo: "ATT",
  "Anthony Pinheiro": "DEF",
  "Icaro Gabigol": "ATT",
  "Fernando Ferreira": "DEF",
  "Keven Teles": "MID",
  "Augusto Bahia": "ATT",
  Pedim: "DEF",
  "Filipe Preguiça": "MID",
  "Paulo Lyra": "ATT",
  Rommel: "DEF",
  "Cauã Soares": "MID",
  Marcel: "ATT",
  Marqson: "DEF",
  "Vitor Souza": "MID",
  Vilela: "ATT",
  "Vitor Mendes": "DEF",
  "Heitor Santana": "MID",
  "Kevin Europa": "ATT",
  "Eduardo Rouver": "DEF",
  "Gabriel Xavier": "MID",
  "Iago Matheus": "ATT",
  "Diogo Barbosa": "DEF",
  "Douglas França": "MID",
  Edgard: "ATT",
  JV: "DEF",
  "Dr. Tancredo": "MID",
  "Matheus Barbosa": "ATT",
  "Thiago Rouver": "DEF",
  Cristiano: "MID",
  "Igor Sávio": "ATT",
  Deco: "DEF",
  "Caio Mendes": "MID",
  "Felipe Feichas": "ATT",
  "Lucas Tavares": "DEF",
  Leitinho: "MID",
  "Gabriel Castro": "ATT",
  "Paulo Sena": "DEF",
  Sávio: "MID",
  Joma: "ATT",
  "L.G": "DEF",
  "Matheus Rouver": "MID",
  Mago: "ATT",
  "JP Xerife": "DEF",
  "Beto Salada": "MID",
  Italo: "ATT",
  "JP Machado": "DEF",
  "Álvaro Xavier": "MID",
  "Luan Matos": "ATT",
  "André CDC": "DEF",
  Bahia: "MID",
  "Luiz Paulo": "ATT",
  "José Alberto": "DEF",
  "Antonio Gustavo": "MID",
  Romão: "ATT",
  "Gabriel Rolemberg": "DEF",
  "Marcelo Lemos": "MID",
  "Flávio Farias": "ATT",
  "Marcelo Augusto": "DEF",
  "André Gustavo": "MID",
  "JP Sampaio": "ATT",
  Jean: "DEF",
  Japa: "MID",
  Tico: "GK",
  Pedral: "GK",
  "João Pedro": "GK",
  Igor: "GK",
  "Pedro Vieira": "GK",
  Rodrigo: "GK",
  "Diogo Ribeiro": "GK",
  Neymar: "GK",
  "Matheus de Melo": "GK",
  "Fernando Barbosa": "GK",
};

// Carrega dados dos jogadores com posições
async function carregarJogadores() {
  try {
    const response = await fetch("jogadores.json");
    const data = await response.json();
    data.jogadores.forEach((j) => {
      jogadoresDB[j.nome] = j.posicao;
    });
    console.log("Dados de jogadores carregados do JSON");
  } catch (e) {
    console.log("Usando dados embutidos de jogadores");
    jogadoresDB = { ...dadosJogadores };
  }
}

// Função helper para pegar posição do jogador
function getPosicaoJogador(nome) {
  const posicao = jogadoresDB[nome] || dadosJogadores[nome] || "MID"; // Tenta DB, depois fallback, depois MID padrão
  return posicao;
}

// Função helper para pegar nome da posição
function getNomePosicao(posicao) {
  const nomes = {
    GK: "Goleiro",
    DEF: "Defesa",
    MID: "Meio-campo",
    ATT: "Atacante",
  };
  return nomes[posicao] || "Jogador";
}

/* ================= ESTADO ================= */

let poteNumero = 0;
let poteAtual = null;
let ordem = [];
let indiceVez = 0;
let modo = "";
let draftIniciado = false;
let draftFinalizado = false;
let potesAltosDisponiveis = {}; // Rastreia quantos jogadores ainda precisam ser escolhidos de potes superiores

/* ================= CONTROLE ================= */

// O botão de sorteio agora lida com o Pote 1, Potes Pares e Goleiro
document.getElementById("sortear-pote-button").addEventListener("click", () => {
  if (!draftIniciado) {
    sortearPote1();
  } else {
    iniciarPote(); // Sorteia ordem para potes pares ou goleiro
  }
});

document
  .getElementById("next-pote-button")
  .addEventListener("click", avancarPote);
document
  .getElementById("select-team-button")
  .addEventListener("click", escolherTime);

/* ================= FUNÇÕES DE NAVEGAÇÃO ================= */

function sortearPote1() {
  if (draftIniciado) return;

  // Se todos os times já têm capitão, não precisamos do Pote 1
  // (escolha manual/aleatória de times). Começamos diretamente pelo Pote 2.
  const todosComCapitao = times.every((t) => t.capitao);
  if (todosComCapitao) {
    poteNumero = 2;
    poteAtual = 2;
    draftIniciado = true;
    document.getElementById("sortear-pote-button").disabled = true;
    iniciarPote();
    return;
  }

  poteNumero = 1;
  poteAtual = 1;
  draftIniciado = true;
  document.getElementById("sortear-pote-button").disabled = true;

  iniciarPote();
}

function avancarPote() {
  if (!draftIniciado || draftFinalizado) return;

  document.getElementById("next-pote-button").disabled = true;

  if (poteNumero < 9) {
    poteNumero++;
    poteAtual = poteNumero;
  } else if (poteNumero === 9) {
    poteNumero++;
    poteAtual = "goleiro";
  }

  // REGRA: Potes ímpares espelham. Pares e Goleiro sorteiam.
  if (poteAtual !== "goleiro" && poteAtual % 2 !== 0) {
    iniciarPote(); // Inicia automático para ímpares (3, 5, 7, 9)
  } else {
    // Para e pede sorteio manual
    document.getElementById("status").innerText =
      `Aguardando sorteio do Pote ${poteAtual === "goleiro" ? "Goleiro" : poteAtual}`;
    document.getElementById("sortear-pote-button").disabled = false;
    document.getElementById("sortear-pote-button").innerText = "Sortear Ordem";
  }
}

function iniciarPote() {
  indiceVez = 0;
  document.getElementById("sortear-pote-button").disabled = true;
  document.getElementById("sortear-pote-button").innerText =
    "Sorteio Realizado";

  if (poteAtual === 1) {
    // Se todos os times já têm capitão, respeitamos essa ordem definida.
    const todosComCapitao = times.every((t) => t.capitao);
    if (todosComCapitao) {
      modo = "predefinido";
      ordem = times.map((t) => t.capitao);
    } else if (potes[1] && potes[1].length) {
      modo = "sorteio";
      ordem = [...potes[1]].sort(() => Math.random() - 0.5);
    } else {
      // Fallback: usar os capitães já definidos onde existirem,
      // e embaralhar entre os demais nomes/time como último recurso.
      modo = "sorteio";
      ordem = times
        .map((t) => t.capitao || t.nome)
        .sort(() => Math.random() - 0.5);
    }
  } else if (poteAtual === "goleiro") {
    modo = "sorteio";
    ordem = times.map((t) => t.capitao).sort(() => Math.random() - 0.5);
  } else {
    if (poteAtual % 2 === 0) {
      modo = "sorteio";
      ordem = times.map((t) => t.capitao).sort(() => Math.random() - 0.5);
    } else {
      modo = "espelhamento";
      ordem = [...ordem].reverse();
    }
  }

  // Inicializa o contador de jogadores que precisam ser escolhidos neste pote
  if (poteAtual !== 1) {
    potesAltosDisponiveis = {};
  }

  document.getElementById("status").innerText =
    poteAtual === "goleiro" ? "Goleiro" : `Pote ${poteAtual}`;

  atualizarTela();
}

function atualizarTela() {
  const vezDe = ordem[indiceVez];
  document.getElementById("vez").innerText = vezDe
    ? `⏳ Hora do capitão: ${vezDe}`
    : "";
  document.getElementById("current-player").innerText = vezDe
    ? `Jogador: ${vezDe}`
    : "Pote finalizado";

  // Mostra/esconde aviso de potes superiores
  const infoPotesAltos = document.getElementById("info-potes-altos");
  if (
    poteAtual &&
    poteAtual !== 1 &&
    poteAtual !== "goleiro" &&
    poteAtual < 9
  ) {
    infoPotesAltos.style.display = "block";
  } else {
    infoPotesAltos.style.display = "none";
  }

  renderTimes();
  renderTimesSelect();
  renderJogadores();
}

/* ================= RENDERIZAÇÃO ================= */

function corDoTimeDaVez() {
  const donoAtual = ordem[indiceVez];
  if (!donoAtual) return "#444";

  // O time é identificado pelo capitão
  const timeDaVez = times.find((time) => time.capitao === donoAtual);
  if (!timeDaVez) return "#444";

  return coresTimes[timeDaVez.nome] || "#444";
}

// remove acentos e outros diacríticos para formar nomes de arquivos
function sanitizedName(str) {
  if (!str) return "";
  // NFD decomposes combined letters into letter + diacritic
  return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function renderTimes() {
  const ul = document.getElementById("times-list");
  ul.innerHTML = "";

  times.forEach((time, index) => {
    const li = document.createElement("li");

    // fallback total de segurança
    const cor =
      typeof coresTimes !== "undefined" && coresTimes[time.nome]
        ? coresTimes[time.nome]
        : "#333";

    li.style.setProperty("--cor-selecao", cor);

    const jogadoresHTML = time.jogadores
      .map(
        (jog) =>
          `<span class="badge-jogador" style="background-color:${cor}">
            ${jog}
          </span>`,
      )
      .join("");

    li.innerHTML = `
      <div class="time-header">
        <img 
          src="img/logos/${sanitizedName(time.nome)}.png"
          class="mini-logo"
          onerror="this.src='img/logos/${sanitizedName(time.nome)}.jpg'; this.onerror=null;"
        >
        <strong>${time.nome}</strong>
      </div>

      <small>Capitão: ${time.capitao ?? "—"}</small>

      <div class="jogadores-container">
        ${jogadoresHTML}
      </div>
    `;

    li.onclick = () => window.open(`time.html?id=${index}`, "_blank");

    ul.appendChild(li);
  });
}

function renderTimesSelect() {
  const containerSelect = document.getElementById("team-selection");
  const selectArea = document.getElementById("team-select-buttons");

  if (poteAtual !== 1 || draftFinalizado) {
    containerSelect.style.display = "none";
    return;
  }

  // Se não houver times pendentes (todos já têm capitão), não mostra o seletor
  const pendentes = times.filter((t) => !t.capitao);
  if (pendentes.length === 0) {
    containerSelect.style.display = "none";
    return;
  }

  containerSelect.style.display = "block";
  selectArea.innerHTML = "";

  pendentes.forEach((time) => {
    const btn = document.createElement("button");
    const cor = coresTimes[time.nome] || "#333";

    btn.className = "btn-escolha-time";
    btn.style.setProperty("--cor-selecao", cor);

    // Lógica idêntica de recuperação de imagem
    btn.innerHTML = `
      <img src="img/logos/${sanitizedName(time.nome)}.png" 
           class="mini-logo" 
           onerror="this.src='img/logos/${sanitizedName(time.nome)}.jpg'; this.onerror=null;">
      <span>${time.nome}</span>
    `;

    btn.onclick = () => realizarEscolhaManual(time.nome);
    selectArea.appendChild(btn);
  });
}

function realizarEscolhaManual(nomeTime) {
  const capitaoAtual = ordem[indiceVez];
  const time = times.find((t) => t.nome === nomeTime);

  time.capitao = capitaoAtual;
  indiceVez++;

  if (indiceVez === ordem.length) {
    document.getElementById("next-pote-button").disabled = false;
  }

  atualizarTela();
}

function renderJogadores() {
  const ul = document.getElementById("jogadores-list");

  // Segurança: se o container não existir, não faz nada
  if (!ul) return;

  ul.innerHTML = "";

  // Não renderiza no pote 1 (escolha de times)
  if (!poteAtual || poteAtual === 1) return;

  // Se o pote atual não existir ou estiver vazio
  const chaveAtual = poteAtual === "goleiro" ? "goleiro" : poteAtual;
  if (!potes[chaveAtual] || potes[chaveAtual].length === 0) {
    ul.innerHTML = "<p style='opacity:0.6'>Nenhum jogador disponível</p>";
    return;
  }

  // Cor do time que está escolhendo agora (para fundo do card)
  const corFundo = corDoTimeDaVez();

  // Pega o time da vez para mostrar o escudo
  const timeDaVez = times.find((t) => t.capitao === ordem[indiceVez]);
  const nomeTimeDaVez = timeDaVez ? timeDaVez.nome : null;

  // Primeiro renderiza jogadores do pote atual
  const potesParaMostrar = [poteAtual];

  // Se for um pote de seleção (não goleiro), adiciona potes superiores
  if (poteAtual !== "goleiro" && poteAtual < 9) {
    for (let poteSuperior = poteAtual + 1; poteSuperior <= 9; poteSuperior++) {
      potesParaMostrar.push(poteSuperior);
    }
  }

  // Renderiza cada pote
  potesParaMostrar.forEach((numPote, index) => {
    const chavePote = numPote === "goleiro" ? "goleiro" : numPote;
    if (!potes[chavePote] || potes[chavePote].length === 0) return;

    // Adiciona divisor para potes superiores
    if (index > 0) {
      const divisor = document.createElement("div");
      divisor.style.cssText =
        "width: 100%; height: 2px; background: rgba(255,255,255,0.3); margin: 15px 0; grid-column: 1/-1;";
      ul.appendChild(divisor);

      const label = document.createElement("div");
      label.style.cssText =
        "grid-column: 1/-1; color: rgba(255,255,255,0.7); font-size: 12px; font-weight: bold; margin-bottom: 10px;";
      label.textContent =
        numPote === "goleiro"
          ? `Goleiro (Selecione o goleiro)`
          : `Pote ${numPote} (Opcional - Selecione se preferir)`;
      ul.appendChild(label);
    }

    potes[chavePote].forEach((jogador) => {
      const posicao = getPosicaoJogador(jogador);
      const corPosicao = coresPosicoes[posicao];
      const nomePosicao = getNomePosicao(posicao);

      // Caminho do logo do time (para usar no background do card)
      const caminhoLogo = nomeTimeDaVez
        ? `img/logos/${sanitizedName(nomeTimeDaVez)}.png`
        : "";

      // Criar container do card
      const card = document.createElement("div");
      card.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        background: rgba(30, 30, 30, 0.6);
        border-radius: 12px;
        padding: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        min-height: 200px;
        border: 2px solid rgba(255,255,255,0.2);
        opacity: ${numPote !== poteAtual ? 0.6 : 1};
        position: relative;
        overflow: hidden;
      `;

      card.onmouseover = () => {
        if (caminhoLogo) {
          card.style.backgroundImage = `url('${caminhoLogo}')`;
          card.style.backgroundSize = "auto 180%";
          card.style.backgroundPosition = "center";
          card.style.backgroundBlendMode = "overlay";
        }
        card.style.backgroundColor = `${corFundo}88`;
        card.style.border = `2px solid ${corFundo}`;
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = `0 8px 20px ${corFundo}66`;
      };

      card.onmouseout = () => {
        card.style.backgroundImage = "none";
        card.style.backgroundColor = "rgba(30, 30, 30, 0.6)";
        card.style.border = "2px solid rgba(255,255,255,0.2)";
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
      };

      // Container para conteúdo do card (para ficar acima do background da imagem)
      const conteudoCard = document.createElement("div");
      conteudoCard.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
      `;

      // Container da foto (com fallback caso não exista)
      const imgContainer = document.createElement("div");
      imgContainer.style.cssText = `
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 12px;
        background: rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid rgba(255,255,255,0.3);
        flex-shrink: 0;
      `;

      const img = document.createElement("img");
      img.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      `;

      /* ---------- helper: gerador de caminhos possíveis ---------- */
      function generatePhotoPaths(nome) {
        const base = `img/jogadores/`;
        const list = [];
        if (!nome) return [];
        const trimmed = nome.trim();
        const sanitary = sanitizedName(trimmed);
        const variants = new Set();

        // insere formas básicas
        [trimmed, sanitary].forEach((n) => {
          if (n) variants.add(n);
          variants.add(n.replace(/\s+/g, ""));
          variants.add(n.replace(/\s+/g, "_"));
          variants.add(n.replace(/\s+/g, "-"));
          variants.add(n + " "); // tentativa degrau com espaço final, útil quando o arquivo o contém
        });

        variants.forEach((n) => {
          if (!n) return;
          list.push(`${base}${n}.jpeg`);
          list.push(`${base}${n}.jpg`);
          list.push(`${base}${n}.png`);
        });

        return list;
      }
      /* ---------------------------------------------------------- */

      const paths = generatePhotoPaths(jogador);
      let tryIndex = 0;

      const tryNext = () => {
        if (tryIndex >= paths.length) {
          imgContainer.style.background = `linear-gradient(135deg, ${corPosicao}88, rgba(0,0,0,0.4))`;
          img.style.display = "none";
          return;
        }
        img.src = paths[tryIndex++];
      };

      /* --------- redimensionamento de imagens grandes --------- */
      img.onload = function () {
        if (img.dataset.resized) return;
        const maxDim = 400;
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        if (w > maxDim || h > maxDim) {
          const ratio = Math.min(maxDim / w, maxDim / h);
          const cw = Math.floor(w * ratio);
          const ch = Math.floor(h * ratio);
          const canvas = document.createElement("canvas");
          canvas.width = cw;
          canvas.height = ch;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, cw, ch);
          img.dataset.resized = "true";
          img.src = canvas.toDataURL("image/jpeg", 0.8);
        }
      };
      /* --------------------------------------------------------- */

      img.onerror = tryNext;

      // inicia a sequência de tentativas ao inserir no container
      tryNext();

      imgContainer.appendChild(img);
      conteudoCard.appendChild(imgContainer);

      // Badge de posição
      const badge = document.createElement("div");
      badge.style.cssText = `
        background-color: ${corPosicao};
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: bold;
        margin-bottom: 6px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      `;
      badge.textContent = posicao;
      conteudoCard.appendChild(badge);

      // Nome do jogador
      const nome = document.createElement("span");
      nome.style.cssText = `
        color: white;
        font-weight: bold;
        text-align: center;
        font-size: 13px;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        word-break: break-word;
      `;
      nome.textContent = jogador;
      conteudoCard.appendChild(nome);

      card.appendChild(conteudoCard);
      card.addEventListener("click", () => escolherJogador(jogador, numPote));
      ul.appendChild(card);
    });
  });
}

/* ================= ESCOLHAS ================= */

function escolherTime() {
  const select = document.getElementById("team-select");
  if (!select.value || poteAtual !== 1) return;

  const capitaoAtual = ordem[indiceVez];
  const time = times.find((t) => t.nome === select.value);
  time.capitao = capitaoAtual;
  indiceVez++;

  if (indiceVez === ordem.length) {
    document.getElementById("next-pote-button").disabled = false;
  }
  atualizarTela();
}

function escolherJogador(jogador, poteDe = poteAtual) {
  const capitaoAtual = ordem[indiceVez];
  const time = times.find((t) => t.capitao === capitaoAtual);
  time.jogadores.push(jogador);
  potes[poteDe] = potes[poteDe].filter((j) => j !== jogador);
  indiceVez++;

  if (indiceVez === ordem.length) {
    // Chegou ao final deste pote, redistribui os não escolhidos
    if (poteAtual !== "goleiro" && poteAtual < 9) {
      redistribuirNaoEscolhidos();
    }

    if (poteAtual === "goleiro") {
      finalizarDraft();
    } else {
      document.getElementById("next-pote-button").disabled = false;
    }
  }
  atualizarTela();
}

function redistribuirNaoEscolhidos() {
  // Pega os jogadores que restaram no pote atual
  const jogadoresRestantes = potes[poteAtual] || [];

  if (poteAtual !== 1 && poteAtual !== "goleiro" && poteAtual < 9) {
    // Move jogadores não escolhidos para o próximo pote
    const proximoPote = poteAtual + 1;

    if (!potes[proximoPote]) {
      potes[proximoPote] = [];
    }

    // Adiciona os restantes no INÍCIO do próximo pote (prioridade)
    potes[proximoPote] = [...jogadoresRestantes, ...potes[proximoPote]];

    // Limpa o pote atual
    potes[poteAtual] = [];

    // Log para debug
    console.log(
      `Redistribuição: ${jogadoresRestantes.length} jogadores do Pote ${poteAtual} → Pote ${proximoPote}`,
    );
  }
}

/* ================= FINALIZAÇÃO ================= */

function finalizarDraft() {
  draftFinalizado = true;
  document.getElementById("status").innerText = "DRAFT FINALIZADO!";
  localStorage.setItem("times", JSON.stringify(times));

  const contentDiv = document.querySelector(".content");

  // Container para organizar os botões finais
  const finalButtonsContainer = document.createElement("div");
  finalButtonsContainer.className = "grid-escolha"; // Reutiliza o grid que criamos
  finalButtonsContainer.style.marginTop = "30px";
  contentDiv.appendChild(finalButtonsContainer);

  times.forEach((time, index) => {
    const btn = document.createElement("button");
    const cor = coresTimes[time.nome] || "#333";

    // Aplicando a mesma lógica de estilo dos cards
    btn.className = "btn-escolha-time";
    btn.style.setProperty("--cor-selecao", cor);

    const ext = time.nome === "Estados Unidos" ? "jpg" : "png";

    btn.innerHTML = `
      <img src="img/logos/${sanitizedName(time.nome)}.${ext}" class="mini-logo" onerror="this.style.opacity='0'">
      <span>Ver ${time.nome}</span>
    `;

    btn.onclick = () => window.open(`time.html?id=${index}`, "_blank");
    finalButtonsContainer.appendChild(btn);
  });

  // ao finalizar, gerar arquivo para download com os times
  exportarTimesParaCsv();
}

/* ================ IMPORTAÇÃO CSV ================ */

// função para gerar e baixar CSV dos times atuais
function exportarTimesParaCsv() {
  if (!times || times.length === 0) {
    alert("Não há times para exportar.");
    return;
  }
  const linhas = ["nome,capitao,jogadores"];
  times.forEach((t) => {
    const jogadores = (t.jogadores || []).join(";");
    // escapando valores simples (não suportamos vírgulas internas)
    linhas.push(`${t.nome || ""},${t.capitao || ""},${jogadores}`);
  });
  const csv = linhas.join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "times_export.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Inicializa a página carregando dados
carregarJogadores().then(() => {
  renderTimes();
});
