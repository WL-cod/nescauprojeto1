let index = 0;

function mudaImagem(n) {
    const imagens = document.querySelectorAll('.imagens img');
    index = (index + n + imagens.length) % imagens.length;
    const offset = -index * 100;
    document.querySelector('.imagens').style.transform = `translateX(${offset}%)`;
}

// Muda a imagem automaticamente a cada 5 segundos
setInterval(() => mudaImagem(1), 5000);
