class Titulo extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <h1 data-heading="" contenteditable>Sorteador de números</h1>
        `;
    }
}

customElements.define('header-body', Titulo);


// It is to make the text editable for demo purpose, not required for the effect. 

let h1 = document.querySelector("h1");
h1.addEventListener("input", function () {
    this.setAttribute("data-heading", this.innerText);
});

window.addEventListener('keydown',function(e) {
    if (e.keyIdentifier=='U+000A' || e.keyIdentifier=='Enter' || e.keyCode==13) {
            e.preventDefault();
            return false;
    }
}, true);


//Sorteador de Numero aleatorio

function numeroAleatorio(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}


// funcao utilizado para alterar o status dos botoes.

function alterarStatusBotao(btn1, btn2) {

    let botao1 = document.getElementById(btn1);
    let botao2 = document.getElementById(btn2);

    if (btn1 == 'btn-sortear' && botao1.classList.contains('container__botao')) {
        botao1.classList.remove('container__botao');
        botao1.classList.remove('container__botao-desabilitado');
        botao1.classList.add('container__botao-novoSorteio');
        botao2.classList.replace('container__botao-desabilitado', 'container__botao');
    } else if (btn1 == 'btn-sortear' && botao1.classList.contains('container__botao-novoSorteio')) {
        console.log(`Executa novo sorteio.`);
        botao1.classList.remove('container__botao-desabilitado');
        botao1.classList.add('container__botao-novoSorteio');
        botao1.classList.remove('container__botao');
        botao2.classList.replace('container__botao-desabilitado', 'container__botao');
    } else if (btn1 == 'btn-reiniciar' && botao1.classList.contains('container__botao')) {
        botao1.classList.remove('container__botao');
        botao1.classList.remove('container__botao-novoSorteio');
        botao1.classList.add('container__botao-desabilitado');
        botao2.classList.remove('container__botao-desabilitado');
        botao2.classList.remove('container__botao-novoSorteio');
        botao2.classList.add('container__botao');
        console.log(`reset do sistema, zera tudo.`)
    }
}


// Funcao para sortear os numeros de acordo com os parametros informados. Quantidade, de, ate.

let sorteados = [];
function sortear() {
    let qtd = parseInt(document.getElementById('qtd').value);
    let from = parseInt(document.getElementById('de').value);
    let to = parseInt(document.getElementById('ate').value);

    if (from >= to) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique! A aplicacao sera reiniciada automaticamente.');
        alterarStatusBotao('btn-reiniciar', 'btn-sortear');
        return;
    }

    if (qtd > (to - from + 1)) {
        alert('Erro! A quantidade ultrapassa o intervalo. A aplicacao sera reiniciada automaticamente.');
        alterarStatusBotao('btn-reiniciar', 'btn-sortear');
        return;
    }

    if (isNaN(qtd) || isNaN(from) || isNaN(to)) {
        alert('Erro! Algum dos valores esta vazio. A aplicacao sera reiniciada automaticamente.');
        alterarStatusBotao('btn-reiniciar', 'btn-sortear');
        return;
    }

    let num;

    for (let i = 0; i < qtd; i++) {
        num = numeroAleatorio(from, to);
        while (sorteados.includes(num)) {
            num = numeroAleatorio(from, to);
            alert('Tentando obter número inédito');
        }
        sorteados.push(num);
    }

    document.getElementById('resultado').innerHTML = `
        <label class="texto__paragrafo-resultado">
            <span class="container__texto-azul">Números sorteados número sorteado até agora: </span>
            ${sorteados} .
         </label>
    `;

    console.log(sorteados);

    alterarStatusBotao('btn-sortear', 'btn-reiniciar');

    return sorteados;
}


// Reinicia o aplicativo para iniciar o sorteio desde o primeiro sorteio.

function reiniciar() {
    document.getElementById('qtd').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    sorteados = [];
    alterarStatusBotao('btn-reiniciar', 'btn-sortear');
    document.getElementById('resultado').innerHTML = `
        <label class="texto__paragrafo-resultado">
            <span class="container__texto-azul">Números sorteados: </span>
            Nenhum número sorteado até agora.
        </label>
    `
}