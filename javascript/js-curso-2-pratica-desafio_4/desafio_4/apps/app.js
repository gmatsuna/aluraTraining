function comprar() {
    let type = document.getElementById('select-input').value;
    let qtd = document.getElementById('qtd-input').value;

    if (type == "normal") {
        compraNormal(qtd);
    } else if (type == "preferencial") {
        compraPref(qtd);
    } else {
        compraVip(qtd);
    }
}

function compraNormal(qtd) {
    let qtdAvailable = parseInt(document.getElementById('qtd-normal').textContent);
    if (qtd > qtdAvailable) {
        alert("Quantidade indisponível em estoque!");
        return;
    } else {
        qtdAvailable -= qtd;
        document.getElementById('qtd-normal').textContent = qtdAvailable;
        document.getElementById('qtd-input').value = "";
    }
}

function compraPref(qtd) {
    let qtdAvailable = parseInt(document.getElementById('qtd-pref').textContent);
    if (qtd > qtdAvailable) {
        alert("Quantidade indisponível em estoque!");
        return;
    } else {
    qtdAvailable -= qtd;
    document.getElementById('qtd-pref').textContent = qtdAvailable;
    document.getElementById('qtd-input').value = "";
    }
}

function compraVip(qtd) {
    let qtdAvailable = parseInt(document.getElementById('qtd-vip').textContent);
    if (qtd > qtdAvailable) {
        alert("Quantidade indisponível em estoque!");
        return;
    } else {
    qtdAvailable -= qtd;
    document.getElementById('qtd-vip').textContent = qtdAvailable;
    document.getElementById('qtd-input').value = "";
    }
}