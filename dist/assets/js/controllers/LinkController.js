export class LinkController {
    linkHandle(element, pageController, products) {
        var _a;
        if (!this.validation(element)
            && !this.parentNodeValidation(element)
            && !this.menuBtnPageValidation(element)) {
            return;
        }
        pageController.productsPage(products, (_a = element.textContent) !== null && _a !== void 0 ? _a : "Indice");
    }
    validation(el) {
        let nodeName = el ? el.nodeName.toUpperCase() : "b";
        return nodeName === "A" && el instanceof HTMLAnchorElement;
    }
    menuBtnPageValidation(el) {
        return el instanceof HTMLButtonElement && el.dataset.btn === "goTo_2nd_page";
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
