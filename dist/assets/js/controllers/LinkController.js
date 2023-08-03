export class LinkController {
    linkHandle(element, pageController, products) {
        var _a;
        if (!this.validation(element)
            && !this.parentNodeValidation(element)) {
            return;
        }
        pageController.productsPage(products, (_a = element.textContent) !== null && _a !== void 0 ? _a : "Indice");
    }
    validation(el) {
        return el.nodeName.toUpperCase() === "A" && el instanceof HTMLAnchorElement;
    }
    parentNodeValidation(el) {
        const father = el.parentNode;
        if (el instanceof HTMLAnchorElement) {
            return false;
        }
        return this.validation(father) ||
            (father === null || father === void 0 ? void 0 : father.nodeName.toLowerCase()) === "figure"
                && this.validation(father.parentNode);
    }
}
