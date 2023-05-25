var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { extractImgsIntoArray, fetchGoogleImgs } from "../models/searchImage.js";
export function searchImages() {
    return __awaiter(this, void 0, void 0, function* () {
        const retorno = yield fetchGoogleImgs('Camisas');
        if (retorno instanceof (Array)) {
            const srcArray = extractImgsIntoArray(retorno);
            return srcArray;
        }
        else {
            throw new Error('The object provided isnt a intance of GoogleItemObject.');
        }
    });
}
