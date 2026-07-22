# 🏆 Draft Copa 13

Sistema web interativo para sorteio e organização de times em campeonatos de futebol. 

## 📋 Sobre o Projeto
Este projeto foi criado para facilitar a distribuição de jogadores entre amigos. O sistema conta com um processo de draft dividido por potes, garantindo equilíbrio entre as equipes, e gera uma página exclusiva para cada seleção com o resumo dos escolhidos.

## ✨ Funcionalidades
- **Sorteio por Potes:** Lógica para sorteio do Pote 1 (donos) e potes subsequentes (jogadores).
- **Lógica de Draft Inteligente:** Alternância entre sorteio aleatório e sistema de espelhamento (Snake Draft) para maior equilíbrio.
- **Páginas de Time Dinâmicas:** Exibição de escudo, escudos animada no fundo e cores de borda personalizadas para cada país.
- **Exportação para PDF:** Função integrada para salvar o resumo do elenco em formato PDF.
- **Persistência de Dados:** Uso de `localStorage` para manter o draft salvo mesmo após fechar o navegador.

## 📂 Estrutura de Arquivos
- `index.html`: Painel principal do sorteio.
- `time.html`: Template da página individual da seleção.
- `resumo.html`: Página com a visão geral de todos os times.
- `img/`: Pasta raiz de imagens.
  - `escudos/`: escudos de fundo (ex: `escudos-CT América de Propriá.png`).
  - `escudos/`: Escudos das seleções (ex: `CT América de Propriá.png`).
- `script.js`: Toda a lógica do motor de sorteio.
- `time.js`: Script de renderização dinâmica das páginas dos times.

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3 (Animações @keyframes e Flexbox)
- JavaScript Vanilla (ES6+)

## 📸 Demonstração
A página do time inclui:
- **escudos centralizada** com borda na cor do país.
- **Dono do time** identificado como `dono-time`.
- **Elenco** com fundo branco para facilitar a leitura.
- **escudos animada** movendo-se suavemente ao fundo.

## ✒️ Autor
Desenvolvido como parte do projeto de organização da **Copa 13**.
