/* ================= DADOS ================= */

const times = [
  { nome: "CT América de Propriá", capitao: "Magno", jogadores: [] },
  { nome: "CT Barra", capitao: "Toninho", jogadores: [] },
  { nome: "CT Confiança", capitao: "Reginaldo", jogadores: [] },
  { nome: "CT Dorense", capitao: "Rony", jogadores: [] },
  { nome: "CT Estanciano", capitao: "Júlio César", jogadores: [] },
  { nome: "CT Falcon", capitao: "Alexandre", jogadores: [] },
  { nome: "CT Frei Paulistano", capitao: "Gutti", jogadores: [] },
  { nome: "CT Guarany", capitao: "Arraxca", jogadores: [] },
  { nome: "CT Itabaiana", capitao: "Marcos Antonio", jogadores: [] },
  { nome: "CT Lagarto", capitao: "Phelipe Khayan", jogadores: [] },
  { nome: "CT Sergipe", capitao: "Abreu", jogadores: [] },
  { nome: "CT Socorrense", capitao: "PPMIX", jogadores: [] },
];

const potes = {
  1: [
    "Rony",
    "PPMIX",
    "Gutti",
    "Phelipe Khayan",
    "Toninho",
    "Abreu",
    "Arraxca",
    "Alexandre",
    "Magno",
    "Júlio César",
    "Reginaldo",
    "Marcos Antonio",
  ],
  2: [
    "Igor Carvalho",
    "Delano",
    "Rhuan Maciel",
    "Manaus",
    "José Macias",
    "Benzema",
    "Fábio Doria",
    "Maneiro",
    "Pedro Torres",
    "Marcos André",
    "Marquinhos",
    "Gustavo Miguel",
  ],
  3: [
    "Rery",
    "JP Machado",
    "Gustavo Doria",
    "Samuca",
    "Marcos Emanuel",
    "Luan Mendonça",
    "Gabriel Jacobina",
    "Marcel",
    "Rafael Freire",
    "Augusto Bahia",
    "Douglas Indio",
    "JV Santos",
  ],
  4: [
    "Igor Veríssimo",
    "Kaio Matheus",
    "George",
    "Cauã Soares",
    "Saulo",
    "Victor Arthur",
    "Juan Carlos",
    "Ian Carvalho",
    "Felipe Mota",
    "Gustavo Dionizio",
    "Pedro Matos",
    "Souza",
  ],
  5: [
    "Lucas Borges",
    "Vinicius Costa",
    "Pedim",
    "Vitor Mendes",
    "Cristiano",
    "Vitor Souza",
    "Mago",
    "Anselmo",
    "Matheus Silva",
    "Felipe Guimarães",
    "Jeison Mariano",
    "Deco",
  ],
  6: [
    "Pedro Amor",
    "Kevin Ricardo",
    "Luis Eduardo",
    "Ícaro Azevedo",
    "Wendel",
    "Matheus Barbosa",
    "Allan Douglas",
    "Roger Barros",
    "Guilherme Menezes",
    "Vinicius Silva",
    "Bruno Emanuel",
    "Tancredo",
  ],
  7: [
    "Edgard",
    "Sávio",
    "Carlinhos",
    "Antonio Gustavo",
    "Daniel Henrique",
    "Novais",
    "Gualter",
    "Lucas Soares",
    "Douglas França",
    "Gustavo Ita",
    "Olegario",
    "Leonardo Souza",
  ],
  8: [
    "Sandro",
    "João Guilherme",
    "Guilherme Vieira",
    "Eng Matheus",
    "Natanael Victor",
    "Eduardo Alencar",
    "Leitinho",
    "Felipe Araujo",
    "Bahia",
    "JP Felizola",
    "Bruno Alves",
    "Jhon",
  ],
  9: [
    "Tico",
    "Robinho",
    "LG",
    "Marcelo Lemos",
    "Nathanael H.",
    "Arthur Diniz",
    "Gabriel Castro",
    "Lucão",
    "Isaac Chapermann",
    "Bruno Santiago",
    "Gabriel Pinheiro",
    "Biratan Neto",
  ],
  10: [
    "Caio Malachia",
    "Jader",
    "Davi Coutinho",
    "Arthur Belém",
    "Pablo Barber",
    "Gabriel Lirio",
    "Gabriel Rollemberg",
    "Empada",
    "Rodrigo Santiago",
    "Alvaro Xavier",
    "Marcelo Augusto",
    "Yuri Gabriel",
  ],
  goleiro: [
    "Diogo Ribeiro",
    "JP Gois",
    "Fernando Barbosa",
    "Igor de Menezes",
    "JP Souza",
    "Oberom",
    "Cássio",
    "Herisson",
    "Toco",
    "Breno",
    "Paulinho",
    "Robson",
  ],
};

const coresTimes = {
  "CT América de Propriá": "#00843D",
  "CT Barra": "#F9A825",
  "CT Confiança": "#0057B8",
  "CT Frei Paulistano": "#28c662",
  "CT Dorense": "#8B0000",
  "CT Estanciano": "#c7d412",
  "CT Falcon": "#5E35B1",
  "CT Socorrense": "#1E88E5",
  "CT Itabaiana": "#c1272d",
  "CT Sergipe": "#C62828",
  "CT Lagarto": "#2E7D32",
  "CT Guarany": "#006400",
};

// Cores das posições
const coresPosicoes = {
  GOL: "#15ff00", // Azul para goleiro
  ZAG: "#0099ff", // Azul para defesa
  MEI: "#ffdd00", // Amarelo para meio-campo
  ATA: "#ff3333", // Vermelho para atacante
};

// Mapa de jogadores com suas posições
let jogadoresDB = {};

// Dados dos jogadores embutidos como fallback
const dadosJogadores = {
  "José Macias": "MEI",
  "Ismael": "MEI",
  "Isaac Barbosa": "ATA",
  "Igor Carvalho": "ATA",
  "Gabriel Tavares": "MEI",
  "Davi Pontes": "MEI",
  "Alcides": "MEI",
  "Manaus": "ATA",
  "Mateus Mendonça": "MEI",
  "Marcos Antonio": "ATA",
  "Jogador 12": "MEI",
  "Jogador 13": "MEI",
  "Jogador 14": "MEI",
  "Pedro Torres": "ATA",
  "Emanuel Freitas": "ATA",
  "Luan Mendonça": "MEI",
  "Delano": "MEI",
  "Gustavo Doria": "ATA",
  "Rery": "MEI",
  "Jayro": "ZAG",
  "Ian Carvalho": "MEI",
  "Anselmo": "MEI",
  "Anthony Pinheiro": "ZAG",

  "Ícaro Azevedo": "ATA",
  "Fernando Ferreira": "MEI",
  "Keven Teles": "MEI",
  "Augusto Bahia": "ATA",
  "Pedim": "MEI",
  "Filipe Rodrigues": "MEI",
  "Paulo Lyra": "ZAG",
  "Rommel": "MEI",
  "Cauã Soares": "MEI",
  "Marcel": "ATA",

  "Marqson": "MEI",
  "Vitor Souza": "MEI",
  "Vilela": "MEI",
  "Vitor Mendes": "ATA",
  "Heitor Santana": "ATA",
  "Kevin Ricardo": "MEI",
  "Eduardo Rouver": "MEI",
  "Gabriel Xavier": "ZAG",
  "Iago Matheus": "ZAG",
  "Diogo Barbosa": "MEI",

  "Douglas França": "ZAG",
  "Edgard": "MEI",
  "JV Santos Santos": "ATA",
  "Tancredo": "MEI",
  "Matheus Barbosa": "ATA",
  "Thiago Rouver": "MEI",
  "Cristiano": "ZAG",
  "Igor Sávio": "MEI",
  "Deco": "ATA",
  "Caio Mendes": "MEI",

  "Felipe Feichas": "ZAG",
  "Lucas Tavares": "ZAG",
  "Marcos Matos": "ZAG",
  "Gabriel Castro": "ZAG",
  "Paulo Sena": "MEI",
  "Domingos Sávio": "ATA",
  "Joma": "ATA",
  "L.G": "ZAG",
  "Matheus Rouver": "MEI",
  "Mago": "ATA",

  "JP Felizola": "ATA",
  "Beto Salada": "ATA",
  "Ítalo Vieira": "ATA",
  "JP Machado": "ZAG",
  "Álvaro Xavier": "MEI",
  "Luan Matos": "ATA",
  "André CDC": "ZAG",
  "Jeferson Bahia": "ZAG",
  "Luiz Paulo": "MEI",
  "José Alberto": "ATA",

  "Antonio Gustavo": "ATA",
  "Lucas Romão": "ATA",
  "Gabriel Rolemberg": "ATA",
  "Marcelo Lemos": "ATA",
  "Flávio Farias": "ZAG",
  "Marcelo Augusto": "ATA",
  "André Gustavo": "ATA",
  "JP Sampaio": "ATA",
  "Jean Carlos": "MEI",
  "Japa": "ATA",

  "Tico": "GOL",
  "Roberto Pedral": "GOL",
  "João Pedro": "GOL",
  "Igor": "GOL",
  "Paulo Santos": "GOL",
  "Rodrigo César": "GOL",
  "Diogo Ribeiro": "GOL",
  "Caio Guilherme": "GOL",
  "Matheus de Melo": "GOL",
  "Fernando Barbosa": "GOL",
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
  const posicao = jogadoresDB[nome] || dadosJogadores[nome] || "MEI"; // Tenta DB, depois fallback, depois MEI padrão
  return posicao;
}

// Função helper para pegar nome da posição
function getNomePosicao(posicao) {
  const nomes = {
    GOL: "Goleiro",
    ZAG: "Defesa",
    MEI: "Meio-campo",
    ATA: "Atacante",
  };
  return nomes[posicao] || "Jogador";
}

/* ================= ESTADO ================= */

let poteNumero = 0;
let poteAtual = null;
let ordem = [];
let modoAdmin = true;
let timeDaVezAdmin = null;
let timesQueJaEscolheramNoPote = new Set();
let historicoEscolhas = [];
let indiceVez = 0;
let modo = "";
let draftIniciado = false;
let draftFinalizado = false;
let potesAltosDisponiveis = {}; // Rastreia quantos jogadores ainda precisam ser escolhidos de potes superiores

function sincronizarJogadoresMeta() {
  times.forEach((time) => {
    if (!Array.isArray(time.jogadoresMeta)) {
      time.jogadoresMeta = [];
    }
  });

  historicoEscolhas.forEach((escolha) => {
    const time = times.find((t) => t.nome === escolha.time);
    if (!time || !Array.isArray(time.jogadores)) return;

    if (!time.jogadores.includes(escolha.jogador)) return;

    const jaExiste = time.jogadoresMeta.some(
      (item) =>
        item?.nome === escolha.jogador &&
        item?.poteEscolhido === (escolha.poteEscolhido ?? escolha.pote),
    );

    if (!jaExiste) {
      time.jogadoresMeta.push({
        nome: escolha.jogador,
        poteEscolhido: escolha.poteEscolhido ?? escolha.pote,
      });
    }
  });
}

/* ================= CONTROLE ================= */

// Botão principal: inicia o draft (modo admin)
document.getElementById("sortear-pote-button").addEventListener("click", () => {
  iniciarDraft();
});

document
  .getElementById("next-pote-button")
  .addEventListener("click", avancarPote);

const selectTeamButton = document.getElementById("select-team-button");
if (selectTeamButton) {
  selectTeamButton.addEventListener("click", escolherTime);
}

/* ================= FUNÇÕES DE NAVEGAÇÃO ================= */

function iniciarDraft() {
  if (draftIniciado) return;

  poteNumero = 2;
  poteAtual = 2;
  draftIniciado = true;
  document.getElementById("sortear-pote-button").disabled = true;
  document.getElementById("sortear-pote-button").innerText =
    "Draft Iniciado";

  iniciarPote();
}

function avancarPote() {
  if (!draftIniciado || draftFinalizado) return;

  if (modoAdmin && !todosTimesEscolheramNoPote()) {
    alert("Todos os times precisam escolher neste pote antes de avançar.");
    return;
  }

  if (poteAtual !== "goleiro" && typeof poteAtual === "number" && poteAtual < 10) {
    redistribuirNaoEscolhidos();
  }

  document.getElementById("next-pote-button").disabled = true;

  if (poteNumero < 10) {
    poteNumero++;
    poteAtual = poteNumero;
  } else if (poteNumero === 10) {
    poteNumero++;
    poteAtual = "goleiro";
  } else {
    finalizarDraft();
    return;
  }

  iniciarPote();
}

function iniciarPote() {
  indiceVez = 0;
  if (modoAdmin) {
    timeDaVezAdmin = null;
    timesQueJaEscolheramNoPote = new Set();
    atualizarBotoesAdminNoPote();
  }
  document.getElementById("sortear-pote-button").disabled = true;
  document.getElementById("sortear-pote-button").innerText = "Draft Iniciado";
  document.getElementById("next-pote-button").disabled = true;

  potesAltosDisponiveis = {};

  document.getElementById("status").innerText =
    poteAtual === "goleiro" ? "Goleiro" : `Pote ${poteAtual}`;

  atualizarTela();
}

function atualizarTela() {
  const vezDe = ordem[indiceVez];
  const textoVez = modoAdmin
    ? timeDaVezAdmin
      ? `🧠 ADMIN escolheu: ${timeDaVezAdmin}`
      : "🧠 ADMIN: selecione um time no painel para escolher o jogador"
    : vezDe
      ? `⏳ Hora do capitão: ${vezDe}`
      : "";

  document.getElementById("vez").innerText = textoVez;
  document.getElementById("current-player").innerText = modoAdmin
    ? timeDaVezAdmin
      ? `Escolha ativa: ${timeDaVezAdmin}`
      : "Aguardando seleção do ADMIN"
    : vezDe
      ? `Jogador: ${vezDe}`
      : "Pote finalizado";

  // Mostra/esconde aviso de potes superiores
  const infoPotesAltos = document.getElementById("info-potes-altos");
  if (
    poteAtual &&
    poteAtual !== 1 &&
    poteAtual !== "goleiro" &&
    poteAtual < 10
  ) {
    infoPotesAltos.style.display = "block";
  } else {
    infoPotesAltos.style.display = "none";
  }

  renderTimes();
  renderTimesSelect();
  renderJogadores();

  if (modoAdmin) {
    document.getElementById("next-pote-button").disabled =
      !todosTimesEscolheramNoPote();
  }

  if (modoAdmin) {
    atualizarIndicadorAdmin();
  }
}

/* ================= RENDERIZAÇÃO ================= */

function corDoTimeDaVez() {
  if (modoAdmin && timeDaVezAdmin) {
    return coresTimes[timeDaVezAdmin] || "#444";
  }

  if (modoAdmin) {
    return "#444";
  }

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
          src="img/escudos/${sanitizedName(time.nome)}.png"
          class="mini-escudos"
          onerror="this.src='img/escudos/${sanitizedName(time.nome)}.jpg'; this.onerror=null;"
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
      <img src="img/escudos/${sanitizedName(time.nome)}.png" 
           class="mini-escudos" 
           onerror="this.src='img/escudos/${sanitizedName(time.nome)}.jpg'; this.onerror=null;">
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
  const timeDaVez =
    modoAdmin && timeDaVezAdmin
      ? times.find((t) => t.nome === timeDaVezAdmin)
      : times.find((t) => t.capitao === ordem[indiceVez]);
  const nomeTimeDaVez = timeDaVez ? timeDaVez.nome : null;

  // Primeiro renderiza jogadores do pote atual
  const potesParaMostrar = [poteAtual];

  // Se for um pote de seleção (não goleiro), adiciona potes superiores
  if (poteAtual !== "goleiro" && poteAtual < 10) {
    for (let poteSuperior = poteAtual + 1; poteSuperior <= 10; poteSuperior++) {
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

      // Caminho do escudo do time da vez (mesmo padrão usado em renderTimes)
      const caminhoEscudo = nomeTimeDaVez
        ? `img/escudos/${sanitizedName(nomeTimeDaVez)}.png`
        : "";

      // Criar container do card
      const card = document.createElement("div");
      card.className = "card-jogador-draft";
      card.style.setProperty("--cor-posicao", corPosicao);
      card.style.opacity = numPote !== poteAtual ? "0.55" : "1";

      if (modoAdmin && nomeTimeDaVez) {
        card.classList.add("admin-bg");
        card.style.setProperty("--cor-time", corFundo);
      }

      // Container da foto — ocupa o card inteiro, jogador em destaque
      const imgContainer = document.createElement("div");
      imgContainer.className = "card-player-photo";

      const img = document.createElement("img");

      /* ---------- helper: gerador de caminhos possíveis ---------- */
      function generatePhotoPaths(nome) {
        const baseFolders = ["img/Jogadores", "img/jogadores"];
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

        baseFolders.forEach((base) => {
          variants.forEach((n) => {
            if (!n) return;
            list.push(`${base}/${n}.jpeg`);
            list.push(`${base}/${n}.jpg`);
            list.push(`${base}/${n}.png`);
          });
        });

        return list;
      }
      /* ---------------------------------------------------------- */

      const paths = generatePhotoPaths(jogador);
      let tryIndex = 0;

      const tryNext = () => {
        if (tryIndex >= paths.length) {
          card.classList.add("sem-foto");
          img.style.display = "none";
          return;
        }
        img.src = paths[tryIndex++];
      };

      /* --------- redimensionamento de imagens grandes --------- */
      img.onload = function () {
        if (img.dataset.resized) return;
        const maxDim = 500;
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
          img.src = canvas.toDataURL("image/jpeg", 0.85);
        }
      };
      /* --------------------------------------------------------- */

      img.onerror = tryNext;

      // inicia a sequência de tentativas ao inserir no container
      tryNext();

      imgContainer.appendChild(img);
      card.appendChild(imgContainer);

      // Badge de posição — canto superior esquerdo
      const badge = document.createElement("div");
      badge.className = "card-posicao-badge";
      badge.style.backgroundColor = corPosicao;
      badge.textContent = posicao;
      card.appendChild(badge);

      // Escudo do time da vez — canto superior direito
      if (nomeTimeDaVez) {
        const escudoWrap = document.createElement("div");
        escudoWrap.className = "card-time-escudo";
        escudoWrap.title = nomeTimeDaVez;

        const escudoImg = document.createElement("img");
        escudoImg.src = caminhoEscudo;
        escudoImg.alt = nomeTimeDaVez;
        escudoImg.onerror = function () {
          this.onerror = null;
          this.src = `img/escudos/${sanitizedName(nomeTimeDaVez)}.jpg`;
        };

        escudoWrap.appendChild(escudoImg);
        card.appendChild(escudoWrap);
      }

      // Nome do jogador — faixa inferior sobre gradiente
      const nomeWrap = document.createElement("div");
      nomeWrap.className = "card-player-nome";
      const nome = document.createElement("span");
      nome.textContent = jogador;
      nomeWrap.appendChild(nome);
      card.appendChild(nomeWrap);

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
  sincronizarJogadoresMeta();
  const poteOrigem = poteDe;
  const poteEscolhido = poteAtual;
  let time;

  if (modoAdmin) {
    if (!timeDaVezAdmin) {
      alert("Selecione o time no painel ADMIN antes de escolher.");
      return;
    }

    time = times.find((t) => t.nome === timeDaVezAdmin);

    if (!time) {
      alert("Time inválido.");
      return;
    }

  } else {
    const capitaoAtual = ordem[indiceVez];
    time = times.find((t) => t.capitao === capitaoAtual);
  }

  // Registrar histórico
  historicoEscolhas.push({
    time: time.nome,
    jogador,
    poteOrigem,
    poteEscolhido,
  });

  // Adiciona jogador
  time.jogadores.push(jogador);

  if (!Array.isArray(time.jogadoresMeta)) {
    time.jogadoresMeta = [];
  }

  time.jogadoresMeta.push({
    nome: jogador,
    poteEscolhido,
  });

  // Remove do pote
  potes[poteOrigem] = potes[poteOrigem].filter((j) => j !== jogador);

  if (modoAdmin) {
    timesQueJaEscolheramNoPote.add(time.nome);
    timeDaVezAdmin = null;
    atualizarBotoesAdminNoPote();

    if (todosTimesEscolheramNoPote()) {
      if (poteAtual === "goleiro") {
        finalizarDraft();
      } else {
        document.getElementById("next-pote-button").disabled = false;
      }
    }
  } else {
    indiceVez++;

    if (indiceVez === ordem.length) {
      if (poteAtual !== "goleiro" && poteAtual < 10) {
        redistribuirNaoEscolhidos();
      }

      if (poteAtual === "goleiro") {
        finalizarDraft();
      } else {
        document.getElementById("next-pote-button").disabled = false;
      }
    }
  }

  atualizarTela();
}

function redistribuirNaoEscolhidos() {
  // Pega os jogadores que restaram no pote atual
  const jogadoresRestantes = potes[poteAtual] || [];

  if (poteAtual !== 1 && poteAtual !== "goleiro" && poteAtual < 10) {
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
  sincronizarJogadoresMeta();
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
      <img src="img/escudos/${sanitizedName(time.nome)}.${ext}" class="mini-escudos" onerror="this.style.opacity='0'">
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

  if (modoAdmin) {
    criarPainelAdmin();
  }
});

function criarPainelAdmin() {
  const container = document.getElementById("admin-times");
  if (!container) return;

  container.innerHTML = "";

  times.forEach((time) => {
    const btn = document.createElement("button");
    btn.className = "admin-time-btn";
    btn.dataset.time = time.nome;
    btn.style.setProperty("--cor-time", coresTimes[time.nome] || "#64748b");

    btn.innerHTML = `
      <span class="admin-team-dot"></span>
      <span>${time.nome}</span>
    `;

    btn.onclick = () => {
      if (timesQueJaEscolheramNoPote.has(time.nome)) return;

      timeDaVezAdmin = time.nome;

      document
        .querySelectorAll(".admin-time-btn")
        .forEach((b) => b.classList.remove("active"));

      btn.classList.add("active");
      atualizarTela();
    };

    container.appendChild(btn);
  });

  atualizarBotoesAdminNoPote();
  atualizarIndicadorAdmin();
}

function atualizarBotoesAdminNoPote() {
  const botoes = document.querySelectorAll(".admin-time-btn");
  botoes.forEach((btn) => {
    const nomeTime = btn.dataset.time;
    const jaEscolheu = timesQueJaEscolheramNoPote.has(nomeTime);
    btn.style.display = jaEscolheu ? "none" : "inline-flex";
  });
}

function atualizarIndicadorAdmin() {
  const indicador = document.getElementById("admin-indicador");
  if (!indicador) return;

  if (timeDaVezAdmin) {
    indicador.textContent = `Time da vez: ${timeDaVezAdmin}`;
    indicador.classList.add("active");
  } else if (modoAdmin && todosTimesEscolheramNoPote()) {
    indicador.textContent =
      "✅ Todos os times escolheram neste pote. Pode avançar.";
    indicador.classList.add("active");
  } else {
    indicador.textContent = "Selecione um time para iniciar a escolha";
    indicador.classList.remove("active");
  }
}

function todosTimesEscolheramNoPote() {
  return timesQueJaEscolheramNoPote.size >= times.length;
}

function desfazerUltimaEscolha() {
  if (historicoEscolhas.length === 0) {
    alert("Nenhuma escolha para desfazer.");
    return;
  }

  const ultima = historicoEscolhas.pop();

  const time = times.find((t) => t.nome === ultima.time);

  if (!time) return;

  // Remove último jogador do time
  time.jogadores = time.jogadores.filter((j) => j !== ultima.jogador);

  if (Array.isArray(time.jogadoresMeta)) {
    const idxMeta = time.jogadoresMeta.findIndex(
      (j) =>
        j?.nome === ultima.jogador &&
        j?.poteEscolhido === (ultima.poteEscolhido ?? ultima.pote),
    );

    if (idxMeta >= 0) {
      time.jogadoresMeta.splice(idxMeta, 1);
    } else {
      const idxFallback = time.jogadoresMeta.findIndex(
        (j) => j?.nome === ultima.jogador,
      );
      if (idxFallback >= 0) {
        time.jogadoresMeta.splice(idxFallback, 1);
      }
    }
  }

  // Devolve ao pote
  const poteRetorno = ultima.poteOrigem ?? ultima.pote;

  if (!potes[poteRetorno]) {
    potes[poteRetorno] = [];
  }

  potes[poteRetorno].unshift(ultima.jogador);

  if (modoAdmin) {
    timesQueJaEscolheramNoPote.delete(ultima.time);
    atualizarBotoesAdminNoPote();
  }

  atualizarTela();
}

// Botão desfazer
document.getElementById("btn-desfazer")?.addEventListener("click", () => {
  desfazerUltimaEscolha();
});
