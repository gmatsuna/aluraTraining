function enviar() {
    var str1 = document.getElementById('str1');
    var str2 = document.getElementById('str2');

    var result1 = document.getElementById('result1');
    result1.classList.remove('result-limpo');
    result1.textContent = str1.value;
    var result2 = document.getElementById('result2');
    result2.classList.remove('result-limpo');
    result2.textContent = str2.value;
}

function limpar() {
    document.getElementById('result1').classList.add('result-limpo');
    document.getElementById('result2').classList.add('result-limpo');
    document.getElementById('result1').innerHTML = "";
    document.getElementById('result2').innerHTML = "";
    document.getElementById('str1').innerHTML = "";
    document.getElementById('str2').innerHTML = "";
}