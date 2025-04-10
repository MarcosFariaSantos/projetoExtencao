document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;

    // Carrossel de imagens
    const images = document.querySelectorAll("#quadro-imagens .carousel img");
    const totalImages = images.length;

    // Função para mostrar a imagem atual
    function showImage(index) {
        const offset = -100 * index; // Desloca as imagens para a esquerda
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    }

    // Função para iniciar o slideshow
    function startSlideshow() {
        showImage(currentIndex);
        currentIndex = (currentIndex + 1) % totalImages; // Após a última imagem, volta para a primeira
        setTimeout(startSlideshow, 5000); // Repeats every 5 seconds
    }

    // Inicia o slideshow
    startSlideshow();

    // Controle do carrossel de avaliações
    const avaliacaoBoxes = document.querySelectorAll('.avaliacao-box');
    const totalAvaliacoes = avaliacaoBoxes.length;

    // Função para mostrar a avaliação atual
    function showAvaliacao(index) {
        // Esconde todas as avaliações
        avaliacaoBoxes.forEach((box, i) => {
            box.style.display = 'none';
        });

        // Exibe a avaliação atual
        avaliacaoBoxes[index].style.display = 'block';
    }

    // Exibe a primeira avaliação ao carregar a página
    showAvaliacao(currentIndex);

    // Função para mostrar a próxima avaliação
    function showNextAvaliacao() {
        currentIndex = (currentIndex + 1) % totalAvaliacoes; // Vai para a próxima, ou volta para a primeira
        showAvaliacao(currentIndex);
    }

    // Função para mostrar a avaliação anterior
    function showPreviousAvaliacao() {
        currentIndex = (currentIndex - 1 + totalAvaliacoes) % totalAvaliacoes; // Vai para a anterior, ou vai para a última
        showAvaliacao(currentIndex);
    }

    // Event listeners para as setas
    document.querySelector('.seta.direita').addEventListener('click', showNextAvaliacao);
    document.querySelector('.seta.esquerda').addEventListener('click', showPreviousAvaliacao);
});
