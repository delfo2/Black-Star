import { ImageDatabase } from "../models/ImageDatabase.js";
import { ImgHandle } from "../view/changeSrcImg.js";
import { MenuProducts } from "../view/menuProducts.js";
import { ButtonController } from "./btnController.js";

export class ListenTouch {
    private ImgDatabase : ImageDatabase;
    private ProductDataBase : MenuProducts;
    private ImgHandle : ImgHandle | undefined;
    private buttonController = new ButtonController();
    
    constructor (ImageDatase : ImageDatabase, productData : MenuProducts) {
        this.ImgDatabase = ImageDatase;
        this.ProductDataBase = productData;
        this.startImgHandle();
    };

    public startToListen () : void {
        window.addEventListener('click', (e) => {
            this.eventHandle(e)
        });
    }

    private eventHandle (e : MouseEvent) : void {
        this.ImgHandle?.imgHandle(e.target as Element, this.ImgDatabase);
        this.buttonController.handle(e.target as Element, this.ProductDataBase);
        
        return;
    }

    private startImgHandle () : void {
        this.ImgHandle = new ImgHandle(this.ImgDatabase);
    }
}