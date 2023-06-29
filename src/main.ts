import { ListenTouch } from "./controllers/listenTouch.js";
import { listenBtnMenu } from "./controllers/menuController.js";
import { TokenGenarator } from "./helpers/functionHelpers.js";
// import { searchImages } from "./controllers/searchController.js";
import { ImageDatabase } from "./models/ImageDatabase.js";
import { MenuProducts } from "./view/menuProducts.js";

export const action = async () => {
    listenBtnMenu();

    // const srcImg = await searchImages();

    const tokenGenarator = new TokenGenarator();

    const ProductDataBase = new MenuProducts(
        <HTMLDivElement>document.querySelector('[data-produtos="menu"]'),
        [],
        tokenGenarator
    );
    
    ProductDataBase.updateMenuProducts();
    const ImgDatabase = new ImageDatabase(['']);
    const ListenTouchController = new ListenTouch(ImgDatabase, ProductDataBase);
    
    ListenTouchController.startToListen();
}

action();