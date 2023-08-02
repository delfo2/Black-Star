import { HtmlHelpers } from "../helpers/htmlHelpers.js";
import { ObjProducts } from "../interface/ObjProducts.js";
import { MenuProducts } from "../view/menuProducts.js";

export class ButtonController {
    private htmlHelp = new HtmlHelpers();

    public handle (el : Element | null, productMemory : MenuProducts) : void {
        if (el instanceof HTMLButtonElement) {
            const buttonText = el.textContent?.toUpperCase() ?? '';
            
            if (buttonText.includes('CARRINHO')) {
                const productArray = this.btnGetData(el, productMemory);
                productMemory.addNewProduct(productArray);
                productMemory.updateMenuProducts();
                return;
            } else if (buttonText.includes('X')) {
                const parentNode = el.parentNode as HTMLElement;
                productMemory.deleteProduct(parentNode);
            }
        }
        
        this.isDescriptionButton(el);
    }

    private isDescriptionButton (el : Element | null) : void {
        if(el instanceof HTMLButtonElement) {
            this.showDescription(el);
        }
        else if(el?.nodeName === 'H4'
            && el.parentNode instanceof HTMLButtonElement) {
            this.showDescription(el.parentNode);
        }
        else if(el?.nodeName === 'P'
            && el.parentNode instanceof HTMLButtonElement) {
            this.showDescription(el.parentNode);
        };
    }

    private showDescription(btn: HTMLButtonElement): void {
        if (this.isButtonValid(btn)) {
            const sibling = btn.nextElementSibling as HTMLElement;
    
            if (sibling.classList.contains('escondido')) {
                this.toggleDescription(btn.children, '+', '-');
                sibling.classList.remove('escondido');
            } else {
                this.toggleDescription(btn.children, '-', '+');
                sibling.classList.add('escondido');
            }
        }
    }
    
    private isButtonValid(btn: HTMLButtonElement): boolean {
        if (!(btn instanceof HTMLButtonElement)) {
          return false;
        }
      
        const { nextElementSibling, dataset } = btn;
      
        if (!nextElementSibling || !dataset.button) {
          return false;
        }
      
        return dataset.button.length > 5;
    }
      
    
    private toggleDescription(children: HTMLCollection, hideText: string, showText: string): void {
        for (const child of children) {
            if(child.tagName === 'P') {
                child.textContent = child.textContent === hideText ? showText : hideText;
            }
        }
    }
    
    private btnGetData (btn : HTMLButtonElement, productMemory : MenuProducts) : ObjProducts {
        const btnText = btn.textContent?.toUpperCase();

        if(btnText?.includes('CARRINHO') && btn.previousElementSibling) {
            const pSibling = 
                btn.dataset.button == 'productPage' ?
                    document.querySelector('[data-h3="productPage"]')
                    : this.htmlHelp.searchPreviousElement(btn, HTMLParagraphElement);
            
            const figCaptionSibling =
                btn.dataset.button == 'productPage' ?
                    document.querySelector('[data-p="productPage"]')
                    : this.htmlHelp.searchPreviousElement(btn.previousElementSibling, HTMLElement);
            
            const imgSibling : HTMLImageElement =
                btn.dataset.button == 'productPage' ?
                    document.querySelector('[data-img="productPage"]')
                    : this.htmlHelp.searchPreviousElement(btn, HTMLImageElement);
            
            return productMemory.transformIntoArrayProduct(pSibling, figCaptionSibling, imgSibling);
        } else {
            throw new Error (`It wasn't possible find a button with text 'CARRINHO'`);
        }
    }
    
}