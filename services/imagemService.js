class ImagemService {
  constructor() {
    this.imagens = [
      { url: "imgs/tv-rackers-vc-na-rackers.gif", tempoExibicao: 6000 },
      { url: "imgs/tv-rackers-tribos.png", tempoExibicao: 10000 },
      { url: "imgs/tv-rackers-estrutura.png", tempoExibicao: 10000 },
      { url: "imgs/tv-rackers-aniversario.gif", tempoExibicao: 12000 },
      { url: "imgs/tv-rackers_seg.png", tempoExibicao: 5000 },
      { url: "imgs/tv-rackers_ter.png", tempoExibicao: 5000 },
      { url: "imgs/tv-rackers_qua.png", tempoExibicao: 5000 },
      { url: "imgs/tv-rackers_qui.png", tempoExibicao: 5000 },
      { url: "imgs/tv-rackers_sex.png", tempoExibicao: 5000 },
      { url: "imgs/tv-rackers-principios-01.png", tempoExibicao: 5000 },
      { url: "imgs/tv-rackers-principios-02.png", tempoExibicao: 5000 },
      { url: "imgs/tv-rackers-julia-raposo.gif", tempoExibicao: 5000 }
    ];
  }

  obter() {
    return this.imagens.slice();
  }
}

const imagemService = new ImagemService();

export default imagemService;
