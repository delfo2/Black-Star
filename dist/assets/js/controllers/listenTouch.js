import { searchPreviousElement } from "../helpers/htmlHelpers.js";
import { getDocumentImages } from "../models/getDocumentImages.js";
import { changeSourceImg } from "../view/changeSrcImg.js";
export class ListenTouch {
    constructor(ImageDatase) {
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
    }
    ;
    startToListen() {
        window.addEventListener('click', (e) => {
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
            if (e.target instanceof HTMLButtonElement) {
                const procuctArray = this.btnGetData(e.target);
                console.log(procuctArray);
                return;
            }
            else {
                return;
            }
        });
    }
    btnGetData(btn) {
        var _a;
        let btnData = [];
        const btnText = (_a = btn.textContent) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        if (btnText === null || btnText === void 0 ? void 0 : btnText.includes('CARRINHO')) {
            const pSibling = searchPreviousElement(btn, HTMLParagraphElement);
            btnData.push(pSibling);
            let figCaptionSibling;
            if (btn.previousElementSibling) {
                figCaptionSibling = searchPreviousElement(btn.previousElementSibling, HTMLElement);
                btnData.push(figCaptionSibling);
            }
            const imgSibling = searchPreviousElement(btn, HTMLImageElement);
            btnData.push(imgSibling);
        }
        return btnData;
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
    elementCanHaveInternalChange(element) {
        return !this.cantChangeElements.includes(element.nodeName.toUpperCase());
    }
    ;
}
