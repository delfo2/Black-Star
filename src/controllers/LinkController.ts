import { ProductsDatabase } from "../models/ProductsDatabase.js";
import { HtmlPageController } from "./HtmlPageController.js";

export class LinkController {

    public linkHandle (element : Element, pageController : HtmlPageController, products : ProductsDatabase) : void {
        if(!this.validation(element) 
            && !this.parentNodeValidation(element)
                && !this.menuBtnPageValidation(element)) {
            return;
        }
        pageController.productsPage(products, element.textContent ?? "Indice");
    }

    private validation (el : Element) : boolean {
        let nodeName = el ? el.nodeName.toUpperCase() : "b";
        return nodeName === "A" && el instanceof HTMLAnchorElement;
    }

    private menuBtnPageValidation (el : Element) : boolean {
        return el instanceof HTMLButtonElement && el.dataset.btn === "goTo_2nd_page";
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