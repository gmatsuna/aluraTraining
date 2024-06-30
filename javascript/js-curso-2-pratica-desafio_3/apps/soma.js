function exibirNaTela(tag, text) {
    let print = document.querySelector(tag);
    print.innerHTML = text;
}

t1 = `Soma de 2 valores.`;

exibirNaTela ("h1", t1);

t2 = `Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.`;

exibirNaTela ("h3", t2);

function somar () {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let soma = parseInt(valor1) + parseInt(valor2);
    console.log(`A soma de ${valor1} e ${valor2} é igual a ${soma}`);
    exibirNaTela ("#resultado", `A soma de ${valor1} e ${valor2} é igual a ${soma}`);
}