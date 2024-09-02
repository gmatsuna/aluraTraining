function calcular() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let op = document.getElementById('operation').value;

    if (op === 'soma') {
        soma(num1, num2);
    } else if (op === 'subtracao') {
        sub(num1, num2);
    } else if (op === 'multiplicacao') {
        mult(num1, num2);
    } else {
        div(num1, num2);
    }
}

function soma(a,b) {
    document.getElementById('result').textContent = `
        Resultado da Soma: ${a + b}
    `;
}

function sub(a,b) {
    document.getElementById('result').textContent = `
        Resultado da Subtração: ${a - b}
    `;
}

function mult(a,b) {
    document.getElementById('result').textContent = `
        Resultado da Multiplicação: ${a * b}
    `
}

function div(a,b) {
    document.getElementById('result').textContent = `
        Resultado da Divisão: ${a / b}
    `
}