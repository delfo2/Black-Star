import { MathHelp } from "../helpers/functionHelpers.js";
export class HtmlProductsPage {
    constructor() {
        this.productsSectionFather = (content, btnIndice) => `<section class="all">
            ${btnIndice}
            ${content}
        </section>`;
        this.productsDivFather = (content) => `<div class="all_content">${content}</div>`;
        this.indice = (name) => `
        <div class="all_indice">
            <h2>${this.indiceChecker(name)}</h2>
            <div class="all_indice-btn">
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>`;
        this.basicProduct = (product) => `
            <article class="all_article">
                <img src="${product.srcImg}" alt="">
                <h2>${product.titulo}</h2>
                <h3>R$${product.preco}</h3>
                <div class="all_article-rating">
                    <span class="product__card-rating all_rating"></span>
                    <p class="all_rating-number">${product.avaliacao}</p>
                </div>
            </article>`;
        this.promotionalProduct = (data) => {
            var _a;
            return `
        <article class="all_article">
            <img src="${data.srcImg}" alt="">
            <h2>${data.titulo}</h2>
            <div class="all_article-oferta">
                <span class="all_oferta">${data.desconto}% off</span>
                <span class="all_oferta-help">oferta</span>
            </div>
            <h3>R$${MathHelp.discount(data.preco, (_a = data.desconto) !== null && _a !== void 0 ? _a : 0)}</h3>
            <span class="all_oferta-preco">R$${data.preco}</span>
            <div class="all_article-rating">
                <span class="product__card-rating all_rating"></span>
                <p class="all_rating-number">${data.avaliacao}</p>
            </div>
        </article>`;
        };
    }
    getBasicProduct(product) {
        return this.basicProduct(product);
    }
    ;
    getPromotionalProduct(product) {
        return this.promotionalProduct(product);
    }
    ;
    getSection(innerHtml, name) {
        return this.productsSectionFather(this.productsDivFather(innerHtml), this.indice(name));
    }
    getIndice(name) {
        return this.indice(name);
    }
    createManyProducts(array) {
        let result = ``;
        array.forEach(item => result += this.createOneProduct(item));
        return result;
    }
    createOneProduct(arr) {
        let result = ``;
        if (!arr.desconto) {
            result += this.getBasicProduct(arr);
        }
        else {
            result += this.getPromotionalProduct(arr);
        }
        return result;
    }
    indiceChecker(ind) {
        return ind.replace(/\s/g, '') === '' || ind.toLowerCase().replace(/\s/g, '') === 'vermais' ? "Produtos" : ind;
    }
}
