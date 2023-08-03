import { Converter } from "../helpers/converter.js";
import { HtmlPageGetter } from "../models/HtmlPageGetter.js";
import { HtmlProductGetter } from "../models/HtmlProductGetter.js";
import { HtmlProductsPage } from "../models/HtmlProductsPage.js";
import { ProductsDatabase } from "../models/ProductsDatabase.js";
import { LoadPage } from "../view/LoadPage.js";
import { MenuProducts } from "../view/menuProducts.js";

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
            ${this.htmlProductsPage.getIndice("Indice")}
                ${this.htmlProduct.getProduct()}
            ${this.htmlProduct.getSectionEnd()}
        `);
    }

    public productsPage (products : ProductsDatabase, sectionName : string) : void {
        const innerHtml = this.htmlProductsPage.createManyProducts(products.getProducts());
        const html = this.htmlProductsPage.getSection(innerHtml, sectionName);
        this.loadPage.refresh(html);
    }
}