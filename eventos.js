// Seleciona os elementos
const caixa = document.getElementById("caixa");
const botao = document.getElementById("botao");

// Adiciona um evento de mouseover no botão
botao.addEventListener("mouseover", () => {
    // Adiciona a classe "visivel" para exibir a caixa
    caixa.classList.add("visivel");
});

// Adiciona um evento de mouseout para esconder o texto ao remover o mouse
botao.addEventListener("mouseout", () => {
    // Remove a classe "visivel" para ocultar a caixa
    caixa.classList.remove("visivel");
});
