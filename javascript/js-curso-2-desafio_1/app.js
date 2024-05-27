let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clickConsole() {
    console.log('O botão foi clicado');
}

function clickAlerta() {
    alert ('Eu amo JS');
}

function clickPrompt() {
    let cidade = prompt('Digite o nome de uma cidade.');
    alert (`Estive em ${cidade} e lembrei de você.`);
}

function clickSoma(params) {
    let num1 = prompt('Digite o primeiro');
    num1 = parseFloat(num1);
    let num2 = prompt('Digite o segundo');
    num2 = parseFloat(num2);
    let soma = num1 + num2;

    console.log(soma);
    //document.write (`O resultado da soma e: ${soma}`);
    alert(`O resultado da soma e: ${soma}`)
}