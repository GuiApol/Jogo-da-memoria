const emojis = [
    "❤", "❤", "🤣", "🤣", "🎶", "🎶", "💋", "💋",
    "😎", "😎", "🎈", "🎈", "🤡", "🤡", "👻", "👻"
];
let openCards = [];
let attempts = 0;


function startGame() {
    // Limpa o tabuleiro e as variáveis
    document.querySelector(".game").innerHTML = "";
    openCards = [];
    attempts = 0;
    document.querySelector("#attempts").textContent = `Tentativas: ${attempts}`;

    // Embaralha as cartas
    let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));

    // Cria as cartas no tabuleiro
    for (let i = 0; i < shuffleEmojis.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = shuffleEmojis[i];
        box.onclick = handleClick;
        document.querySelector(".game").appendChild(box);
    }
}


function updateScore() { score = 1000 - (attempts * 10) - time; document.getElementById("score").textContent = `Pontuação: ${score}`; }
function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
        attempts++;
        document.querySelector("#attempts").textContent = `Tentativas: ${attempts}`;
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("matched");
        openCards[1].classList.add("matched");
        openCards = [];
        
        // Verifica se o jogador venceu
        if (document.querySelectorAll(".matched").length === emojis.length) {
            alert("Você venceu! O jogo será reiniciado.");
            startGame(); // Reinicia o jogo
        }
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        openCards = [];
    }
}

// Inicia o jogo pela primeira vez
startGame();
