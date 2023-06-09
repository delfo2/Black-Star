export class HtmlProductGetter {
    private sectionStart = `
        <section class="product">`;
    private sectionEnd = `
            ${this.generateSubMenu(true, 'Detalhes')}
            ${this.generateSubMenu(true, 'Material')}
            ${this.generateSubMenu(true, 'Tamanhos')}
        </section>`;

    private product = `
        <article class="product__card">
            <div>
                <img src="./assets/img/just test images/categorias1.webp" alt="" class="product__card-img" data-img="productPage">
            </div>
            <h2 class="product__card-titulo" data-p="productPage">Roupa roupa roupa</h2>
            <div>
                <h3 class="product__card-price" data-h3="productPage">R$12,34</h3>
                <span class="product__card-rating"></span>
            </div>
            <div class="product__card-size">
                <div>
                    <p>Tamanho:</p>
                    <p>M</p>
                </div>
                <div>                    
                    ${this.generateButton('PP')}
                    ${this.generateButton('P')}
                    ${this.generateButton('M')}
                    ${this.generateButton('G')}
                    ${this.generateButton('GG')}
                </div>
            </div>
            <button class="link product__card-button" data-button="productPage">Adicionar Ao Carrinho</button>
            ${this.generateSubMenu(false, 'Detalhes')}
            ${this.generateSubMenu(false, 'Material')}
            ${this.generateSubMenu(false, 'Tamanhos')}    
        </article>`;

    public getSectionStart(): string {
        return this.sectionStart;
    }

    public getSectionEnd(): string {
        return this.sectionEnd;
    }

    public getProduct(): string {
        return this.product;
    }

    private generateSubMenu(isMobile: boolean, title: string): string {
        const cssClass = isMobile ? 'product__description' : 'product__description desktop';
        const subMenuText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam, tempora dolorum, officiis, architecto rem ut aliquam consequuntur nesciunt fuga est ipsa laboriosam. Eum optio nihil, earum vero perspiciatis sed.';

        return `
            <article class="${cssClass}">
                <button class="product__description-title" data-button="${title}">
                    <h4>${title} </h4>
                    <p>+</p>
                </button>
                <p class="product__description-text escondido">${subMenuText}</p>
            </article>`;
    }

    private generateButton(label: string): string {
        return `<button class="link" data-button="${label}">${label}</button>`;
    }
}