function hello () {
    return console.log('Hello World');
}

hello();

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Desafio 2';

function exibeTextoNaTela (tagId, texto) {
    let campo = document.querySelector (tagId);
    campo.innerHTML = `${texto}<br>`;
}

exibeTextoNaTela('#p1', `1. Criar uma função que exibe "Olá, mundo!" no console.`);

exibeTextoNaTela('#p2', '2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.');
function nome (nome) {
    console.log(`Olá, ${nome}!`);
}
nome('Gilberto');

exibeTextoNaTela('#p3', '3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.');
function dobro(numero) {
    return console.log(numero*2);
}
dobro(5);

exibeTextoNaTela('#p4', '4. Criar uma função que recebe três números como parâmetros e retorna a média deles.');
function media(num1, num2,num3) {
    return console.log((num1+num2+num3)/3);
}
media(7,3,5);

exibeTextoNaTela('#p5', '5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.');
function maiorNumero(num1, num2) {
    let resposta = num1 > num2? num1 : num2;
    console.log(resposta);
}
maiorNumero(7,3);

textP6 = '6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.';
exibeTextoNaTela('#p6', textP6);
function quadrado(num) {
    console.log(num**2);
    return resultado6 = num**2;
    
}
quadrado(5);