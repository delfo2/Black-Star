export class MenuProducts {
    constructor(div, productArray, tokenGenarator) {
        this.divFather = div;
        this.products = productArray;
        this.tokenGenarator = tokenGenarator;
    }
    updateMenuProducts() {
        this.divFather.innerHTML = this.stringifyAllProducts();
    }
    addNewProduct(product) {
        const produto = this.addTokenIntoObj(product);
        console.log(this.products);
        this.products.push(produto);
    }
    frozenObjProducts(el) {
        let p = document.createElement('p');
        p.innerHTML = el.produto.p.innerHTML;
        let figCaption = document.createElement('figcaption');
        figCaption.innerHTML = el.produto.figCaption.innerHTML;
        let img = document.createElement('img');
        img.src = el.produto.img.src;
        return {
            produto: {
                p,
                figCaption,
                img
            }
        };
    }
    addTokenIntoObj(obj) {
        const el = this.frozenObjProducts(obj);
        const id = this.tokenGenarator.getToken();
        const produto = {
            produto: {
                p: el.produto.p,
                figCaption: el.produto.figCaption,
                img: el.produto.img,
                id
            }
        };
        return produto;
    }
    DoHtmlString(product) {
        return `
            <figure class="carrinho__card-item">
                <img src="${product.produto.img.src}" alt="">
                <figcaption>${product.produto.figCaption.textContent}</figcaption>
                <button>X</button>
            </figure>
        `;
    }
    stringifyAllProducts() {
        let productsAsHtmlString = '';
        if (this.products.length > 0) {
            this.products.forEach(element => {
                let tempString = this.DoHtmlString(element);
                productsAsHtmlString += tempString;
            });
        }
        else {
            productsAsHtmlString = `
                <figure class="carrinho__card-item">
                    <p>Nenhum Produto escolhido</p>
                </figure>
            `;
        }
        return productsAsHtmlString;
    }
}
