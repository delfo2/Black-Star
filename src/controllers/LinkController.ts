import { ProductsDatabase } from "../models/ProductsDatabase.js";
import { HtmlPageController } from "./HtmlPageController.js";

export class LinkController {

    public linkHandle (element : Element, pageController : HtmlPageController, products : ProductsDatabase) : void {
        if(!this.validation(element) 
            && !this.parentNodeValidation(element)) {
            return;
        }
        pageController.productsPage(products, element.textContent ?? "Indice");
    }

    private validation (el : Element) : boolean {
        return el.nodeName.toUpperCase() === "A" && el instanceof HTMLAnchorElement;
    }

    private parentNodeValidation (el: Element) : boolean {
        const father = el.parentNode;
        if(el instanceof HTMLAnchorElement) {
            return false;
        }
        return this.validation(father as Element) || 
            father?.nodeName.toLowerCase() === "figure"
                && this.validation(father.parentNode as Element);
    }
}