import { HtmlPageController } from "./controllers/HtmlPageController.js";
import { ListenTouch } from "./controllers/listenTouch.js";
import { listenBtnMenu } from "./controllers/menuController.js";
import { TokenGenarator } from "./helpers/functionHelpers.js";
// import { searchImages } from "./controllers/searchController.js";
import { ImageDatabase } from "./models/ImageDatabase.js";
import { ProductsDatabase } from "./models/ProductsDatabase.js";
import { MenuProducts } from "./view/menuProducts.js";

const HtmlRender = new HtmlPageController();
/*
export const start = () => {
    const btn1 = document.querySelector('[data-load="1"]');
    const btn2 = document.querySelector('[data-load="2"]');
    const btn3 = document.querySelector('[data-load="3"]');
    
    
    btn1?.addEventListener('click', () => {
        HtmlRender.defaultLoad();
        action();
    });
    btn2?.addEventListener('click', () => {
        HtmlRender.productLoad();
        action();
    });
    btn3?.addEventListener('click', () => {
        HtmlRender.productsPage();
        action();
    });
}
*/

export const jsLoad = async () => {
    listenBtnMenu();

    // const srcImg = await searchImages();

    const tokenGenarator = new TokenGenarator();

    const MenuDataBase = new MenuProducts(
        <HTMLDivElement>document.querySelector('[data-produtos="menu"]'),
        [],
        tokenGenarator
    );
    
    MenuDataBase.updateMenuProducts();
    const ImgDatabase = new ImageDatabase(['']);
    const productsDatabase = new ProductsDatabase(ImgDatabase);
    const ListenTouchController = new ListenTouch(ImgDatabase, MenuDataBase, productsDatabase);
    
    ListenTouchController.startToListen(HtmlRender);
}

HtmlRender.defaultLoad();
jsLoad();