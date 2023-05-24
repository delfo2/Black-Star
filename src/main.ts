import { listenTouch } from "./controllers/listenTouch.js";
import { listenBtnMenu } from "./controllers/menuController.js";
import { searchImages } from "./controllers/searchController.js";

export const action = () => {
    // searchImages();
    listenBtnMenu();
    listenTouch();
}

action();