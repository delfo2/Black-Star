import { ImageDatabase } from "../models/ImageDatabase.js";
import { ImgHandle } from "../view/changeSrcImg.js";
import { MenuProducts } from "../view/menuProducts.js";
import { HtmlPageController } from "./HtmlPageController.js";
import { LinkController } from "./LinkController.js";
import { ButtonController } from "./btnController.js";

export class ListenTouch {
    private ImgDatabase : ImageDatabase;
    private ProductDataBase : MenuProducts;
    private ImgHandle : ImgHandle | undefined;
    private buttonController = new ButtonController();
    private linkController = new LinkController();
    
    constructor (ImageDatase : ImageDatabase, productData : MenuProducts) {
        this.ImgDatabase = ImageDatase;
        this.ProductDataBase = productData;
        this.startImgHandle();
    };

    public startToListen (pageController : HtmlPageController) : void {
        window.addEventListener('click', (e) => {
            this.eventHandle(e, pageController);
        });
    }

    private eventHandle (e : MouseEvent, pageController : HtmlPageController) : void {
        this.ImgHandle?.imgHandle(e.target as Element, this.ImgDatabase);
        this.buttonController.handle(e.target as Element, this.ProductDataBase);
        this.linkController.linkHandle(e.target as Element, pageController);
        return;
    }

    private startImgHandle () : void {
        this.ImgHandle = new ImgHandle(this.ImgDatabase);
    }
}