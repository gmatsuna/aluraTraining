function verificar () {
    let re = /[^A-Za-z0-9]/g;
    let str = document.getElementById('str-input').value;
    let lower = str.toLowerCase(str).replace(re, '');
    let len = lower.length;
    alert(`O inverso da palavra e ${lower}`);

    for (let i = 0; i < len/2; i++) {
        if (lower[i] !== lower[len -1 -i]) {
            console.log('Não, não é um palindrommo: ');
            return false;
        }
        console.log('Sim, e um palindrommo: ')
        
    }
   
}

function metodo2() {
    let re = /[\W_]/g;
    let str = document.getElementById('str-input').value;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');

    alert(`O inverso da palavra e ${reverseStr}`);

    if (lowRegStr === reverseStr) {
        console.log('É um palindromo: ');
    } else {
        console.log('Não é um palindromo:  ');
    }
}