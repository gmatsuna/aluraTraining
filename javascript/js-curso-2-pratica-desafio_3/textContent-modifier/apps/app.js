function changeTextContent() {
    let strInicial = document.getElementById('strInicial').textContent;
    let str = document.getElementById('str-input').value;

    document.getElementById('strInicial').textContent = str;
    document.getElementById('str-input').value = '';
    document.getElementById('result-text').innerHTML = strInicial;

    document.getElementById('result').classList.remove('hide');

    console.log(strInicial);
}