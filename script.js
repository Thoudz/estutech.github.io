document.addEventListener('DOMContentLoaded', () => {
    // Adicione interatividade aqui, como animações de scroll ou efeitos em botões
    console.log("Bem-vindo ao EstuTech!");
});
document.addEventListener("DOMContentLoaded", () => {
    const minigame = document.getElementById("minigame");
    const logoGame = document.getElementById("logo-game");

    logoGame.addEventListener("click", () => {
        minigame.style.display = "none";
    });
});

