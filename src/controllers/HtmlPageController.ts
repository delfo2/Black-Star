import { Converter } from "../helpers/converter.js";
import { ArrayProductData } from "../interface/ObjProducts.js";
import { HtmlPageGetter } from "../models/HtmlPageGetter.js";
import { HtmlProductGetter } from "../models/HtmlProductGetter.js";
import { HtmlProductsPage } from "../models/HtmlProductsPage.js";
import { ProductsDatabase } from "../models/ProductsDatabase.js";
import { LoadPage } from "../view/LoadPage.js";
import { MenuProducts } from "../view/menuProducts.js";

export class HtmlPageController {
    private htmlModel = new HtmlPageGetter();
    private htmlFullProduct = new HtmlProductGetter();
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

    public fullProductLoad (product : ArrayProductData) : void {
        this.loadPage.refresh(this.htmlFullProduct.getFullProduct("", product))
    }

    public productsPage (products : ProductsDatabase, sectionName : string) : void {
        const innerHtml = this.htmlProductsPage.createManyProducts(products.getProducts());
        const html = this.htmlProductsPage.getSection(innerHtml, sectionName);
        this.loadPage.refresh(html);
    }
}