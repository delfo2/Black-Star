export class HtmlProductGetter {
    constructor() {
        this.sectionStart = (name) => `
        <section class="product"> ${this.indice(name)}`;
        this.sectionEnd = `
            ${this.generateSubMenu(true, 'Detalhes')}
            ${this.generateSubMenu(true, 'Material')}
            ${this.generateSubMenu(true, 'Tamanhos')}
        </section>`;
        this.indice = (name) => `
        <div class="all_indice">
            <h2>${this.indiceChecker(name)}</h2>
            <div class="all_indice-btn">
                <button data-btn="voltar_home"></button>
                <button></button>
                <button></button>
            </div>
        </div>`;
        this.product = (data) => `
        <article class="product__card">
            <div>
                <img src="${data.srcImg}" alt="" class="product__card-img" data-img="productPage">
            </div>
            <h2 class="product__card-titulo" data-p="productPage">${data.titulo}</h2>
            <div>
                <h3 class="product__card-price" data-h3="productPage">R$${data.preco}</h3>
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
    }
    getFullProduct(name, product) {
        return this.sectionStart(name) + this.product(product) + this.sectionEnd;
    }
    generateSubMenu(isMobile, title) {
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
    generateButton(label) {
        return `<button class="link" data-button="${label}">${label}</button>`;
    }
    indiceChecker(ind) {
        return ind.replace(/\s/g, '') === '' || ind.toLowerCase().replace(/\s/g, '') === 'vermais' ? "Produtos" : ind;
    }
}
