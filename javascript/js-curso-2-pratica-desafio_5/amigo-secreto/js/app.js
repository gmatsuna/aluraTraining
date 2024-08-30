let arrayAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value;
    let listaAmigos = document.getElementById("lista-amigos");

    arrayAmigos.push(nomeAmigo);

    if (listaAmigos.textContent === "") {
        listaAmigos.textContent = nomeAmigo;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ", " + nomeAmigo;
    }

    document.getElementById("nome-amigo").value = "";
}

function sortear() {
    embaralha(arrayAmigos);
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}