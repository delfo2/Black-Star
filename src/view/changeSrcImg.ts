import { HtmlHelpers } from "../helpers/htmlHelpers.js";
import { ImageDatabase } from "../models/ImageDatabase.js";

export class ImgHandle {
    private cantChangeElements = [
        "MAIN",
        "HEADER",
        "DIV",
        "SECTION",
        "SECTION"
    ];
    private ImageDataBase : ImageDatabase;
    private docsImgs = HtmlHelpers.getDocumentImages();

    constructor (imgDataBase : ImageDatabase) {
        this.ImageDataBase = imgDataBase;
        this.updateSelf();
    }
    
    public imgHandle (prop : Element | null, ImageDatabase : ImageDatabase) {
        if(prop instanceof HTMLImageElement) {
            this.changeSourceImg(prop, ImageDatabase.getOneSource());
            return;
        }
        this.imgChildrenCheck(prop);
    
        if(prop instanceof Element 
            && prop.previousElementSibling instanceof HTMLImageElement) {
    
            this.changeSourceImg(prop.previousElementSibling, ImageDatabase.getOneSource());
            return;
        }
    }

    private changeSourceImg (element : HTMLImageElement, scr : string) : void {
        const lockCheck = element.dataset.lock === 'locked' ? false : true;

        if(lockCheck) {
            element.src = scr;
        }
    }
        
    private imgChildrenCheck( element : any ) : void {
        if(element instanceof Element 
            && element.children.length > 0
                && this.elementCanHaveInternalChange(element)) {

            this.searchNewChildren(element.children);
        }
    };

    private updateSelf () : void {
        this.ImageDataBase.omegaUpdateSource(this.docsImgs);
    };

    private searchNewChildren( children : HTMLCollection ) : void {
        for (const element of children) {
            if (element.children.length > 0) {
                this.searchNewChildren(element.children);
            }
            if (element instanceof HTMLImageElement) {
                this.changeSourceImg(element, this.ImageDataBase.getOneSource());
            }
        }
    };
    
    private elementCanHaveInternalChange(element: Element) : boolean {
        return !this.cantChangeElements.includes(element.nodeName.toUpperCase());
    };
}

