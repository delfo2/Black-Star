import { ListenTouch } from "./controllers/listenTouch.js";
import { listenBtnMenu } from "./controllers/menuController.js";
import { searchImages } from "./controllers/searchController.js";
import { ImageDatabase } from "./models/ImageDatabase.js";

export const action = async () => {
    listenBtnMenu();

    const srcImg = await searchImages();

    const ImgDatabase = new ImageDatabase(srcImg);
    const ListenTouchController = new ListenTouch(ImgDatabase);
    
    ListenTouchController.startToListen();
}

action();