import { ArrayProductData, ArrayProductDataComDesconto } from "../interface/ObjProducts.js";

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
        (product : ArrayProductData) => `
            <article class="all_article">
                <img src="${product.srcImg}" alt="">
                <h2>${product.titulo}</h2>
                <h3>R$${product.preco}</h3>
                <div class="all_article-rating">
                    <span class="product__card-rating all_rating"></span>
                    <p class="all_rating-number">${product.avaliacao}</p>
                </div>
            </article>`;
    
    private promotionalProduct = 
        (data : ArrayProductDataComDesconto) => `
        <article class="all_article">
            <img src="${data.srcImg}" alt="">
            <h2>${data.titulo}</h2>
            <div class="all_article-oferta">
                <span class="all_oferta">${data.desconto}% off</span>
                <span class="all_oferta-help">oferta</span>
            </div>
            <h3>R$${data.preco}</h3>
            <span class="all_oferta-preco">R$${data.preco + (data.preco * (data.desconto / 100))}</span>
            <div class="all_article-rating">
                <span class="product__card-rating all_rating"></span>
                <p class="all_rating-number">${data.avaliacao}</p>
            </div>
        </article>`;

    public getBasicProduct (product : ArrayProductData) : string {
        return this.basicProduct(product);
    };

    public getPromotionalProduct (product : ArrayProductDataComDesconto) : string {
        return this.promotionalProduct(product);
    };

    public getSection (innerHtml : string) : string {
        return this.productsSectionFather(this.productsDivFather(innerHtml), this.indice);
    }

    public getIndice () : string {
        return this.indice;
    }
}