/* ================= DADOS ================= */

const times = [
  { nome: "Brasil", capitao: null, jogadores: [] },
  { nome: "Argentina", capitao: null, jogadores: [] },
  { nome: "Estados Unidos", capitao: null, jogadores: [] },
  { nome: "Portugal", capitao: null, jogadores: [] },
  { nome: "Espanha", capitao: null, jogadores: [] },
  { nome: "Austrália", capitao: null, jogadores: [] },
  { nome: "Japão", capitao: null, jogadores: [] },
  { nome: "Senegal", capitao: null, jogadores: [] },
];

const potes = {
  1: ["Léo Tavares","Geraldo","Júlio César","Júlio Feitosa","Toninho","Celso","PPMIX","Brenno"],
  2: ["Jogador 9","Jogador 10","Jogador 11","Jogador 12","Jogador 13","Jogador 14","Jogador 15","Jogador 16"],
  3: ["Jogador 17","Jogador 18","Jogador 19","Jogador 20","Jogador 21","Jogador 22","Jogador 23","Jogador 24"],
  4: ["Jogador 25","Jogador 26","Jogador 27","Jogador 28","Jogador 29","Jogador 30","Jogador 31","Jogador 32"],
  5: ["Jogador 33","Jogador 34","Jogador 35","Jogador 36","Jogador 37","Jogador 38","Jogador 39","Jogador 40"],
  6: ["Jogador 41","Jogador 42","Jogador 43","Jogador 44","Jogador 45","Jogador 46","Jogador 47","Jogador 48"],
  7: ["Jogador 49","Jogador 50","Jogador 51","Jogador 52","Jogador 53","Jogador 54","Jogador 55","Jogador 56"],
  8: ["Jogador 57","Jogador 58","Jogador 59","Jogador 60","Jogador 61","Jogador 62","Jogador 63","Jogador 64"],
  9: ["Jogador 65","Jogador 66","Jogador 67","Jogador 68","Jogador 69","Jogador 70","Jogador 71","Jogador 72"],
  10:["Jogador 73","Jogador 74","Jogador 75","Jogador 76","Jogador 77","Jogador 78","Jogador 79","Jogador 80"],
  goleiro:["Goleiro 1","Goleiro 2","Goleiro 3","Goleiro 4","Goleiro 5","Goleiro 6","Goleiro 7","Goleiro 8"]
};

const coresTimes = {
  "Brasil": "#009c3b",
  "Argentina": "#74acdf",
  "Estados Unidos": "#bf0a30",
  "Portugal": "#ff0000",
  "Espanha": "#f1bf00",
  "Austrália": "#000031",
  "Japão": "#bc002d",
  "Senegal": "#00853f"
};

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

document.getElementById("next-pote-button").addEventListener("click", avancarPote);
document.getElementById("select-team-button").addEventListener("click", escolherTime);

/* ================= FUNÇÕES DE NAVEGAÇÃO ================= */

function sortearPote1() {
  if (draftIniciado) return;

  poteNumero = 1;
  poteAtual = 1;
  draftIniciado = true;
  document.getElementById("sortear-pote-button").disabled = true;
  
  iniciarPote();
}

function avancarPote() {
  if (!draftIniciado || draftFinalizado) return;

  document.getElementById("next-pote-button").disabled = true;

  if (poteNumero < 10) {
    poteNumero++;
    poteAtual = poteNumero;
  } else if (poteNumero === 10) {
    poteNumero++; 
    poteAtual = "goleiro";
  }

  // REGRA: Potes ímpares espelham. Pares e Goleiro sorteiam.
  if (poteAtual !== "goleiro" && poteAtual % 2 !== 0) {
    iniciarPote(); // Inicia automático para ímpares (3, 5, 7, 9)
  } else {
    // Para e pede sorteio manual
    document.getElementById("status").innerText = `Aguardando sorteio do Pote ${poteAtual === "goleiro" ? "Goleiro" : poteAtual}`;
    document.getElementById("sortear-pote-button").disabled = false;
    document.getElementById("sortear-pote-button").innerText = "Sortear Ordem";
  }
}

function iniciarPote() {
  indiceVez = 0;
  document.getElementById("sortear-pote-button").disabled = true;
  document.getElementById("sortear-pote-button").innerText = "Sorteio Realizado";

  if (poteAtual === 1) {
    modo = "sorteio";
    ordem = [...potes[1]].sort(() => Math.random() - 0.5);
  }
  else if (poteAtual === "goleiro") {
    modo = "sorteio";
    ordem = times.map(t => t.capitao).sort(() => Math.random() - 0.5);
  }
  else {
    if (poteAtual % 2 === 0) {
      modo = "sorteio";
      ordem = times.map(t => t.capitao).sort(() => Math.random() - 0.5);
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
    `Pote ${poteAtual === "goleiro" ? "Goleiro" : poteAtual} (${modo})`;

  atualizarTela();
}

function atualizarTela() {
  const vezDe = ordem[indiceVez];
  document.getElementById("vez").innerText = vezDe ? `Vez de: ${vezDe}` : "";
  document.getElementById("current-player").innerText = vezDe ? `Jogador: ${vezDe}` : "Pote finalizado";

  // Mostra/esconde aviso de potes superiores
  const infoPotesAltos = document.getElementById("info-potes-altos");
  if (poteAtual && poteAtual !== 1 && poteAtual !== "goleiro" && poteAtual < 10) {
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
  const timeDaVez = times.find(time => time.capitao === donoAtual);
  if (!timeDaVez) return "#444";

  return coresTimes[timeDaVez.nome] || "#444";
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
        jog =>
          `<span class="badge-jogador" style="background-color:${cor}">
            ${jog}
          </span>`
      )
      .join("");

    li.innerHTML = `
      <div class="time-header">
        <img 
          src="img/logos/${time.nome}.png"
          class="mini-logo"
          onerror="this.src='img/logos/${time.nome}.jpg'; this.onerror=null;"
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

  containerSelect.style.display = "block";
  selectArea.innerHTML = ""; 

  times.filter(t => !t.capitao).forEach(time => {
    const btn = document.createElement("button");
    const cor = coresTimes[time.nome] || "#333";
    
    btn.className = "btn-escolha-time";
    btn.style.setProperty('--cor-selecao', cor);
    
    // Lógica idêntica de recuperação de imagem
    btn.innerHTML = `
      <img src="img/logos/${time.nome}.png" 
           class="mini-logo" 
           onerror="this.src='img/logos/${time.nome}.jpg'; this.onerror=null;">
      <span>${time.nome}</span>
    `;
    
    btn.onclick = () => realizarEscolhaManual(time.nome);
    selectArea.appendChild(btn);
  });
}

function realizarEscolhaManual(nomeTime) {
  const capitaoAtual = ordem[indiceVez];
  const time = times.find(t => t.nome === nomeTime);
  
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
  if (!potes[poteAtual] || potes[poteAtual].length === 0) {
    ul.innerHTML = "<p style='opacity:0.6'>Nenhum jogador disponível</p>";
    return;
  }

  // Cor do time que está escolhendo agora
  const cor = corDoTimeDaVez();

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
    if (!potes[numPote] || potes[numPote].length === 0) return;

    // Adiciona divisor para potes superiores
    if (index > 0) {
      const divisor = document.createElement("div");
      divisor.style.cssText = "width: 100%; height: 2px; background: rgba(255,255,255,0.3); margin: 15px 0; grid-column: 1/-1;";
      ul.appendChild(divisor);

      const label = document.createElement("div");
      label.style.cssText = "grid-column: 1/-1; color: rgba(255,255,255,0.7); font-size: 12px; font-weight: bold; margin-bottom: 10px;";
      label.textContent = `Pote ${numPote} (Opcional - Selecione se preferir)`;
      ul.appendChild(label);
    }

    potes[numPote].forEach(jogador => {
      const btn = document.createElement("button");

      btn.className = "card-jogador";
      btn.textContent = jogador;

      // Cores diferentes para potes superiores
      if (numPote !== poteAtual) {
        btn.style.opacity = "0.7";
        btn.style.setProperty("--cor-time", "rgba(255,255,255,0.3)");
      } else {
        btn.style.setProperty("--cor-time", cor);
      }

      btn.addEventListener("click", () => escolherJogador(jogador, numPote));

      ul.appendChild(btn);
    });
  });
}


/* ================= ESCOLHAS ================= */

function escolherTime() {
  const select = document.getElementById("team-select");
  if (!select.value || poteAtual !== 1) return;

  const capitaoAtual = ordem[indiceVez];
  const time = times.find(t => t.nome === select.value);
  time.capitao = capitaoAtual;
  indiceVez++;

  if (indiceVez === ordem.length) {
    document.getElementById("next-pote-button").disabled = false;
  }
  atualizarTela();
}

function escolherJogador(jogador, poteDe = poteAtual) {
  const capitaoAtual = ordem[indiceVez];
  const time = times.find(t => t.capitao === capitaoAtual);
  time.jogadores.push(jogador);
  potes[poteDe] = potes[poteDe].filter(j => j !== jogador);
  indiceVez++;

  if (indiceVez === ordem.length) {
    // Chegou ao final deste pote, redistribui os não escolhidos
    if (poteAtual !== "goleiro" && poteAtual < 10) {
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
    console.log(`Redistribuição: ${jogadoresRestantes.length} jogadores do Pote ${poteAtual} → Pote ${proximoPote}`);
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
    btn.style.setProperty('--cor-selecao', cor);
    
    const ext = (time.nome === "Estados Unidos") ? "jpg" : "png";
    
    btn.innerHTML = `
      <img src="img/logos/${time.nome}.${ext}" class="mini-logo" onerror="this.style.opacity='0'">
      <span>Ver ${time.nome}</span>
    `;
    
    btn.onclick = () => window.open(`time.html?id=${index}`, "_blank");
    finalButtonsContainer.appendChild(btn);
  });
}

renderTimes();