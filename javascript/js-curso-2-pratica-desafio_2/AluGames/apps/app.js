let jogosAlugados = 0;

function exibirQtAlugados () {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alteraStatus(i) {
    let game = document.getElementById(`game-${i}`);

    let img = game.querySelector('.dashboard-img');
    let nome = game.querySelector('.dashboard-nome').textContent;
    let btn = game.querySelector('.dashboard-button');

    if (btn.classList.contains('dashboard-button--return')) {

        let decisao = confirm('Tem certeza?');

        if (decisao == true) {
            img.classList.remove('dashboard-img--rented');
            img.classList.add('dashboard-img');

            btn.textContent = 'Alugar';
            btn.classList.remove('dashboard-button--return');
            btn.classList.add('dashboard-button');

            jogosAlugados--;
        }

    } else {
        btn.textContent = 'Devolver';
        btn.classList.add('dashboard-button--return');
        img.classList.add('dashboard-img--rented');

        jogosAlugados++;
    }

    i ='';
    exibirQtAlugados ();
}

document.addEventListener('DOMContentLoaded', function () {
    jogosAlugados = document.querySelectorAll('.dashboard-img--rented').length;
})
