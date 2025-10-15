// Captura dos botões
const btnMulher = document.getElementById("btnMulher");
const btnHomem = document.getElementById("btnHomem");
const header = document.getElementById("header");

// Ação do botão Mulher
btnMulher.addEventListener("click", () => {
    document.body.style.backgroundColor = "#ffb6c1"; // Rosa claro
    header.innerHTML = "<h2>👩 Mulher selecionada</h2>";
});

// Ação do botão Homem
btnHomem.addEventListener("click", () => {
    document.body.style.backgroundColor = "#87cefa"; // Azul claro
    header.innerHTML = "<h2>👨 Homem selecionado</h2>";
});