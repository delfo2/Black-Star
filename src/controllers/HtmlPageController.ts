import { HtmlPageGetter } from "../models/HtmlPageGetter.js";
import { HtmlProductGetter } from "../models/HtmlProductGetter.js";
import { HtmlProductsPage } from "../models/HtmlProductsPage.js";
import { LoadPage } from "../view/LoadPage.js";

export class HtmlPageController {
    private htmlModel = new HtmlPageGetter();
    private htmlProduct = new HtmlProductGetter();
    private htmlProductsPage = new HtmlProductsPage();
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

    public productsPage () : void {
        const innerHtml = `${
            this.htmlProductsPage.getBasicProduct(
                "Produto",
                12.23,
                98,
                "./assets/img/just test images/categorias1.webp"
            )
        }`;
        const html = this.htmlProductsPage.getSection(innerHtml);
        this.loadPage.refresh(html);
    }
}