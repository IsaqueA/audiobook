const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const audioCapitulo = document.getElementById("audio-capitulo");
const nomeCapitulo = document.getElementById("capitulo");

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function trocarNomeFaixa() {
    nomeCapitulo.innerText = `Capítulo ${capituloAtual}`;
}

function tocarFaixa() {
  audioCapitulo.play();
  taTocando = 1;
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarFaixa() {
  audioCapitulo.pause();
  taTocando = 0;
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausar() {
  if (taTocando === 0) {
    tocarFaixa();
  } else {
    pausarFaixa();
  }
}

function proximaFaixa() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual += 1;
  }

  audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;

  tocarFaixa();

  trocarNomeFaixa();
}

function voltarFaixa() {
    if (capituloAtual === 1) {
      capituloAtual = numeroCapitulos;
    } else {
      capituloAtual -= 1;
    }
  
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
  
    tocarFaixa();

    trocarNomeFaixa();
  }

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);
