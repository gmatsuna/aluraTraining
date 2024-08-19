let total = 0;

function adicionar() {
    var produto = document.getElementById('produto').value;
    var qtd = document.getElementById('qtd').value;

    var productName = produto.split(' - ')[0];
    var productValue = produto.split('$')[1];

    var itemSum = qtd*productValue;

    var itemList = document.getElementById('container-list-products');
    itemList.innerHTML = itemList.innerHTML + `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${qtd}x</span> ${productName} <span class="texto-azul">R$${itemSum},00</span>
        </section>
    `;


    total += itemSum;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `Total: R$${total},00`;



    

    console.log(itemSum);
}