// Header contendo o titulo da aplicacao

class HeaderBody extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1 class="h1__header">Organizador de <span class="h1__header-emphasis">Números</span></h1>
        `;
    }
}

customElements.define('header-body', HeaderBody);


// Body contendo os inputs, botao e resultado

class MainBody extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            
        `;
    }
}

customElements.define('main-body', MainBody);


// Aplicacao para recuperar e organizar 3 numeros

function ordenarNumeros() {
    // Recuperar os valores
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);

    let numList = [num1, num2, num3];

    // Verificar se todos os valores sao numeros
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, insira valores numéricos.");
        return;
    }

    // Organizar os valores
    let finalList = numList.sort(compararNumeros);

    // Imprimir resultados
    document.getElementsByClassName('container__result')[0].innerHTML = `
        <h1 class="text__result"><spa class="text__result-emphasis">Números em ordem crescente: </spa>${finalList}.</h1>
    `;
    console.log(numList);

    alteraBotoes('btn1', 'btn2');
}

function compararNumeros(a, b) {
    return a - b;
}

function reiniciar() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('num3').value = "";

    document.getElementsByClassName('container__result')[0].innerHTML = `
        <h1 class="text__result">Aguardando os<spa class="text__result-emphasis"> números </spa>a serem organizados...</h1>
    `;

    alteraBotoes('btn2', 'btn1');
}

function alteraBotoes(btn1, btn2) {
    let botoes = [btn1, btn2];

    botoes.forEach(element => {
        let botao = document.getElementById(element);
        if (botao.classList.contains('button')) {
            botao.classList.replace('button', 'button-desabled');
        } else {
            botao.classList.replace('button-desabled', 'button');
        }
    });
}