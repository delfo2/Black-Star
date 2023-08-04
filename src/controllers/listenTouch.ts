import { ImageDatabase } from "../models/ImageDatabase.js";
import { ProductsDatabase } from "../models/ProductsDatabase.js";
import { ImgHandle } from "../view/changeSrcImg.js";
import { MenuProducts } from "../view/menuProducts.js";
import { HtmlPageController } from "./HtmlPageController.js";
import { LinkController } from "./LinkController.js";
import { ButtonController } from "./btnController.js";
import { FullProductPageController } from "./fullProductPageController.js";

export class ListenTouch {
    private ImgDatabase : ImageDatabase;
    private MenuProductDataBase : MenuProducts;
    private ImgHandle : ImgHandle | undefined;
    private buttonController = new ButtonController();
    private linkController = new LinkController();
    private productsDatabase : ProductsDatabase;
    private fullProductController : FullProductPageController;
    
    constructor (
        ImageDatase : ImageDatabase,
        productData : MenuProducts,
        products : ProductsDatabase,
        fullProduct : FullProductPageController) {

        this.ImgDatabase = ImageDatase;
        this.MenuProductDataBase = productData;
        this.productsDatabase = products;
        this.fullProductController = fullProduct;
        this.startImgHandle();
    };

    public startToListen (pageController : HtmlPageController) : void {
        window.addEventListener('click', (e) => {
            this.eventHandle(e, pageController);
        });
    }

    private eventHandle (e : MouseEvent, pageController : HtmlPageController) : void {
        this.ImgHandle?.imgHandle(e.target as Element, this.ImgDatabase);
        this.buttonController.handle(e.target as Element, this.MenuProductDataBase, pageController);
        this.linkController.linkHandle(e.target as Element, pageController, this.productsDatabase);
        this.fullProductController.checkEvent(e.target as Element);
        return;
    }

    private startImgHandle () : void {
        this.ImgHandle = new ImgHandle(this.ImgDatabase);
    }
}