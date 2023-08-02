export class HtmlProductsPage {
    constructor() {
        this.productsSectionFather = (content, btnIndice) => `<section class="all">
            ${btnIndice}
            ${content}
        </section>`;
        this.productsDivFather = (content) => `<div class="all_content">${content}</div>`;
        this.indice = `
        <div class="all_indice">
            <h2>índice</h2>
            <div class="all_indice-btn">
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>`;
        this.basicProduct = (titulo, preco, avaliacao, srcImg) => `
            <article class="all_article">
                <img src="${srcImg}" alt="">
                <h2>${titulo}</h2>
                <h3>R$${preco}</h3>
                <div class="all_article-rating">
                    <span class="product__card-rating all_rating"></span>
                    <p class="all_rating-number">${avaliacao}</p>
                </div>
            </article>`;
        this.promotionalProduct = (titulo, preco, desconto, avaliacao, srcImg) => `
        <article class="all_article">
            <img src="${srcImg}" alt="">
            <h2>${titulo}</h2>
            <div class="all_article-oferta">
                <span class="all_oferta">${desconto}% off</span>
                <span class="all_oferta-help">oferta</span>
            </div>
            <h3>R$${preco}</h3>
            <span class="all_oferta-preco">R$${preco + (preco * (desconto / 100))}</span>
            <div class="all_article-rating">
                <span class="product__card-rating all_rating"></span>
                <p class="all_rating-number">${avaliacao}</p>
            </div>
        </article>`;
    }
    getBasicProduct(titulo, preco, avaliacao, srcImg) {
        return this.basicProduct(titulo, preco, avaliacao, srcImg);
    }
    ;
    getPromotionalProduct(titulo, preco, desconto, avaliacao, srcImg) {
        return this.promotionalProduct(titulo, preco, desconto, avaliacao, srcImg);
    }
    ;
    getSection(innerHtml) {
        return this.productsSectionFather(this.productsDivFather(innerHtml), this.indice);
    }
}
