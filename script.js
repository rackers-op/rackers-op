var imagens = [
    "imgs/evolve.gif",
]; // array com as imagens

var links = [
    "https://app.powerbi.com/view?r=eyJrIjoiYzk5NTQzODctN2E5ZS00NTkwLThhN2QtZGNhYzUxMTJhNzMwIiwidCI6IjljODUzYmE1LWNlN2MtNGI3MS05YjE0LTQyOWNlNGRiNzlkZCJ9",
    "https://app.powerbi.com/reportEmbed?reportId=c0186b20-d9d8-4f61-8138-145dc210519a&autoAuth=true&ctid=9c853ba5-ce7c-4b71-9b14-429ce4db79dd",
];

var tempoImagens =10000; // tempo em milissegundos para exibir cada imagem
var tempoLinks = 50000; // tempo em milissegundos para exibir cada link
var indiceImagens = 0; // índice atual da imagem
var indiceLinks = 0; // índice atual do link


function mostrarImagem() {
    document.getElementById("minha-imagem").style.display = "block";
    document.getElementById("link-iframe").style.display = "none";
   
    document.getElementById("minha-imagem").src = imagens[indiceImagens];
    
    indiceImagens = (indiceImagens + 1) % imagens.length;
    
    if (indiceImagens == 0) {
        setTimeout(mostrarLink, tempoImagens);
        
    } else {
        setTimeout(mostrarImagem, tempoImagens);
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

