import { HtmlHelpers } from "../helpers/htmlHelpers.js";
import { HtmlPageController } from "./HtmlPageController.js";

export class LinkController {
    private htmlFinder = new HtmlHelpers();

    public linkHandle (element : Element, pageController : HtmlPageController ) : void {
        if(!this.validation(element) 
            && !this.parentNodeValidation(element)) {

            return;
        }
        pageController.productsPage();
    }

    private validation (el : Element) : boolean {
        return el.nodeName.toUpperCase() === "A" && el instanceof HTMLAnchorElement;
    }

    private parentNodeValidation (el: Element) : boolean {
        const father = el.parentNode;
        if(el instanceof HTMLAnchorElement) {
            return false;
        }
        if(this.validation(father as Element)) {
            return true;
        }
        if(father?.nodeName.toLowerCase() === "figure"
            && this.validation(father.parentNode as Element)) {
                return true;
        }
        return false;
    }
}