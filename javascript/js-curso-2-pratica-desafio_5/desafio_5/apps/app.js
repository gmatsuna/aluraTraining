let friendsList = [];

function add() {
    let name = document.getElementById('addFriend').value;
    let includedList = document.getElementById('friendsList');
    friendsList.push(name);
    if (name === '') {
        alert('Please enter a name.');
        return;
    } else {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(name));
        let btn = document.createElement('button');
        btn.innerHTML = 'Remove';
        btn.addEventListener('click', function() {
            includedList.removeChild(li);
            friendsList.splice(friendsList.indexOf(name), 1);
        })
        includedList.appendChild(li).appendChild(btn);
        document.getElementById('addFriend').value = '';
    }
}

function sort() {
    embaralha(friendsList);
    let sorteio = document.getElementById('sorteado');

    for (let i = 0; i < friendsList.length; i++) {

        if (i === friendsList.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + friendsList[i] + '-->' + friendsList[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + friendsList[i] + '-->' + friendsList[i+1] + '<br>';
        }
    }


    console.log(friendsList);
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reset() {
    friendsList = [];
    document.getElementById('friendsList').innerHTML = '';
    document.getElementById('sorteado').innerHTML = '';
}