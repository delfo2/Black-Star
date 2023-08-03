export class MenuProducts {
    constructor(div, productArray, tokenGenarator) {
        this.divFather = div;
        this.products = productArray;
        this.tokenGenarator = tokenGenarator;
    }
    getProducts() {
        return this.products;
    }
    transformIntoArrayProduct(p, figCaption, img) {
        return { produto: { p, figCaption, img } };
    }
    updateMenuProducts() {
        this.divFather.innerHTML = this.stringifyAllProducts();
    }
    addNewProduct(product) {
        const produto = this.addTokenIntoObj(product);
        this.products.push(produto);
    }
    deleteProduct(el) {
        if (el) {
            let i;
            this.products.forEach((obj, index) => {
                if (`${obj.produto.id}` === `${el.dataset.id}`) {
                    i = index;
                }
            });
            if (i !== 0 && !i) {
                throw new Error(`não foi possível achar um índice para o elemento ${el.textContent}`);
            }
            else {
                this.tokenGenarator.deleteToken(i);
                this.products.splice(i, 1);
                this.updateMenuProducts();
            }
        }
    }
    frozenObjProducts(el) {
        let p = document.createElement('p');
        p.innerHTML = el.produto.p.innerHTML;
        let figCaption = document.createElement('figcaption');
        figCaption.innerHTML = el.produto.figCaption.innerHTML;
        let img = document.createElement('img');
        img.src = el.produto.img.src;
        img.dataset.lock = 'locked';
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
            <figure class="carrinho__card-item" data-id="${product.produto.id}">
                <img src="${product.produto.img.src}" alt="" data-lock="${product.produto.img.dataset.lock}">
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
