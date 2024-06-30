class HeaderBody extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1 class="h1__header">Organizador de <span class="h1__header-emphasis">Numero</span></h1>
        `;
    }
}

customElements.define('header-body', HeaderBody);

class MainBody extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container">
                <div class="container__item">

                    <h1 class='h1__body' >Escreva os numeros a serem ordenados:</h1>
                    
                    <div class="container__text">
                        <p class="container__text-text">Primeiro numero: </p>
                    </div>
                    <div class="container__input">
                        <label for="num1">
                            <input class="input" type="text" name="num1" id="num1">
                        </label>
                    </div>

                    <div class="container__text">
                        <p class="container__text-text">Segundo numero: </p>
                    </div>
                    <div class="container__input">
                        <label for="num2">
                            <input class="input" type="text" name="num2" id="num2">
                        </label>
                    </div>
                    
                    <div class="container__text">
                        <p class="container__text-text">Terceiro numero: </p>
                    </div>
                    <div class="container__input">
                        <label for="num3">
                            <input class="input" type="text" name="num3" id="num3">
                        </label>
                    </div>

                </div>
            </div>
        `;
    }
}

customElements.define('main-body', MainBody);