export class FullProductPageController {
    constructor(pageController, productDatabase) {
        this.htmlPageController = pageController;
        this.productDatabase = productDatabase;
    }
    checkEvent(el) {
        if (el.parentNode instanceof HTMLAnchorElement && el.parentNode.dataset.produto === "link") {
            this.handleEvent(el.parentNode);
        }
        else if (el instanceof HTMLAnchorElement && el.dataset.produto === "link") {
            this.handleEvent(el);
        }
    }
    handleEvent(el) {
        var _a;
        const index = parseInt((_a = el.dataset.idproduto) !== null && _a !== void 0 ? _a : "0");
        const product = this.productDatabase.getOneProduct(index);
        this.htmlPageController.fullProductLoad(product);
    }
}
