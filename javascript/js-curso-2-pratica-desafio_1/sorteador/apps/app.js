class Titulo extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <h1>Sorteador
                <span class="container__texto-azul">de números</span>
            </h1>
        `;
    }
}

customElements.define('header-body', Titulo);

function sortear() {
    let qtd = parseInt(document.getElementById('qtd').value);
    let from = parseInt(document.getElementById('de').value);
    let to = parseInt(document.getElementById('ate').value);

    if (from >= to) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (qtd > (to - from + 1)) {
        alert('Erro! A quantidade ultrapassa o intervalo.');
        return;
    }

    if (qtd == '' || from == '' || to == '') {
        alert('Erro! Algum dos valores esta vazio.');
        return;
    }

    let sorteados = [];
    let num;

    for (let i = 0; i < qtd; i++) {
        num = numeroAleatorio(from, to);
        while (sorteados.includes(num)) {
            num = numeroAleatorio(from, to);
            alert('Tentando obter número inédito');
        }
        sorteados.push(num);
    }

    for (let i = 0; i < sorteados.length; i++) {
        const element = sorteados[i];

    }

    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo"><span class="container__texto-azul">Números sorteados: </span> ${sorteados}.</label>`;

    console.log (sorteados);

    alterarStatusBotao('btn-sortear', 'btn-reiniciar');
}

function reiniciar() {
    // document.getElementById('qtd').value = '';
    // document.getElementById('de').value = '';
    // document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo"><span class="container__texto-azul">Números sorteados: </span> nenhum até agora.</label>';

    alterarStatusBotao('btn-reiniciar', 'btn-sortear');
}

function numeroAleatorio(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}

function alterarStatusBotao(primeiroBotao, segundoBotao) {
    botoes = [primeiroBotao, segundoBotao];
    botoes.forEach(element => {
        let botao = document.getElementById(element);

        if (botao.classList.contains('container__botao')) {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
        } else {
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
        }
    });
}