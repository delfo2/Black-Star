export class HtmlProductsPage {
    private productsSectionFather = (content : string, btnIndice : string ) =>
        `<section class="all">
            ${btnIndice}
            ${content}
        </section>`;
    
    private productsDivFather = (content : string) => `<div class="all_content">${content}</div>`;

    private indice = `
        <div class="all_indice">
            <h2>índice</h2>
            <div class="all_indice-btn">
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>`;
    
    private basicProduct = 
        (titulo : string, preco : number, avaliacao : number, srcImg : string) => `
            <article class="all_article">
                <img src="${srcImg}" alt="">
                <h2>${titulo}</h2>
                <h3>R$${preco}</h3>
                <div class="all_article-rating">
                    <span class="product__card-rating all_rating"></span>
                    <p class="all_rating-number">${avaliacao}</p>
                </div>
            </article>`;
    
    private promotionalProduct = 
        (titulo : string, preco : number, desconto : number, avaliacao : number, srcImg : string) => `
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

    public getBasicProduct (titulo : string, preco : number, avaliacao : number, srcImg : string) : string {
        return this.basicProduct(titulo, preco, avaliacao, srcImg);
    };

    public getPromotionalProduct (titulo : string, preco : number, desconto : number, avaliacao : number, srcImg : string) : string {
        return this.promotionalProduct(titulo, preco, desconto, avaliacao, srcImg);
    };

    public getSection (innerHtml : string) : string {
        return this.productsSectionFather(this.productsDivFather(innerHtml), this.indice);
    }

    public getIndice () : string {
        return this.indice;
    }
}