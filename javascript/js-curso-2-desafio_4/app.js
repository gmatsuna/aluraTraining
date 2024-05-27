let h1Title = 'Desafio 4';
let h2PrimeiroExercicio = 'Desafio 4 - Primeiro Exercicio';
let h2SegundoExercicio = 'Desafio 4 - Segundo Exercicio';
let h2TerceiroExercicio = 'Desafio 4 - Terceiro Exercicio';
let h2QuartoExercicio = 'Desafio 4 - Quarto Exercicio';
let h2QuintoExercicio = 'Desafio 4 - Quinto Exercicio';
let h2SextoExercicio = 'Desafio 4 - Sexto Exercicio';

let p1 = 'Crie uma lista vazia, com o nome listaGenerica.'
let p2 = "Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.";
let p3 = "Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'."
let p4 = "Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento."
let p5 = 'Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.'
let p6 = 'Crie uma lista com 3 nomes e exiba no console apenas o último elemento.'

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('#h1Title', h1Title);

// Primeiro Exercicio
exibirTextoNaTela('#h2PrimeiroExercicio', h2PrimeiroExercicio);
exibirTextoNaTela('#p1', p1);

listaGenerica = [];
exibirTextoNaTela('#p1_result', 'listaGenerica = [];')

// Segundo Exercicio
exibirTextoNaTela('#h2SegundoExercicio', h2SegundoExercicio)
exibirTextoNaTela('#p2', p2);

linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python']

exibirTextoNaTela('#p2_result', "linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python']'");

// Terceiro Exercicio
exibirTextoNaTela('#h2TerceiroExercicio', h2TerceiroExercicio);
exibirTextoNaTela('#p3', p3);

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

exibirTextoNaTela('#p3_result', `linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang'); ${linguagensDeProgramacao}`)

// Quarto Exercicio
exibirTextoNaTela('#h2QuartoExercicio', h2QuartoExercicio);
exibirTextoNaTela('#p4', p4);

nomes = ['Nome 1', 'Nome 2', 'Nome 3'];

exibirTextoNaTela('#p4_result', `Primeiro elemento: ${nomes[0]}`)

// Quinto Exercicio
exibirTextoNaTela('#h2QuintoExercicio', h2QuintoExercicio);
exibirTextoNaTela('#p5', p5);
exibirTextoNaTela('#p5_result', `Primeiro elemento: ${nomes[1]}`)

//Sexto Exercicio
exibirTextoNaTela('#h2SextoExercicio', h2SextoExercicio);
exibirTextoNaTela('#p6', p6);
exibirTextoNaTela('#p6_result', `Primeiro elemento: ${nomes[nomes.length - 1]}`)