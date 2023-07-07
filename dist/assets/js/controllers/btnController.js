import { HtmlHelpers } from "../helpers/htmlHelpers.js";
export class ButtonController {
    constructor() {
        this.htmlHelp = new HtmlHelpers();
    }
    handle(el, productMemory) {
        var _a, _b;
        if (el instanceof HTMLButtonElement &&
            ((_a = el.textContent) === null || _a === void 0 ? void 0 : _a.toUpperCase().includes('CARRINHO'))) {
            let productArray = this.btnGetData(el, productMemory);
            productMemory.addNewProduct(productArray);
            productMemory.updateMenuProducts();
            return;
        }
        if (el instanceof HTMLButtonElement
            && ((_b = el.textContent) === null || _b === void 0 ? void 0 : _b.toUpperCase().includes('X'))) {
            productMemory.deleteProduct(el.parentNode);
        }
    }
    btnGetData(btn, productMemory) {
        var _a;
        let btnData;
        const btnText = (_a = btn.textContent) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        if ((btnText === null || btnText === void 0 ? void 0 : btnText.includes('CARRINHO')) && btn.previousElementSibling) {
            const pSibling = this.htmlHelp.searchPreviousElement(btn, HTMLParagraphElement);
            const figCaptionSibling = this.htmlHelp.searchPreviousElement(btn.previousElementSibling, HTMLElement);
            const imgSibling = this.htmlHelp.searchPreviousElement(btn, HTMLImageElement);
            btnData = productMemory.transformIntoArrayProduct(pSibling, figCaptionSibling, imgSibling);
            return btnData;
        }
        else {
            throw new Error(`It wasn't possible find a button with text 'CARRINHO'`);
        }
    }
}
