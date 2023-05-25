import { throwError } from "../helpers/promisesHelpers.js";
import { GoogleItemObject } from "../interface/GoogleItemObject.js";

const key = 'AIzaSyAwuW-ukJKk8feDI0OoyXVtS2WNoRFpRWc';
const cx = 'f75f63e5975044e3e';
const searchType = 'image';

export async function fetchGoogleImgs (q : string) : Promise<[GoogleItemObject] | unknown> {
    const query = q;
    try {
        const test = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}&searchType=${searchType}`);
        const testJson = await test.json();
        const itemsResult = testJson.items;
    
        if(itemsResult) {
            return await itemsResult;
        }
    } catch (error) {
        throwError(error);
    }
}

export function extractImgsIntoArray (obj : Array<GoogleItemObject>) : string[] {
    const imgArray = obj.map(item => {
        return item.link;
    })

    return imgArray;
}