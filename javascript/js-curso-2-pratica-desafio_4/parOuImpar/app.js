function checkNumber() {
    let num = document.getElementById('num').value;
    let result = num % 2 === 0? 'Par' : 'Impar';

    document.getElementById('result').innerHTML = result;
}