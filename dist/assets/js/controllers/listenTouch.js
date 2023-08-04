import { ImgHandle } from "../view/changeSrcImg.js";
import { LinkController } from "./LinkController.js";
import { ButtonController } from "./btnController.js";
export class ListenTouch {
    constructor(ImageDatase, productData, products, fullProduct) {
        this.buttonController = new ButtonController();
        this.linkController = new LinkController();
        this.ImgDatabase = ImageDatase;
        this.MenuProductDataBase = productData;
        this.productsDatabase = products;
        this.fullProductController = fullProduct;
        this.startImgHandle();
    }
    ;
    startToListen(pageController) {
        window.addEventListener('click', (e) => {
            this.eventHandle(e, pageController);
        });
    }
    eventHandle(e, pageController) {
        var _a;
        (_a = this.ImgHandle) === null || _a === void 0 ? void 0 : _a.imgHandle(e.target, this.ImgDatabase);
        this.buttonController.handle(e.target, this.MenuProductDataBase, pageController);
        this.linkController.linkHandle(e.target, pageController, this.productsDatabase);
        this.fullProductController.checkEvent(e.target);
        return;
    }
    startImgHandle() {
        this.ImgHandle = new ImgHandle(this.ImgDatabase);
    }
}
