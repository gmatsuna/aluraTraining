function converter() {
    let num = parseInt(document.getElementById('temperature').value);
    let resp = document.getElementById('result');

    if (document.getElementById('c2f').checked==true) 
        resp.innerHTML = `${num}°C = ${c2f(num).toFixed(2)}°F`;
    
    if (document.getElementById('f2c').checked==true)
        resp.innerHTML = `${num}°F = ${f2c(num).toFixed(2)}°C`;
}

function c2f(num) {
    return (1.8*num + 32);
}

function f2c(num) {
    return ( (num-32)*5/9 );
}