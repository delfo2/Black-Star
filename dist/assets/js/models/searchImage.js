var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { throwError } from "../helpers/promisesHelpers.js";
const key = 'AIzaSyAwuW-ukJKk8feDI0OoyXVtS2WNoRFpRWc';
const cx = 'f75f63e5975044e3e';
const searchType = 'image';
export function fetchGoogleImgs(q) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = q;
        try {
            const test = yield fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}&searchType=${searchType}`);
            const testJson = yield test.json();
            const itemsResult = testJson.items;
            if (itemsResult) {
                return yield itemsResult;
            }
        }
        catch (error) {
            throwError(error);
        }
    });
}
export function extractImgsIntoArray(obj) {
    const imgArray = obj.map(item => {
        return item.link;
    });
    return imgArray;
}
