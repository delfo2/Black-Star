import { HtmlPageGetter } from "../models/HtmlPageGetter.js";
import { LoadPage } from "../view/LoadPage.js";

export class HtmlPageController {
    private htmlModel = new HtmlPageGetter();
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
}