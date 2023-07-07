import { HtmlHelpers } from "../helpers/htmlHelpers.js";
import { ObjProducts } from "../interface/ObjProducts.js";
import { MenuProducts } from "../view/menuProducts.js";

export class ButtonController {
    private htmlHelp = new HtmlHelpers();

    public handle (el : Element | null, productMemory : MenuProducts) : void {

        if(el instanceof HTMLButtonElement &&
            el.textContent?.toUpperCase().includes('CARRINHO')) {

            let productArray = this.btnGetData(el, productMemory);
            productMemory.addNewProduct(productArray);

            productMemory.updateMenuProducts();
            return;
        }
        if(el instanceof HTMLButtonElement 
            && el.textContent?.toUpperCase().includes('X')) {
                productMemory.deleteProduct(el.parentNode as HTMLElement);
        }
    }
    
    private btnGetData (btn : HTMLButtonElement, productMemory : MenuProducts) : ObjProducts {
        let btnData : ObjProducts;
        const btnText = btn.textContent?.toUpperCase();

        if(btnText?.includes('CARRINHO') && btn.previousElementSibling) {
            const pSibling = this.htmlHelp.searchPreviousElement(btn, HTMLParagraphElement);
            const figCaptionSibling = this.htmlHelp.searchPreviousElement(btn.previousElementSibling, HTMLElement);
            const imgSibling : HTMLImageElement = this.htmlHelp.searchPreviousElement(btn, HTMLImageElement);
            
            btnData = productMemory.transformIntoArrayProduct(pSibling, figCaptionSibling, imgSibling);
            return btnData;
        } else {
            throw new Error (`It wasn't possible find a button with text 'CARRINHO'`);
        }
    }
    
}