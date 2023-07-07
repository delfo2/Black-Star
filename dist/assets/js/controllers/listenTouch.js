import { ImgHandle } from "../view/changeSrcImg.js";
import { ButtonController } from "./btnController.js";
export class ListenTouch {
    constructor(ImageDatase, productData) {
        this.buttonController = new ButtonController();
        this.ImgDatabase = ImageDatase;
        this.ProductDataBase = productData;
        this.startImgHandle();
    }
    ;
    startToListen() {
        window.addEventListener('click', (e) => {
            this.eventHandle(e);
        });
    }
    eventHandle(e) {
        var _a;
        (_a = this.ImgHandle) === null || _a === void 0 ? void 0 : _a.imgHandle(e.target, this.ImgDatabase);
        this.buttonController.handle(e.target, this.ProductDataBase);
        return;
    }
    startImgHandle() {
        this.ImgHandle = new ImgHandle(this.ImgDatabase);
    }
}
