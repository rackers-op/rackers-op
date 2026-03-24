import imagemService from './services/imagemService.js';

const tempoFade = 1000;
const intervaloRefresh = 1800000; // 30 minutos (1800000ms)

let indiceImagem = 0;

const imagensIndex = (imagemService && typeof imagemService.obter === 'function')
    ? imagemService.obter()
    : [
            { url: "imgs/tv-rackers-vc-na-rackers.gif", tempoExibicao: 6000 }
        ];

function mostrarImagemIndex() {
    const imagem = document.getElementById("minha-imagem");
    const tempoImagem = imagensIndex[indiceImagem].tempoExibicao;
    imagem.src = imagensIndex[indiceImagem].url + "?t=" + Date.now(); // Cache busting
    imagem.classList.add("show");

    setTimeout(() => {
        imagem.classList.remove("show");
        indiceImagem = (indiceImagem + 1) % imagensIndex.length;
        setTimeout(() => {
            mostrarImagemIndex();
        }, tempoFade);
    }, Math.max(0, tempoImagem - tempoFade));
}

// Refresh automático da página para buscar atualizações
function refreshPagina() {
    // Usa cache busting para garantir que pega a versão mais recente
    location.reload(true);
}

window.addEventListener("load", function () {
    mostrarImagemIndex();
    // Configura refresh automático
    setInterval(refreshPagina, intervaloRefresh);
});
