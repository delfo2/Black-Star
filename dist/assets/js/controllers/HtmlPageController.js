import { HtmlPageGetter } from "../models/HtmlPageGetter.js";
import { HtmlProductGetter } from "../models/HtmlProductGetter.js";
import { LoadPage } from "../view/LoadPage.js";
export class HtmlPageController {
    constructor() {
        this.htmlModel = new HtmlPageGetter();
        this.htmlProduct = new HtmlProductGetter();
        this.loadPage = new LoadPage();
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
                ${this.htmlProduct.getProduct()}
                ${this.htmlProduct.getDescription()}
            ${this.htmlProduct.getSectionEnd()}
        `);
    }
}
