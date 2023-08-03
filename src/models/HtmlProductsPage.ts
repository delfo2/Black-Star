import { MathHelp } from "../helpers/functionHelpers.js";
import { ArrayProductData } from "../interface/ObjProducts.js";

export class HtmlProductsPage {
    private productsSectionFather = (content : string, btnIndice : string ) =>
        `<section class="all">
            ${btnIndice}
            ${content}
        </section>`;
    
    private productsDivFather = (content : string) => `<div class="all_content">${content}</div>`;

    private indice = (name : string) => `
        <div class="all_indice">
            <h2>${this.indiceChecker(name)}</h2>
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
        (data : ArrayProductData) => `
        <article class="all_article">
            <img src="${data.srcImg}" alt="">
            <h2>${data.titulo}</h2>
            <div class="all_article-oferta">
                <span class="all_oferta">${data.desconto}% off</span>
                <span class="all_oferta-help">oferta</span>
            </div>
            <h3>R$${MathHelp.discount(data.preco, data.desconto ?? 0)}</h3>
            <span class="all_oferta-preco">R$${data.preco}</span>
            <div class="all_article-rating">
                <span class="product__card-rating all_rating"></span>
                <p class="all_rating-number">${data.avaliacao}</p>
            </div>
        </article>`;

    public getBasicProduct (product : ArrayProductData) : string {
        return this.basicProduct(product);
    };

    public getPromotionalProduct (product : ArrayProductData) : string {
        return this.promotionalProduct(product);
    };

    public getSection (innerHtml : string, name : string) : string {
        return this.productsSectionFather(this.productsDivFather(innerHtml), this.indice(name));
    }

    public getIndice (name : string) : string {
        return this.indice(name);
    }

    public createManyProducts (array : Array<ArrayProductData>) : string {
        let result = ``;
        array.forEach(item => result += this.createOneProduct(item));

        return result;
    }

    private createOneProduct (arr : ArrayProductData) : string {
        let result = ``;
        if(!arr.desconto) {
            result += this.getBasicProduct(arr);
        } else {
            result += this.getPromotionalProduct(arr);
        }
        return result;
    }

    private indiceChecker (ind : string) : string {
        return ind.replace(/\s/g,'') === '' || ind.toLowerCase().replace(/\s/g,'') === 'vermais' ? "Produtos" : ind;
    }
}