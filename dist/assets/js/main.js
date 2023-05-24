import { listenTouch } from "./controllers/listenTouch.js";
import { listenBtnMenu } from "./controllers/menuController.js";
export const action = () => {
    listenBtnMenu();
    listenTouch();
};
action();
