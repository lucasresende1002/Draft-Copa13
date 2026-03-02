/* ================= UTILITÁRIOS ================= */

// normaliza texto removendo acentos/diacríticos
function sanitizedName(str) {
  if (!str) return "";
  return str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

// Mapa de posições
const coresPosicoes = {
  "GK": "#15ff00",
  "DEF": "#0099ff",
  "MID": "#ffdd00",
  "ATT": "#ff3333"
};

const nomesPosicoes = {
  "GK": "Goleiro",
  "DEF": "Defesa",
  "MID": "Meio-campo",
  "ATT": "Atacante"
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
    const response = await fetch('jogadores.json');
    const data = await response.json();
    return data.jogadores;
  } catch (e) {
    console.error('Erro ao carregar jogadores:', e);
    return [];
  }
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
  const caminhoBandeira = `img/bandeiras/bandeira-${sanitizedName(nomeTime).toLowerCase()}.${ext}`;
  const caminhoLogo = `img/logos/${sanitizedName(nomeTime)}.${ext}`;

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

  /* ---------- LISTA DE JOGADORES (ELENCO) - CARDS ---------- */
  const todosJogadores = await carregarTodosJogadores();
  const containerJogadores = document.getElementById("lista-jogadores");
  
  if (containerJogadores) {
    containerJogadores.innerHTML = "";
    
    // Detecta se o jogador é capitão
    const isCapitao = (nomeJogador) => {
      return nomeJogador === time.capitao;
    };
    
    // Função auxiliar para normalizar nomes de arquivo
    const normalizarNomeArquivo = (nome) => {
      return nome.replace(/\s+/g, '');
    };
    
    // Array para renderizar: com capitão no início
    const jogadoresParaRender = [];
    
    // Adiciona capitão no início se existir
    if (time.capitao) {
      jogadoresParaRender.push({ nome: time.capitao, isCaptain: true });
    }
    
    // Adiciona outros jogadores
    if (time.jogadores && time.jogadores.length > 0) {
      time.jogadores.forEach(jogador => {
        jogadoresParaRender.push({ nome: jogador, isCaptain: false });
      });
    }
    
    // Renderiza cada jogador
    jogadoresParaRender.forEach((jogadorObj, index) => {
      const nomeJogador = jogadorObj.nome;
      const isCaptain = jogadorObj.isCaptain;
      
      // Busca dados completos do jogador
      const dadosJogador = todosJogadores.find(j => j.nome === nomeJogador);
      
      if (dadosJogador) {
        const card = document.createElement("div");
        card.className = "player-card" + (isCaptain ? " captain" : "");
        card.style.setProperty('--delay', `${index * 0.05}s`);
        
        const posicaoColor = coresPosicoes[dadosJogador.posicao] || "#999";
        const posicaoNome = nomesPosicoes[dadosJogador.posicao] || "Jogador";
        
        // Tenta encontrar a foto do jogador (com ou sem espaços)
        const nomeNormalizado = normalizarNomeArquivo(nomeJogador);
        const fotoBuscas = [
          `img/Jogadores/${nomeJogador}.jpg`,
          `img/Jogadores/${nomeJogador}.jpeg`,
          `img/Jogadores/${nomeNormalizado}.jpg`,
          `img/Jogadores/${nomeNormalizado}.jpeg`
        ];
        
        // Escudo do time (background)
        const escudoTime = `img/logos/${sanitizedName(nomeTime)}.png`;
        
        let badgeCapitao = '';
        if (isCaptain) {
          badgeCapitao = '<div class="captain-badge">©️ Capitão</div>';
        }
        
        card.innerHTML = `
          <div class="player-card-bg" style="background-image: url('${escudoTime}')"></div>
          <div class="player-image-container">
            <img src="${fotoBuscas[0]}" alt="${nomeJogador}" class="player-image" onerror="this.src='${fotoBuscas[1]}'; this.onerror=() => this.src=''">
          </div>
          <div class="player-card-content">
            ${badgeCapitao}
            <div class="player-position" style="background-color: ${posicaoColor}">
              ${dadosJogador.posicao}
            </div>
            <h3 class="player-name">${nomeJogador}</h3>
            <p class="player-role">${posicaoNome}</p>
            <div class="player-pote">
              <span class="pote-label">Pote</span>
              <span class="pote-number">${dadosJogador.pote}</span>
            </div>
          </div>
        `;
        
        containerJogadores.appendChild(card);
      }
    });
  }
});