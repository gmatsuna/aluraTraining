function calculateFactorial() {
    let num = parseInt(document.getElementById('str').value);
    if (isNaN(num) || num < 0 || num > 100) {
        alert('Invalid input. Please enter a positive integer between 0 and 100.');
        return;
    } else {
        let result = Fatorial(num);
        document.getElementById('result').innerHTML = 'The factorial of '+ num +' is '+ result;
    }

}

function Fatorial(num) {
    if (num === 0 || num ===1)
        return 1;
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}