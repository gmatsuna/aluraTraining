function splitText() {
    let str = document.getElementById('str').value;
    let str1 = str.split(";")[0];
    let str2 = str.split(";")[1];

    document.getElementById('result-str1').innerHTML = str1;
    document.getElementById('result-str2').innerHTML = str2;

    document.getElementById('result').classList.remove('hide');
}

function reset() {
    document.getElementById('result').classList.add('hide');
    document.getElementById('result-str1').innerHTML = "";
    document.getElementById('result-str2').innerHTML = "";
    document.getElementById('str').value = "";
}