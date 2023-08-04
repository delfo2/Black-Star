import { HtmlHelpers } from "../helpers/htmlHelpers.js";
export class ButtonController {
    constructor() {
        this.htmlHelp = new HtmlHelpers();
    }
    handle(el, productMemory, pageController) {
        var _a, _b;
        if (el instanceof HTMLButtonElement) {
            const buttonText = (_b = (_a = el.textContent) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : '';
            if (buttonText.includes('CARRINHO')) {
                const productArray = this.btnGetData(el, productMemory);
                productMemory.addNewProduct(productArray);
                productMemory.updateMenuProducts();
                return;
            }
            else if (buttonText.includes('X')) {
                const parentNode = el.parentNode;
                productMemory.deleteProduct(parentNode);
            }
        }
        this.isDescriptionButton(el);
        this.isHomeButton(el, pageController);
    }
    isHomeButton(el, pageController) {
        if (el instanceof HTMLButtonElement
            && el.dataset.btn === "voltar_home") {
            pageController.defaultLoad();
        }
    }
    isDescriptionButton(el) {
        if (el instanceof HTMLButtonElement) {
            this.showDescription(el);
        }
        else if ((el === null || el === void 0 ? void 0 : el.nodeName) === 'H4'
            && el.parentNode instanceof HTMLButtonElement) {
            this.showDescription(el.parentNode);
        }
        else if ((el === null || el === void 0 ? void 0 : el.nodeName) === 'P'
            && el.parentNode instanceof HTMLButtonElement) {
            this.showDescription(el.parentNode);
        }
        ;
    }
    showDescription(btn) {
        if (this.isButtonValid(btn)) {
            const sibling = btn.nextElementSibling;
            if (sibling.classList.contains('escondido')) {
                this.toggleDescription(btn.children, '+', '-');
                sibling.classList.remove('escondido');
            }
            else {
                this.toggleDescription(btn.children, '-', '+');
                sibling.classList.add('escondido');
            }
        }
    }
    isButtonValid(btn) {
        if (!(btn instanceof HTMLButtonElement)) {
            return false;
        }
        const { nextElementSibling, dataset } = btn;
        if (!nextElementSibling || !dataset.button) {
            return false;
        }
        return dataset.button.length > 5;
    }
    toggleDescription(children, hideText, showText) {
        for (const child of children) {
            if (child.tagName === 'P') {
                child.textContent = child.textContent === hideText ? showText : hideText;
            }
        }
    }
    btnGetData(btn, productMemory) {
        var _a;
        const btnText = (_a = btn.textContent) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        if ((btnText === null || btnText === void 0 ? void 0 : btnText.includes('CARRINHO')) && btn.previousElementSibling) {
            const pSibling = btn.dataset.button == 'productPage' ?
                document.querySelector('[data-h3="productPage"]')
                : this.htmlHelp.searchPreviousElement(btn, HTMLParagraphElement);
            const figCaptionSibling = btn.dataset.button == 'productPage' ?
                document.querySelector('[data-p="productPage"]')
                : this.htmlHelp.searchPreviousElement(btn.previousElementSibling, HTMLElement);
            const imgSibling = btn.dataset.button == 'productPage' ?
                document.querySelector('[data-img="productPage"]')
                : this.htmlHelp.searchPreviousElement(btn, HTMLImageElement);
            return productMemory.transformIntoArrayProduct(pSibling, figCaptionSibling, imgSibling);
        }
        else {
            throw new Error(`It wasn't possible find a button with text 'CARRINHO'`);
        }
    }
}
