import { HtmlPageGetter } from "../models/HtmlPageGetter.js";
import { HtmlProductGetter } from "../models/HtmlProductGetter.js";
import { HtmlProductsPage } from "../models/HtmlProductsPage.js";
import { htmlAllProductsGetter } from "../models/htmlAllProductsGetter.js";
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
            ${this.htmlProductsPage.getIndice()}
                ${this.htmlProduct.getProduct()}
            ${this.htmlProduct.getSectionEnd()}
        `);
    }

    public productsPage () : void {
        
        const product = {
            titulo : "Produto",
            preco : 12.23,
            avaliacao : 98,
            srcImg : "./assets/img/just test images/categorias1.webp"
        };
        const innerHtml = `${this.htmlProductsPage.getBasicProduct(product)}`;
        const html = this.htmlProductsPage.getSection(innerHtml);
        this.loadPage.refresh(html);
    }
}