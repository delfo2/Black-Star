import { HtmlHelpers } from "../helpers/htmlHelpers.js";
export class LinkController {
    constructor() {
        this.htmlFinder = new HtmlHelpers();
    }
    linkHandle(element, pageController) {
        if (!this.validation(element)
            && !this.parentNodeValidation(element)) {
            return;
        }
        pageController.productsPage();
    }
    validation(el) {
        return el.nodeName.toUpperCase() === "A" && el instanceof HTMLAnchorElement;
    }
    parentNodeValidation(el) {
        const father = el.parentNode;
        if (el instanceof HTMLAnchorElement) {
            return false;
        }
        if (this.validation(father)) {
            return true;
        }
        if ((father === null || father === void 0 ? void 0 : father.nodeName.toLowerCase()) === "figure"
            && this.validation(father.parentNode)) {
            return true;
        }
        return false;
    }
}
