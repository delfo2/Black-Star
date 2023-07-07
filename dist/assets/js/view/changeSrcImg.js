import { HtmlHelpers } from "../helpers/htmlHelpers.js";
export class ImgHandle {
    constructor(imgDataBase) {
        this.cantChangeElements = [
            "MAIN",
            "HEADER",
            "DIV",
            "SECTION",
            "SECTION"
        ];
        this.docsImgs = HtmlHelpers.getDocumentImages();
        this.ImageDataBase = imgDataBase;
        this.updateSelf();
    }
    imgHandle(prop, ImageDatabase) {
        if (prop instanceof HTMLImageElement) {
            this.changeSourceImg(prop, ImageDatabase.getOneSource());
            return;
        }
        this.imgChildrenCheck(prop);
        if (prop instanceof Element
            && prop.previousElementSibling instanceof HTMLImageElement) {
            this.changeSourceImg(prop.previousElementSibling, ImageDatabase.getOneSource());
            return;
        }
    }
    changeSourceImg(element, scr) {
        const lockCheck = element.dataset.lock === 'locked' ? false : true;
        if (lockCheck) {
            element.src = scr;
        }
    }
    imgChildrenCheck(element) {
        if (element instanceof Element
            && element.children.length > 0
            && this.elementCanHaveInternalChange(element)) {
            this.searchNewChildren(element.children);
        }
    }
    ;
    updateSelf() {
        this.ImageDataBase.omegaUpdateSource(this.docsImgs);
    }
    ;
    searchNewChildren(children) {
        for (const element of children) {
            if (element.children.length > 0) {
                this.searchNewChildren(element.children);
            }
            if (element instanceof HTMLImageElement) {
                this.changeSourceImg(element, this.ImageDataBase.getOneSource());
            }
        }
    }
    ;
    elementCanHaveInternalChange(element) {
        return !this.cantChangeElements.includes(element.nodeName.toUpperCase());
    }
    ;
}
