/* ================= DADOS ================= */

const times = [
  { nome: "Brasil", dono: null, jogadores: [] },
  { nome: "Argentina", dono: null, jogadores: [] },
  { nome: "Estados Unidos", dono: null, jogadores: [] },
  { nome: "Portugal", dono: null, jogadores: [] },
  { nome: "Espanha", dono: null, jogadores: [] },
  { nome: "Austrália", dono: null, jogadores: [] },
  { nome: "Japão", dono: null, jogadores: [] },
  { nome: "Senegal", dono: null, jogadores: [] },
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

/* ================= ESTADO ================= */

let poteNumero = 0;
let poteAtual = null;
let ordem = [];
let indiceVez = 0;
let modo = "";
let draftIniciado = false;
let draftFinalizado = false;

/* ================= CONTROLE ================= */

document.getElementById("sortear-pote-button").addEventListener("click", sortearPote);
document.getElementById("select-team-button").addEventListener("click", escolherTime);

/* ================= FUNÇÕES ================= */

function sortearPote() {
  if (draftFinalizado) return;

  document.getElementById("sortear-pote-button").disabled = true;

  if (!draftIniciado) {
    poteNumero = 1;
    poteAtual = 1;
    draftIniciado = true;
  } else if (potes[poteNumero + 1]) {
    poteNumero++;
    poteAtual = poteNumero;
  } else {
    poteAtual = "goleiro";
  }

  iniciarPote();
}

function iniciarPote() {
  indiceVez = 0;

  if (poteAtual === 1) {
    modo = "sorteio";
    ordem = [...potes[1]].sort(() => Math.random() - 0.5);
  }
  else if (poteAtual === "goleiro") {
    modo = "sorteio";
    ordem = times.map(t => t.dono).sort(() => Math.random() - 0.5);
  }
  else {
    modo = poteNumero % 2 === 0 ? "sorteio" : "espelhamento";
    ordem = modo === "sorteio"
      ? times.map(t => t.dono).sort(() => Math.random() - 0.5)
      : [...ordem].reverse();
  }

  document.getElementById("status").innerText =
    `Pote ${poteAtual === "goleiro" ? "Goleiro" : poteAtual} (${modo})`;

  atualizarTela();
}

function atualizarTela() {
  document.getElementById("vez").innerText =
    ordem[indiceVez] ? `Vez de: ${ordem[indiceVez]}` : "";

  document.getElementById("current-player").innerText =
    ordem[indiceVez] ? `Jogador: ${ordem[indiceVez]}` : "Pote finalizado";

  renderTimes();
  renderTimesSelect();
  renderJogadores();
}

/* ================= RENDER ================= */

function renderTimes() {
  const ul = document.getElementById("times-list");
  ul.innerHTML = "";

  times.forEach(time => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${time.nome}</strong><br>
      Dono: ${time.dono ?? "—"}<br>
      ${time.jogadores.join(", ")}
    `;
    ul.appendChild(li);
  });
}

function renderTimesSelect() {
  const select = document.getElementById("team-select");
  select.innerHTML = "";

  if (poteAtual !== 1) {
    select.disabled = true;
    return;
  }

  select.disabled = false;

  times.filter(t => !t.dono).forEach(time => {
    const opt = document.createElement("option");
    opt.value = time.nome;
    opt.textContent = time.nome;
    select.appendChild(opt);
  });
}

function renderJogadores() {
  const ul = document.getElementById("jogadores-list");
  ul.innerHTML = "";

  if (poteAtual === 1) return;

  potes[poteAtual].forEach(jogador => {
    const btn = document.createElement("button");
    btn.textContent = jogador;
    btn.onclick = () => escolherJogador(jogador);
    ul.appendChild(btn);
  });
}

/* ================= ESCOLHAS ================= */

function escolherTime() {
  if (poteAtual !== 1) return;

  const select = document.getElementById("team-select");
  if (!select.value) return;

  const jogador = ordem[indiceVez];
  const time = times.find(t => t.nome === select.value);

  time.dono = jogador;
  indiceVez++;

  if (indiceVez === ordem.length) {
    document.getElementById("sortear-pote-button").disabled = false;
    atualizarTela();
    return;
  }

  atualizarTela();
}

function escolherJogador(jogador) {
  const dono = ordem[indiceVez];
  const time = times.find(t => t.dono === dono);

  time.jogadores.push(jogador);
  potes[poteAtual] = potes[poteAtual].filter(j => j !== jogador);

  indiceVez++;

  if (indiceVez === ordem.length) {
    if (poteAtual === "goleiro" && potes.goleiro.length === 0) {
      finalizarDraft();
      return;
    }

    document.getElementById("sortear-pote-button").disabled = false;
  }

  atualizarTela();
}

/* ================= FINALIZAÇÃO ================= */

function finalizarDraft() {
  draftFinalizado = true;
  document.getElementById("status").innerText = "Draft finalizado!";

  // SALVA OS DADOS COM A CHAVE CORRETA
  localStorage.setItem("times", JSON.stringify(times));

  const container = document.querySelector(".content");

  // Botão resumo
  const btnResumo = document.createElement("button");
  btnResumo.innerText = "Ver resumo do campeonato";
  btnResumo.className = "btn-pdf"; // Reaproveitando estilo
  btnResumo.onclick = () => window.open("resumo.html", "_blank");
  container.appendChild(btnResumo);

  // Botões individuais dos times
  times.forEach((time, index) => {
    const btn = document.createElement("button");
    btn.innerText = `Ver ${time.nome}`;
    btn.onclick = () => window.open(`time.html?id=${index}`, "_blank");
    container.appendChild(btn);
  });
}

/* ================= INICIAL ================= */

renderTimes();
// Removida a chave extra que causava erro aqui