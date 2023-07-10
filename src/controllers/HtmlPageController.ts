import { HtmlPageGetter } from "../models/HtmlPageGetter.js";
import { HtmlProductGetter } from "../models/HtmlProductGetter.js";
import { LoadPage } from "../view/LoadPage.js";

export class HtmlPageController {
    private htmlModel = new HtmlPageGetter();
    private htmlProduct = new HtmlProductGetter();
    private loadPage = new LoadPage();

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
                ${this.htmlProduct.getProduct()}
            ${this.htmlProduct.getSectionEnd()}
        `);
    }
}