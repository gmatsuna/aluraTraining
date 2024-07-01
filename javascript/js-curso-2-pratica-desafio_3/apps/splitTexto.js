function exibirNaTela(tag, text) {
    let print = document.querySelector(tag);
    print.innerHTML = text;
}

exibirNaTela ("h1", `Split de Texto.`);

t2 = `Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.`;

exibirNaTela ("h3", t2);

function executar() {
    let frase = document.getElementById('text').value;
    
    if (frase === '') {
        alert("Error");
    }

    let separado = frase.split(";");

    for (let i = 0; i < separado.length; i++) {
        const element = separado[i];
        const indice = `#p${i+1}`;
        exibirNaTela(indice, element);
        console.log(element);
    }
}

function limpar() {
    document.getElementById('text').textContent = '';
}