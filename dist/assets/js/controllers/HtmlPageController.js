import { HtmlPageGetter } from "../models/HtmlPageGetter.js";
import { HtmlProductGetter } from "../models/HtmlProductGetter.js";
import { HtmlProductsPage } from "../models/HtmlProductsPage.js";
import { LoadPage } from "../view/LoadPage.js";
export class HtmlPageController {
    constructor() {
        this.htmlModel = new HtmlPageGetter();
        this.htmlFullProduct = new HtmlProductGetter();
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
    fullProductLoad(product) {
        this.loadPage.refresh(this.htmlFullProduct.getFullProduct("", product));
    }
    productsPage(products, sectionName) {
        const innerHtml = this.htmlProductsPage.createManyProducts(products.getProducts());
        const html = this.htmlProductsPage.getSection(innerHtml, sectionName);
        this.loadPage.refresh(html);
    }
}
