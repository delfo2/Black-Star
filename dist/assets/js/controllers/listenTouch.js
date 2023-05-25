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
            else {
                return;
            }
        });
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
