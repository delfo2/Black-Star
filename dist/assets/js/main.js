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
import { FullProductPageController } from "./controllers/fullProductPageController.js";
import { ListenTouch } from "./controllers/listenTouch.js";
import { listenBtnMenu } from "./controllers/menuController.js";
import { TokenGenarator } from "./helpers/functionHelpers.js";
import { ImageDatabase } from "./models/ImageDatabase.js";
import { ProductsDatabase } from "./models/ProductsDatabase.js";
import { MenuProducts } from "./view/menuProducts.js";
const HtmlRender = new HtmlPageController();
export const jsLoad = () => __awaiter(void 0, void 0, void 0, function* () {
    listenBtnMenu();
    const tokenGenarator = new TokenGenarator();
    const MenuDataBase = new MenuProducts(document.querySelector('[data-produtos="menu"]'), [], tokenGenarator);
    MenuDataBase.updateMenuProducts();
    const ImgDatabase = new ImageDatabase(['']);
    const productsDatabase = new ProductsDatabase(ImgDatabase);
    const fullProduct = new FullProductPageController(HtmlRender, productsDatabase);
    const ListenTouchController = new ListenTouch(ImgDatabase, MenuDataBase, productsDatabase, fullProduct);
    ListenTouchController.startToListen(HtmlRender);
});
HtmlRender.defaultLoad();
jsLoad();
