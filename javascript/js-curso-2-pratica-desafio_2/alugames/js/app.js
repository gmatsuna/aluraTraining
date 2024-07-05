let jogosAlugados = 0;

function exibirQtdAlugados () {
    console.log (`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(i) {
    let game = document.getElementById(`game-${i}`);
    
    let imagem = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');
    let gameName = game.querySelector('.dashboard__item__name').textContent;

    if (botao.classList. contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        imagem.classList.remove('dashboard__item__img--rented');
        jogosAlugados --;
        alert (`Jogo ${gameName} devolvido com sucesso!`);
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
        jogosAlugados ++;
    }

    i = '';
    exibirQtdAlugados();
}

document.addEventListener('DOMContentLoaded', function () {
    jogosAlugados = document.querySelectorAll ('.dashboard__item__img--rented').length;

    exibirQtdAlugados();
})