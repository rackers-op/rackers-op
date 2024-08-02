var imagens = [
    ["imgs/evolve.gif", 10000],
    ["imgs/gestaoConhecimento.png", 20000],
    ["imgs/indicadores.png", 30000],
]; // array com as imagens

var links = [
    "https://app.powerbi.com/view?r=eyJrIjoiYzk5NTQzODctN2E5ZS00NTkwLThhN2QtZGNhYzUxMTJhNzMwIiwidCI6IjljODUzYmE1LWNlN2MtNGI3MS05YjE0LTQyOWNlNGRiNzlkZCJ9",
    "https://app.powerbi.com/view?r=eyJrIjoiYWJlMTdmNGEtMmU2OC00ZTFiLTgwZTYtNzhhZDJlZWM5ZGQ4IiwidCI6IjljODUzYmE1LWNlN2MtNGI3MS05YjE0LTQyOWNlNGRiNzlkZCJ9",
];

var tempoImagens =10000; // tempo em milissegundos para exibir cada imagem
var tempoLinks = 50000; // tempo em milissegundos para exibir cada link
var indiceImagens = 0; // índice atual da imagem
var indiceLinks = 0; // índice atual do link


function mostrarImagem() {
    document.getElementById("minha-imagem").style.display = "block";
    document.getElementById("link-iframe").style.display = "none";
   
    document.getElementById("minha-imagem").src = imagens[indiceImagens][0];

    timeOut = imagens[indiceImagens][1];
    
    indiceImagens = (indiceImagens + 1) % imagens.length;
    
    if (indiceImagens == 0) {
        //setTimeout(mostrarLink, tempoImagens);
        setTimeout(mostrarImagem, timeOut);
        
    } else {
        setTimeout(mostrarImagem, timeOut);
    }
}

function mostrarLink() {
    document.getElementById("link-iframe").style.display = "block";
    document.getElementById("minha-imagem").style.display = "none";
    document.getElementById("link-iframe").src = links[indiceLinks];
    indiceLinks = (indiceLinks + 1) % links.length;

    if (indiceLinks == 0) {
        setTimeout(mostrarImagem, tempoLinks);
        
    } else {
        setTimeout(mostrarLink, tempoLinks);
    }
}

window.onload = function () {
    mostrarImagem();
};

// const tempoImagem = 10000;
// const tempoIframe = 10000;
// const tempoFade = 1000;
// const tempoImagensExtras = 4000;

// let indiceIframe = 0;
// let indiceImagemExtra = 0;

// function mostrarImagem() {
//   const imagem = document.getElementById("minha-imagem");
//   imagem.classList.add("show");
//   setTimeout(() => {
//     imagem.classList.remove("show");
//     mostrarRelatorio();
//   }, tempoImagem - tempoFade);
// }

// function mostrarRelatorio() {
//   const iframesRelatorios = [
//     document.getElementById("iframeGestaoAVista"),
//     document.getElementById("iframeHabilidades"),
//   ];

//   iframesRelatorios.forEach((iframe) => iframe.classList.remove("show"));
//   iframesRelatorios[indiceIframe].classList.add("show");

//   setTimeout(() => {
//     iframesRelatorios[indiceIframe].classList.remove("show");
//     indiceIframe = (indiceIframe + 1) % iframesRelatorios.length;
//     if (indiceIframe === 0) {
//       if (document.getElementById("imagemExtra1")) {
//         mostrarImagensExtras();
//       } else {
//         mostrarImagem();
//       }
//     } else {
//       mostrarRelatorio();
//     }
//   }, tempoIframe - tempoFade);
// }

// function mostrarImagensExtras() {
//   const imagensExtras = [document.getElementById("imagemExtra1")];

//   imagensExtras.forEach((image) => image.classList.remove("show"));
//   imagensExtras[indiceImagemExtra].classList.add("show");

//   setTimeout(() => {
//     imagensExtras[indiceImagemExtra].classList.remove("show");
//     indiceImagemExtra = (indiceImagemExtra + 1) % imagensExtras.length;
//     if (indiceImagemExtra === 0) {
//       mostrarImagem();
//     } else {
//       mostrarImagensExtras();
//     }
//   }, tempoIframe - tempoFade);
// }

// window.onload = function () {
//   mostrarImagem();
// };