import { searchPreviousElement } from "../helpers/htmlHelpers.js";
import { ObjProducts } from "../interface/ObjProducts.js";
import { ImageDatabase } from "../models/ImageDatabase.js";
import { getDocumentImages } from "../models/getDocumentImages.js";
import { changeSourceImg } from "../view/changeSrcImg.js";
import { MenuProducts } from "../view/menuProducts.js";

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
    private ProductDataBase : MenuProducts;

    constructor (ImageDatase : ImageDatabase, productData : MenuProducts) {
        this.ImageDatabase = ImageDatase;
        this.updateSelf();
        this.ProductDataBase = productData
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
            if(e.target instanceof HTMLButtonElement &&
                e.target.textContent?.toUpperCase().includes('CARRINHO')) {

                let productArray = this.btnGetData(e.target);
                this.addCartProduct(productArray);

                this.ProductDataBase.updateMenuProducts();
                return;
            }
            else {
                return;
            }
        })
    }

    private transformIntoArrayProduct (
        p : HTMLParagraphElement,
        figCaption : HTMLElement,
        img : HTMLImageElement): ObjProducts {
            return {produto : {p, figCaption, img}};
    }

    private addCartProduct (product : ObjProducts) : void {
        this.ProductDataBase.addNewProduct(product);
    }

    private btnGetData (btn : HTMLButtonElement) : ObjProducts {
        let btnData : ObjProducts;
        const btnText = btn.textContent?.toUpperCase();

        if(btnText?.includes('CARRINHO')) {
            const pSibling = searchPreviousElement(btn, HTMLParagraphElement);
            
            let figCaptionSibling;
            //typescript needs a if here;
            if(btn.previousElementSibling) {
                //ts doesnt has a figcaption interface
                //so i capture a previous pElement
                //and this element is next to figcaption
                figCaptionSibling = searchPreviousElement(btn.previousElementSibling, HTMLElement);
            }

            const imgSibling = searchPreviousElement(btn, HTMLImageElement);
            btnData = this.transformIntoArrayProduct(pSibling, figCaptionSibling, imgSibling);
            return btnData;
        } else {
            throw new Error (`It wasn't possible find a button with text 'CARRINHO'`);
        }
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