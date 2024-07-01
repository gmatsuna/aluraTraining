class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="index.html">Pagina Principal.</a>
            </header>
        `;
    }
}

customElements.define('main-header', Header);
