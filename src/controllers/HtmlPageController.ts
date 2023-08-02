import { HtmlPageGetter } from "../models/HtmlPageGetter.js";
import { HtmlProductGetter } from "../models/HtmlProductGetter.js";
import { htmlAllProductsGetter } from "../models/htmlAllProductsGetter.js";
import { LoadPage } from "../view/LoadPage.js";

export class HtmlPageController {
    private htmlModel = new HtmlPageGetter();
    private htmlProduct = new HtmlProductGetter();
    private loadPage = new LoadPage();
    private htmlProducts = new htmlAllProductsGetter();

    public defaultLoad () : void {
        const html = `
            ${this.htmlModel.getWinterCollection()}
            ${this.htmlModel.getHotProducts()}
            ${this.htmlModel.getCategories()}
            ${this.htmlModel.getRecent()}
        `;
        this.loadPage.refresh(html);
    }

    public productLoad () : void {
        this.loadPage.refresh(`
        ${this.htmlProduct.getSectionStart()}
            ${this.htmlProducts.getIndice()}
                ${this.htmlProduct.getProduct()}
            ${this.htmlProduct.getSectionEnd()}
        `);
    }

    public allProductsLoad () : void {
        this.loadPage.refresh(`
            ${this.htmlProducts.getSStart()}
                ${this.htmlProducts.getIndice()}
                ${this.htmlProducts.getPArticle()}
                ${this.htmlProducts.getPArticle()}
                ${this.htmlProducts.getBArticle()}
                ${this.htmlProducts.getBArticle()}
            ${this.htmlProducts.getSEnd()}
        `)
    }
}