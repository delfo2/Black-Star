import { HtmlPageController } from "./controllers/HtmlPageController.js";
import { ListenTouch } from "./controllers/listenTouch.js";
import { listenBtnMenu } from "./controllers/menuController.js";
import { TokenGenarator } from "./helpers/functionHelpers.js";
// import { searchImages } from "./controllers/searchController.js";
import { ImageDatabase } from "./models/ImageDatabase.js";
import { MenuProducts } from "./view/menuProducts.js";

export const start = () => {
    const btn1 = document.querySelector('[data-load="1"]');
    const btn2 = document.querySelector('[data-load="2"]');
    const btn3 = document.querySelector('[data-load="3"]');
    
    const HtmlRender = new HtmlPageController();
    
    btn1?.addEventListener('click', () => {
        HtmlRender.defaultLoad();
        action();
    })
    btn2?.addEventListener('click', () => {
        HtmlRender.productLoad();
        action();
    })
    btn3?.addEventListener('click', () => {
        HtmlRender.allProductsLoad();
        action();
    })
}

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

start();

//botão de tamanho mudar o p;