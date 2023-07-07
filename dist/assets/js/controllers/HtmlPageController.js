import { HtmlPageGetter } from "../models/HtmlPageGetter.js";
import { LoadPage } from "../view/LoadPage.js";
export class HtmlPageController {
    constructor() {
        this.htmlModel = new HtmlPageGetter();
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
}
