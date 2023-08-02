import { HtmlPageGetter } from "../models/HtmlPageGetter.js";
import { HtmlProductGetter } from "../models/HtmlProductGetter.js";
import { htmlAllProductsGetter } from "../models/htmlAllProductsGetter.js";
import { HtmlProductsPage } from "../models/HtmlProductsPage.js";
import { LoadPage } from "../view/LoadPage.js";
export class HtmlPageController {
    constructor() {
        this.htmlModel = new HtmlPageGetter();
        this.htmlProduct = new HtmlProductGetter();
        this.htmlProductsPage = new HtmlProductsPage();
        this.loadPage = new LoadPage();
        this.htmlProducts = new htmlAllProductsGetter();
    }
    defaultLoad() {
        const html = `
            ${this.htmlModel.getWinterCollection()}
            ${this.htmlModel.getHotProducts()}
            ${this.htmlModel.getCategories()}
            ${this.htmlModel.getRecent()}
        `;
        this.loadPage.refresh(html);
    }
    productLoad() {
        this.loadPage.refresh(`
        ${this.htmlProduct.getSectionStart()}
            ${this.htmlProducts.getIndice()}
                ${this.htmlProduct.getProduct()}
            ${this.htmlProduct.getSectionEnd()}
        `);
    }
    allProductsLoad() {
        this.loadPage.refresh(`
            ${this.htmlProducts.getSStart()}
                ${this.htmlProducts.getIndice()}
                ${this.htmlProducts.getPArticle()}
                ${this.htmlProducts.getPArticle()}
                ${this.htmlProducts.getBArticle()}
                ${this.htmlProducts.getBArticle()}
            ${this.htmlProducts.getSEnd()}
        `);
    }
}
