function somar() {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);

    document.getElementById('result').innerHTML = `A soma de ${num1} com ${num2} e igual a ${num1 + num2}.`;
    document.getElementById('result').classList.remove('hide');

    console.log(`A soma de ${num1} com ${num2} e igual a ${num1 + num2}`);
}

function limpar() {
    document.getElementById('result').classList.add('hide');
}