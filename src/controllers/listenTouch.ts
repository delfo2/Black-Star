import { searchPreviousElement } from "../helpers/htmlHelpers.js";
import { ImageDatabase } from "../models/ImageDatabase.js";
import { getDocumentImages } from "../models/getDocumentImages.js";
import { changeSourceImg } from "../view/changeSrcImg.js";

export class ListenTouch {
    private docsImgs = getDocumentImages();
    private ImageDatabase : ImageDatabase;
    private cantChangeElements = [
        "MAIN",
        "HEADER",
        "DIV",
        "SECTION",
        "SECTION"
    ];

    constructor (ImageDatase : ImageDatabase) {
        this.ImageDatabase = ImageDatase;
        this.updateSelf();
    };

    public startToListen () : void {
        window.addEventListener('click', (e) => {
            if(e.target instanceof HTMLImageElement) {
                changeSourceImg(e.target, this.ImageDatabase.getOneSource());
                return;
            }
            this.imgChildrenCheck(e.target);

            if(e.target instanceof Element 
                && e.target.previousElementSibling instanceof HTMLImageElement) {

                changeSourceImg(e.target.previousElementSibling, this.ImageDatabase.getOneSource());
                return;
            }
            if(e.target instanceof HTMLButtonElement) {
                const procuctArray = this.btnGetData(e.target);
                console.log(procuctArray);
                return;
            }
            else {
                return;
            }
        })
    }

    private btnGetData (btn : HTMLButtonElement) : any[] {
        let btnData = [];
        const btnText = btn.textContent?.toUpperCase();

        if(btnText?.includes('CARRINHO')) {
            const pSibling = searchPreviousElement(btn, HTMLParagraphElement);
            btnData.push(pSibling);
            
            let figCaptionSibling;
            if(btn.previousElementSibling) {
                figCaptionSibling = searchPreviousElement(btn.previousElementSibling, HTMLElement);
                btnData.push(figCaptionSibling);
            }

            const imgSibling = searchPreviousElement(btn, HTMLImageElement);
            btnData.push(imgSibling);
        }
        
        return btnData;
    }

    private updateSelf () : void {
        this.ImageDatabase.omegaUpdateSource(this.docsImgs);
    };
    
    private imgChildrenCheck( element : any ) : void {
        if(element instanceof Element 
            && element.children.length > 0
                && this.elementCanHaveInternalChange(element)) {

            let children = element.children;
            this.searchNewChildren(children);
        }
    };

    private searchNewChildren( children : HTMLCollection ) : void {
        for (const element of children) {
            if (element.children.length > 0) {
                this.searchNewChildren(element.children);
            }
            if (element instanceof HTMLImageElement) {
                changeSourceImg(element, this.ImageDatabase.getOneSource());
            }
        }
    };

    private elementCanHaveInternalChange(element: Element) {
        return !this.cantChangeElements.includes(element.nodeName.toUpperCase());
    };
}