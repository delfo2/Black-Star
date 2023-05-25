import { listenTouch } from "./controllers/listenTouch.js";
import { listenBtnMenu } from "./controllers/menuController.js";
import { searchImages } from "./controllers/searchController.js";

export const action = async () => {
    listenBtnMenu();

    const srcImg = await searchImages();
    listenTouch(srcImg);
}

action();