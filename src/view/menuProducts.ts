import { TokenGenarator } from "../helpers/functionHelpers.js";
import { ObjProducts, ObjProductsComplete } from "../interface/ObjProducts.js";

export class MenuProducts {
    private divFather : HTMLDivElement;
    private products : ObjProductsComplete[];
    private tokenGenarator : TokenGenarator;
    
    constructor (div : HTMLDivElement, productArray : Array<ObjProductsComplete>, tokenGenarator : TokenGenarator) {
        this.divFather = div;
        this.products = productArray;
        this.tokenGenarator = tokenGenarator;
    }

    public updateMenuProducts () : void {
        this.divFather.innerHTML = this.stringifyAllProducts();
    }

    public addNewProduct (product : ObjProducts) : void {
        const produto = this.addTokenIntoObj(product);
        console.log(this.products);
        this.products.push(produto);
    }

    private frozenObjProducts (el : ObjProducts) : ObjProducts {
        let p = document.createElement('p');
        p.innerHTML = el.produto.p.innerHTML;
        let figCaption = document.createElement('figcaption');
        figCaption.innerHTML = el.produto.figCaption.innerHTML;
        let img = document.createElement('img');
        img.src = el.produto.img.src;

        return {
            produto : {
                p,
                figCaption,
                img
            }
        }
    }

    private addTokenIntoObj (obj : ObjProducts) : ObjProductsComplete {
        const el = this.frozenObjProducts(obj);
        const id = this.tokenGenarator.getToken();
        const produto = {
            produto : {
                p : el.produto.p,
                figCaption : el.produto.figCaption,
                img : el.produto.img,
                id
            }
        }
        return produto;
    }
    
    private DoHtmlString (product : ObjProducts) : string {
        return `
            <figure class="carrinho__card-item">
                <img src="${product.produto.img.src}" alt="">
                <figcaption>${product.produto.figCaption.textContent}</figcaption>
                <button>X</button>
            </figure>
        `
    }

    private stringifyAllProducts () : string {
        let productsAsHtmlString = '';

        if(this.products.length > 0) {
            this.products.forEach(element => {
                let tempString = this.DoHtmlString(element);
                productsAsHtmlString += tempString;
            });
        } else {
            productsAsHtmlString = `
                <figure class="carrinho__card-item">
                    <p>Nenhum Produto escolhido</p>
                </figure>
            `
        }

        return productsAsHtmlString;
    }
}