var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { HtmlPageController } from "./controllers/HtmlPageController.js";
import { ListenTouch } from "./controllers/listenTouch.js";
import { listenBtnMenu } from "./controllers/menuController.js";
import { TokenGenarator } from "./helpers/functionHelpers.js";
import { ImageDatabase } from "./models/ImageDatabase.js";
import { MenuProducts } from "./view/menuProducts.js";
export const start = () => {
    const HtmlRender = new HtmlPageController();
    HtmlRender.defaultLoad();
};
export const action = () => __awaiter(void 0, void 0, void 0, function* () {
    listenBtnMenu();
    const tokenGenarator = new TokenGenarator();
    const ProductDataBase = new MenuProducts(document.querySelector('[data-produtos="menu"]'), [], tokenGenarator);
    ProductDataBase.updateMenuProducts();
    const ImgDatabase = new ImageDatabase(['']);
    const ListenTouchController = new ListenTouch(ImgDatabase, ProductDataBase);
    ListenTouchController.startToListen();
});
action();
