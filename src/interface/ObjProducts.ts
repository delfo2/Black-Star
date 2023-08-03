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
    srcImg : string,
    desconto : number | null
}