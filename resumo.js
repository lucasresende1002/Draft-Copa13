const times = JSON.parse(localStorage.getItem("times")); // Chave corrigida
const container = document.getElementById("resumo");

if (times) {
  times.forEach(time => {
    const div = document.createElement("div");
    div.className = "box"; // Adicionado para manter o estilo do styles.css
    div.innerHTML = `
      <h2>${time.nome}</h2>
      <strong>Capitão:</strong> ${time.capitao || "Não selecionado"}<br>
      <ul>${time.jogadores.map(j => `<li>${j}</li>`).join("")}</ul>
    `;
    container.appendChild(div);
  });
} else {
  container.innerHTML = "<h2>Nenhum dado de draft encontrado.</h2>";
}

