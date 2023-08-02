export interface ObjProducts {
    produto : {
        p : HTMLParagraphElement,
        figCaption : HTMLElement,
        img : HTMLImageElement
    };
}

export interface ObjProductsComplete {
    produto : {
        p : HTMLParagraphElement,
        figCaption : HTMLElement,
        img : HTMLImageElement,
        id : number
    };
}

export interface ArrayProductData {
    titulo : string,
    preco : number,
    avaliacao : number,
    srcImg : string
}

export interface ArrayProductDataComDesconto extends ArrayProductData {
    desconto : number
}