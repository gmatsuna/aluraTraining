function splitNumber() {
    let str = document.getElementById('str').value;
    let arr = str.split(',');
    let len = arr.length;

    arr.forEach(element => {
        let itemList = document.getElementById('result');
        itemList.innerHTML = itemList.innerHTML + `<li> ${element}</li>`;
        console.log(element);
    });

    document.getElementById('result').classList.remove('hide');
}

function reset() {
    document.getElementById('str').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').classList.add('hide');
};