export class Converter {
    static objProductsToArrayProducts(objProducts) {
        const obj = objProducts.getProducts();
        let array = [];
        for (const product of obj) {
            let preco = product.produto.p.textContent
                ? parseInt(product.produto.p.textContent.replace(/\D/g, ""))
                : 0;
            let titulo = product.produto.figCaption.textContent
                ? product.produto.figCaption.textContent
                : "Roupa";
            array.push({
                titulo: titulo,
                preco: preco,
                avaliacao: Math.random() * 10,
                srcImg: product.produto.img.src,
                desconto: null
            });
        }
        return array;
    }
}
