import { searchPreviousElement } from "../helpers/htmlHelpers.js";
import { getDocumentImages } from "../models/getDocumentImages.js";
import { changeSourceImg } from "../view/changeSrcImg.js";
export class ListenTouch {
    constructor(ImageDatase, productData) {
        this.docsImgs = getDocumentImages();
        this.cantChangeElements = [
            "MAIN",
            "HEADER",
            "DIV",
            "SECTION",
            "SECTION"
        ];
        this.ImageDatabase = ImageDatase;
        this.updateSelf();
        this.ProductDataBase = productData;
    }
    ;
    startToListen() {
        window.addEventListener('click', (e) => {
            var _a, _b;
            if (this.imgCartCheck(e.target)) {
                if (e.target instanceof HTMLImageElement) {
                    changeSourceImg(e.target, this.ImageDatabase.getOneSource());
                    return;
                }
                this.imgChildrenCheck(e.target);
                if (e.target instanceof Element
                    && e.target.previousElementSibling instanceof HTMLImageElement) {
                    changeSourceImg(e.target.previousElementSibling, this.ImageDatabase.getOneSource());
                    return;
                }
            }
            if (e.target instanceof HTMLButtonElement &&
                ((_a = e.target.textContent) === null || _a === void 0 ? void 0 : _a.toUpperCase().includes('CARRINHO'))) {
                let productArray = this.btnGetData(e.target);
                this.addCartProduct(productArray);
                this.ProductDataBase.updateMenuProducts();
                return;
            }
            if (e.target instanceof HTMLButtonElement
                && ((_b = e.target.textContent) === null || _b === void 0 ? void 0 : _b.toUpperCase().includes('X'))) {
                this.ProductDataBase.deleteProduct(e.target.parentNode);
            }
            else {
                return;
            }
        });
    }
    transformIntoArrayProduct(p, figCaption, img) {
        return { produto: { p, figCaption, img } };
    }
    addCartProduct(product) {
        this.ProductDataBase.addNewProduct(product);
    }
    btnGetData(btn) {
        var _a;
        let btnData;
        const btnText = (_a = btn.textContent) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        if (btnText === null || btnText === void 0 ? void 0 : btnText.includes('CARRINHO')) {
            const pSibling = searchPreviousElement(btn, HTMLParagraphElement);
            let figCaptionSibling;
            if (btn.previousElementSibling) {
                figCaptionSibling = searchPreviousElement(btn.previousElementSibling, HTMLElement);
            }
            const imgSibling = searchPreviousElement(btn, HTMLImageElement);
            btnData = this.transformIntoArrayProduct(pSibling, figCaptionSibling, imgSibling);
            return btnData;
        }
        else {
            throw new Error(`It wasn't possible find a button with text 'CARRINHO'`);
        }
    }
    updateSelf() {
        this.ImageDatabase.omegaUpdateSource(this.docsImgs);
    }
    ;
    imgChildrenCheck(element) {
        if (element instanceof Element
            && element.children.length > 0
            && this.elementCanHaveInternalChange(element)) {
            let children = element.children;
            this.searchNewChildren(children);
        }
    }
    ;
    searchNewChildren(children) {
        for (const element of children) {
            if (element.children.length > 0) {
                this.searchNewChildren(element.children);
            }
            if (element instanceof HTMLImageElement) {
                changeSourceImg(element, this.ImageDatabase.getOneSource());
            }
        }
    }
    ;
    imgCartCheck(element) {
        if (element && element instanceof HTMLImageElement && element.dataset.lock === 'locked') {
            return false;
        }
        return true;
    }
    elementCanHaveInternalChange(element) {
        return !this.cantChangeElements.includes(element.nodeName.toUpperCase());
    }
    ;
}
