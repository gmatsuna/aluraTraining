function titulo() {
    document.querySelector('h1').innerHTML = 'Desafio 3';
}

titulo();

function textoExibirNaTela (tag, texto) {
    document.querySelector(tag).innerHTML = texto;
}

window.onload = function () {   
    var input_field = document.querySelectorAll('input');
    var myLength = input_field.length;
    var input;

    for (var i = 0; i < myLength; i++) {
        input = input_field[i];
        input.addEventListener('change', function () {
            var v = parseFloat(this.value);
            if (isNaN(v)) {
                this.value = '';
            } else {
                this.value = v.toFixed(2);
            }
        })
    }
}

// Verificacao de aprovacao

textoExibirNaTela('#h2PrimeiroExercicio', 'Verifica aprovacao.');
textoExibirNaTela('#p1', 'Digite as 4 notas.');

let mediaFinal;

function aprovacaoCalcula() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementsByClassName('container__input')[1].value);
    let n3 = parseFloat(document.getElementsByTagName('input')[2].value);
    let n4 = parseFloat(document.getElementsByName('n4')[0].value);

    notas = [n1,n2,n3,n4];
    let qtd = 0;
    let total = 0;

    for (let i = 0; i < notas.length; i++) {
        total += notas[i];
        qtd++;
    }

    media = parseFloat(total/qtd).toFixed(2);
    console.log(`a nota media eh ${media}.`);

    textoExibirNaTela('#p1', media >= 5 ? `Aprovado com nota media de ${media}` : `Reprovado com nota media de ${media}.`);
    document.getElementById('aprovacaoCalcula').setAttribute('disabled', true);
    document.getElementById('aprovacaoReset').removeAttribute('disabled');
}

function aprovacaoReset() {
    document.getElementById('n1').value = '';
    document.getElementsByClassName('container__input')[1].value = '';
    document.getElementsByTagName('input')[2].value = '';
    document.getElementsByName('n4')[0].value = '';
    textoExibirNaTela('#p1', 'Digite as 4 notas.');
    document.getElementById('aprovacaoCalcula').removeAttribute('disabled');
    document.getElementById('aprovacaoReset').setAttribute('disabled', true);
}


//Calculo de IMC
// peso / altura * altura

textoExibirNaTela('#h2SegundoExercicio', 'Calculo de IMC')

segundoExercicio = 'Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.'
textoExibirNaTela('#p2', segundoExercicio)

function imcCalcula () {
    let idade = parseFloat(document.getElementById('idade').value)
    let altura = parseFloat(document.getElementById('altura').value)
    let peso = parseFloat(document.getElementById('peso').value)
    let imc = peso / (altura * altura);
    let imcResult = parseFloat(imc).toFixed(2);

    textoExibirNaTela('#p2', `O IMC eh de ${imcResult}!`)
    document.getElementById('imcCalcula').setAttribute('disabled', true);
    document.getElementById('imcReset').removeAttribute('disabled');
}

function imcReset () {
    document.getElementById('idade').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    textoExibirNaTela('#p2', 'Calculo de IMC')
    document.getElementById('imcReset').setAttribute('disabled', true);
    document.getElementById('imcCalcula').removeAttribute('disabled');
}

// Calcular fatorial

textoExibirNaTela('#h2TerceiroExercicio', 'Terceiro Exercicio')

terceiroExercicio = 'Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.'
textoExibirNaTela('#p3', terceiroExercicio)

function fatorialCalcula () {
    let fatNum = parseFloat(document.getElementById('numFatorial').value);
    let fatResult = 1;
    if (fatNum < 0) {
        return -1;
    } else if (fatNum == 0) {
        fatResult = 1;
    } else {
        while (fatNum > 1) {
            fatResult = fatNum * fatResult;
            fatNum --;
        }
    }

    textoExibirNaTela('#p3', fatResult);

    document.getElementById('fatorialCalcula').setAttribute('disabled', true)
    document.getElementById('fatorialReset').removeAttribute('disabled');
}

function fatorialReset () {
    document.getElementById('numFatorial').value = '';
    textoExibirNaTela('#p3', terceiroExercicio)
    document.getElementById('fatorialReset').setAttribute('disabled', true);
    document.getElementById('fatorialCalcula').removeAttribute('disabled');
}

// Conversor Dolar para Real

textoExibirNaTela('#h2QuartoExercicio', 'Quarto Exercicio')

quartoExercicio = 'Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.'
textoExibirNaTela('#p4', quartoExercicio)

function convertCalcula () {
    let valDolar = parseFloat(document.getElementById('valDolar').value);
    let valReais = (valDolar * 4.80).toFixed(2);

    textoExibirNaTela('#p4', `R$ ${valReais}`)

    document.getElementById('convertCalcula').setAttribute('disabled', true);
    document.getElementById('convertReset').removeAttribute('disabled');
}

function convertReset () {
    document.getElementById('valDolar').value = '';
    textoExibirNaTela('#p4', quartoExercicio)
    document.getElementById('convertReset').setAttribute('disabled', true);
    document.getElementById('convertCalcula').removeAttribute('disabled');
}

// Calculo de Area e Perimetro

textoExibirNaTela('#h2QuintoExercicio', 'Quinto Exercicio')

quintoExercicio = 'Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.'
textoExibirNaTela('#p5', quintoExercicio)

function areaRetangular() {
    let largura = parseFloat(document.getElementById('larguraRetangulo').value);
    let altura = parseFloat(document.getElementById('alturaRetangulo').value);
    let area = largura * altura;
    let perimetro = (largura * 2) + (altura * 2);

    textoExibirNaTela('#p5', `O perimetro e ${perimetro}, e a area e ${area}`)

    document.getElementById('retCalcula').setAttribute('disabled', true);
    document.getElementById('retReset').removeAttribute('disabled');
}

function retReset() {
    document.getElementById('larguraRetangulo').value = '';
    document.getElementById('alturaRetangulo').value = '';
    textoExibirNaTela('#p5', quintoExercicio)
    document.getElementById('retReset').setAttribute('disabled', true);
    document.getElementById('retCalcula').removeAttribute('disabled');
}

// Area e Perimetro circular

textoExibirNaTela('#h2SextoExercicio', 'Sexto Exercicio')

sextoExercicio = 'Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.'
textoExibirNaTela('#p6', sextoExercicio)

function circCalcula() {
    pi = 3.14;
    let raio = document.querySelector('#raio').value; // metodo POST
    let circArea = parseFloat((raio * raio) * pi).toFixed(2);
    let circPerimetro = parseFloat(2 * pi * raio).toFixed(2);

    textoExibirNaTela('#p6', `A area e ${circArea}, e o perimetro e ${circPerimetro}`)

    document.getElementById('circCalcula').setAttribute('disabled', true);
    document.getElementById('circReset').removeAttribute('disabled');
}

function circReset() {
    document.getElementById('raio').value = '';
    textoExibirNaTela('#p6', sextoExercicio)
    document.getElementById('circReset').setAttribute('disabled', true);
    document.getElementById('circCalcula').removeAttribute('disabled');
}

// Tabuada

textoExibirNaTela('#h2SetimoExercicio', 'Setimo Exercicio')

setimoExercicio = 'Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.'
textoExibirNaTela('#p7', setimoExercicio)

function tabCalcula() {
    let numTabuada = parseFloat(document.querySelector('#multiplo').value);
    let tabuada = '';

    for (let i = 1; i <= 10; i++) {
        tabuada += `${numTabuada} x ${i} = ${numTabuada * i} \n <br\>`;
    }

    textoExibirNaTela('#p7', `${tabuada}`);

    document.getElementById('tabCalcula').setAttribute('disabled', true);
    document.getElementById('tabReset').removeAttribute('disabled');
}

function tabReset() {
    document.getElementById('multiplo').value = '';
    textoExibirNaTela('#p7', setimoExercicio)
    document.getElementById('tabReset').setAttribute('disabled', true);
    document.getElementById('tabCalcula').removeAttribute('disabled');
}