function verificar () {
    let re = /[^A-Za-z0-9]/g;
    let str = document.getElementById('str-input').value;
    let lower = str.toLowerCase(str).replace(re, '');
    let len = lower.length;

    if (str === '') {
        document.getElementById('texto__resultado').innerHTML = `ERRO: Voce deve digitar algum texto na caixa acima.`;
        alert(`ATENCAO!!! Um texto deve ser inserido na caixa abaixo.`);
    }

    for (let i = 0; i < len/2; i++) {
        if (lower[i] !== lower[len -1 -i]) {
            document.getElementById('texto__resultado').innerHTML = `NÃO, o texto inserido não é um Palíndromo!`;
            return false;
        }
        document.getElementById('texto__resultado').innerHTML = `SIM, o texto inserido é um Palíndromo!`;
    }
   
}

function metodo2() {
    let re = /[\W_]/g;
    let str = document.getElementById('str-input').value;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');

    if (str === '') {
        document.getElementById('texto__resultado').innerHTML = `ERRO: Voce deve digitar algum texto na caixa acima.`;
        alert(`ATENCAO!!! Um texto deve ser inserido na caixa abaixo.`);
    } else if (lowRegStr === reverseStr) {
        document.getElementById('texto__resultado').innerHTML = `SIM, o texto inserido é um Palíndromo!`;
    } else {
        document.getElementById('texto__resultado').innerHTML = `NÃO, o texto inserido não é um Palíndromo!`;
    }
}

function reiniciar() {
    document.getElementById('str-input').value = "";
    document.getElementById('texto__resultado').innerHTML = `
        <h1 id="texto__resultado">Resultado...</h1>
    `;
}