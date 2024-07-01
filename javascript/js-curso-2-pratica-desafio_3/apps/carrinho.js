let totalGeral = 0;
limpar();

function adicionar() {

//Recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    // verifica quantidade - nao pode ser zero ou negativo
    if (quantidade < 1 || produto == '') {
        alert(`Quantidade nao pode ser menor que 1 e pelo menos 1 produto deve ser selecionado`);
    } else {
        let nomeProduto = produto.split(' - ')[0];
        let valorUnitario = produto.split('$')[1];

    //Calcular o preco, o nosso subtotal

        let precoItem = quantidade * valorUnitario;

    //Adicionar no carrinho
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${precoItem},00</span>
            </section>
            `;

    //Atualizar o valor total
        totalGeral += precoItem;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
    }
}

// Reset
function limpar() {
    let totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0.00';
    document.getElementById('quantidade').textContent = '';
}