var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ListenTouch } from "./controllers/listenTouch.js";
import { listenBtnMenu } from "./controllers/menuController.js";
import { searchImages } from "./controllers/searchController.js";
import { ImageDatabase } from "./models/ImageDatabase.js";
export const action = () => __awaiter(void 0, void 0, void 0, function* () {
    listenBtnMenu();
    const srcImg = yield searchImages();
    const ImgDatabase = new ImageDatabase(srcImg);
    const ListenTouchController = new ListenTouch(ImgDatabase);
    ListenTouchController.startToListen();
});
action();
