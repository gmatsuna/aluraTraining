class MainBody extends HTMLElement {
    connectedCallback () {
        let h1Text = `Split de numeros separados por virgula.`;
        let h3Text = `Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.`;
        this.innerHTML = `
            <h1>${h1Text}</h1>
            <h3>${h3Text}</h3>
            <form >
                <label for="numeros">
                    <span>Numeros:</span>
                    <input type="text" name="numeros" id="numeros" >
                </label>
                <section>
                    <button onclick="separar()" type="button" class="botao-form botao-adicionar">Enviar</button>
                    <button onclick="limpar()" type="button" class="botao-form botao-limparr">Limpar</button>
                </section>
            </form>
            <br> 
        `;
    }
}

customElements.define('split-numero-main-body', MainBody);

function separar() {
    let numeros = document.getElementById('numeros').value;
    let numerosSeparados = numeros.split(',');
    
    if (numerosSeparados.length > 1) {
        for (let i = 0; i < numerosSeparados.length; i++) {
            const element = numerosSeparados[i];
            let print = document.getElementById('result');
            print.innerHTML = print.innerHTML + `${element}<br>`;
            console.log(element);
        }
    } else {
        alert('Insira pelo menos 2 números separados por vírgula.');
        document.getElementById('numeros').value = '';
        document.getElementById('result').innerHTML = '';
    }

}

function limpar() {
    document.getElementById('numeros').value = '';
    document.getElementById('result').innerHTML = '';
}