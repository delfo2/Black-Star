import { ProductsDatabase } from "../models/ProductsDatabase.js";
import { HtmlPageController } from "./HtmlPageController.js";

export class FullProductPageController {
    private htmlPageController : HtmlPageController;
    private productDatabase : ProductsDatabase;

    constructor (pageController : HtmlPageController, productDatabase : ProductsDatabase) {
        this.htmlPageController = pageController;
        this.productDatabase = productDatabase;
    }

    public checkEvent (el : Element) : void {
        if (el.parentNode instanceof HTMLAnchorElement && el.parentNode.dataset.produto === "link") {
            this.handleEvent(el.parentNode);
        } else if (el instanceof HTMLAnchorElement && el.dataset.produto === "link") {
            this.handleEvent(el);
        }
    }

    private handleEvent(el: HTMLAnchorElement) {
        const index = parseInt(el.dataset.idproduto ?? "0");
        const product = this.productDatabase.getOneProduct(index);
        this.htmlPageController.fullProductLoad(product);
    }
}