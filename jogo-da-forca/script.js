const palavras = ["Banana", "Maça", "mamao", "limao", "melancia", "pera", "lichia", "laranja"];
let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
palavraSecreta = palavraSecreta.toLowerCase();

const maxTentativas = 6;
let tentativas = 0;
let palavraAdivinhada = Array(palavraSecreta.length).fill("_");
let letrasErradas = [];

const forcaImagens = [
  "forca1.jpg",
  "forca2.jpg",
  "forca3.jpg",
  "forca4.jpg",
  "forca5.jpg",
  "forca6.jpg",
  "forca7.jpg",
];

function atualizarPalavraAdivinhada() {
  const elementoPalavraAdivinhada = document.getElementById("palavraAdivinhada");
  elementoPalavraAdivinhada.textContent = palavraAdivinhada.join(" ");
}

function atualizarLetrasErradas() {
  const elementoLetrasErradas = document.getElementById("letrasErradas");
  elementoLetrasErradas.textContent = letrasErradas.join(", ");
}

function atualizarForca() {
  const elementoForcaImg = document.getElementById("forca-img");
  elementoForcaImg.src = forcaImagens[tentativas];
}

function verificarLetra(letra) {
  if (!palavraSecreta.includes(letra)) {
    letrasErradas.push(letra);
    tentativas++;
    atualizarForca();
  } else {
    for (let i = 0; i < palavraSecreta.length; i++) {
      if (palavraSecreta[i] === letra) {
        palavraAdivinhada[i] = letra;
      }
    }
  }

  atualizarPalavraAdivinhada();
  atualizarLetrasErradas();
  verificarFimDoJogo();
}

function verificarFimDoJogo() {
  if (palavraAdivinhada.join("") === palavraSecreta) {
    alert("Parabéns! Você venceu!");
    reiniciarJogo();
  } else if (tentativas >= maxTentativas) {
    alert("Você perdeu. A palavra secreta era: " + palavraSecreta);
    reiniciarJogo();
  }
}

function reiniciarJogo() {
  palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
  palavraSecreta = palavraSecreta.toLowerCase();
  tentativas = 0;
  palavraAdivinhada = Array(palavraSecreta.length).fill("_");
  letrasErradas = [];
  atualizarPalavraAdivinhada();
  atualizarLetrasErradas();
  atualizarForca();
}

document.getElementById("adivinharLetra").addEventListener("click", function () {
  const letraAdivinhada = document.getElementById("letraInput").value.toLowerCase();
  if (letraAdivinhada.length === 1) {
    if (!letrasErradas.includes(letraAdivinhada) && !palavraAdivinhada.includes(letraAdivinhada)) {
      verificarLetra(letraAdivinhada);
    }
    document.getElementById("letraInput").value = "";
  } else {
    alert("Por favor, insira uma letra.");
  }
});

atualizarPalavraAdivinhada();
atualizarLetrasErradas();
atualizarForca();
