function exibirNaTela(tag, text) {
    let print = document.querySelector(tag);
    print.innerHTML = text;
}

exibirNaTela("h1", "Recuperar valores.");

let p2 = `Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.`

exibirNaTela("p", p2);

function recuperaImprimi () {
    let val1 = document.getElementById("val1").value;
    console.log(val1);
    document.getElementById("p-val1").innerHTML = val1;

    let val2 = document.getElementById("val2").value;
    console.log(val2);
    document.getElementById("p-val2").innerHTML = val2;
}

function limpar() {
    document.getElementById("val1").value = "";
    document.getElementById("val2").value = "";
    document.getElementById("p-val1").innerHTML = "";
    document.getElementById("p-val2").innerHTML = "";
}