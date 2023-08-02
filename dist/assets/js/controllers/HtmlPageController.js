import { HtmlPageGetter } from "../models/HtmlPageGetter.js";
import { HtmlProductGetter } from "../models/HtmlProductGetter.js";
import { HtmlProductsPage } from "../models/HtmlProductsPage.js";
import { LoadPage } from "../view/LoadPage.js";
export class HtmlPageController {
    constructor() {
        this.htmlModel = new HtmlPageGetter();
        this.htmlProduct = new HtmlProductGetter();
        this.htmlProductsPage = new HtmlProductsPage();
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
            ${this.htmlProductsPage.getIndice()}
                ${this.htmlProduct.getProduct()}
            ${this.htmlProduct.getSectionEnd()}
        `);
    }
    productsPage() {
        const product = {
            titulo: "Produto",
            preco: 12.23,
            avaliacao: 98,
            srcImg: "./assets/img/just test images/categorias1.webp"
        };
        const innerHtml = `${this.htmlProductsPage.getBasicProduct(product)}`;
        const html = this.htmlProductsPage.getSection(innerHtml);
        this.loadPage.refresh(html);
    }
}
