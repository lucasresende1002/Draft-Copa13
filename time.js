/* ================= UTILITÁRIOS ================= */

// Busca os dados salvos no localStorage
function getTimes() {
  return JSON.parse(localStorage.getItem("times")) || [];
}

// Obtém o ID do time pela URL (ex: time.html?id=0)
function getTimeId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"), 10);
}

/* ================= PRINCIPAL ================= */

document.addEventListener("DOMContentLoaded", () => {
  const times = getTimes();
  const id = getTimeId();

  // Verifica se o time existe nos dados salvos
  if (times.length === 0 || isNaN(id) || !times[id]) {
    document.body.innerHTML = "<h2 style='color:white; text-align:center; margin-top:50px;'>Time não encontrado</h2>";
    return;
  }

  const time = times[id];
  const nomeTime = time.nome;

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
  
  // NOVOS CAMINHOS DAS PASTAS
  // As bandeiras agora estão em img/bandeiras/ e as logos em img/logos/
  const caminhoBandeira = `img/bandeiras/bandeira-${nomeTime.toLowerCase()}.${ext}`;
  const caminhoLogo = `img/logos/${nomeTime}.${ext}`;

  /* ---------- TÍTULO DA PÁGINA ---------- */
  document.title = "Draft - " + nomeTime;

  /* ---------- FUNDO (BANDEIRA COM MOVIMENTO) ---------- */
  const flagBg = document.getElementById("flag-bg"); // Corrigido para buscar o ID do HTML
  if (flagBg) {
    flagBg.style.backgroundImage = `url("${caminhoBandeira}")`;
    flagBg.style.display = "block"; 
  }

  /* ---------- LOGO CENTRAL COM BORDA COLORIDA ---------- */
  const logo = document.getElementById("logo"); // ID do time.html
  if (logo) {
    logo.src = caminhoLogo;
    logo.alt = `Escudo de ${nomeTime}`;
    
    // Aplica a cor da borda personalizada
    logo.style.borderColor = coresBordas[nomeTime] || "#ddd";
    logo.style.borderStyle = "solid";
    
    // Fallback: se não achar a logo na pasta específica, usa a logo geral
    logo.onerror = () => {
      logo.src = "img/Logo.jpg"; 
      logo.style.borderColor = "#ddd";
    };
  }

  /* ---------- INFORMAÇÕES DO TIME ---------- */
  const nomeTimeElement = document.getElementById("nome-time");
  const capitaoTimeElement = document.getElementById("capitão-time");

  if (nomeTimeElement) nomeTimeElement.innerText = nomeTime;
  if (capitaoTimeElement) capitaoTimeElement.innerText = `Capitão: ${time.capitao || "Sem capitão"}`;

  /* ---------- LISTA DE JOGADORES (ELENCO) ---------- */
 /* ---------- LISTA DE JOGADORES (ELENCO) ---------- */
  const ul = document.getElementById("lista-jogadores");
  if (ul) {
    ul.innerHTML = ""; 
    
    const corSelecao = coresBordas[nomeTime] || "#333";

    time.jogadores.forEach((jogador, index) => {
      const li = document.createElement("li");
      li.innerText = jogador;
      
      // Aplicamos a classe para o CSS controlar a animação
      li.className = "jogador-item";
      
      // Variáveis dinâmicas para o CSS usar
      li.style.setProperty('--cor-time', corSelecao);
      li.style.setProperty('--delay', `${index * 0.1}s`); // Cada um demora 0.1s a mais que o anterior
      
      ul.appendChild(li);
    });
  }

});