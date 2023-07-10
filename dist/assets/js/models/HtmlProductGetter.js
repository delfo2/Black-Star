export class HtmlProductGetter {
    constructor() {
        this.sectionStart = `
        <section class="product">`;
        this.sectionEnd = `
        ${this.descriptionGenerator(false)}
        </section>`;
        this.product = `
        <article class="product__card">
            <div>
                <img src="./assets/img/just test images/categorias1.webp" alt="" class="product__card-img">
            </div>
            <h2 class="product__card-titulo">Roupa roupa roupa</h2>
            <div>
                <h3 class="product__card-price">R$12,34</h3>
                <span class="product__card-rating"></span>
            </div>
            <div class="product__card-size">
                <div>
                    <p>Tamanho:</p>
                    <p>M</p>
                </div>
                <div>
                    <button class="link" data-button="PP">PP</button>
                    <button class="link" data-button="P">P</button>
                    <button class="link" data-button="M">M</button>
                    <button class="link" data-button="G">G</button>
                    <button class="link" data-button="GG">GG</button>
                </div>
            </div>
            <button class="link product__card-button">Adicionar Ao Carrinho</button>
            ${this.descriptionGenerator(true)}
        </article>`;
    }
    getSectionStart() {
        const tempSection = this.sectionStart;
        return tempSection;
    }
    getSectionEnd() {
        const tempSection = this.sectionEnd;
        return tempSection;
    }
    getProduct() {
        const tempProduct = this.product;
        return tempProduct;
    }
    descriptionGenerator(isMobile) {
        return isMobile ?
            this.descriptionDefault('product__description')
            : this.descriptionDefault('product__description desktop');
    }
    descriptionDefault(cssClass) {
        return `
            <article class="${cssClass}">
                <button class="product__description-title" data-button="description">
                    <h4>Detalhes</h4>
                    <p>+</p>
                </button>
                <p class="product__description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam, tempora dolorum, officiis, architecto rem ut aliquam consequuntur nesciunt fuga est ipsa laboriosam. Eum optio nihil, earum vero perspiciatis sed.</p>
            </article>`;
    }
}
