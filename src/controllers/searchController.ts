import { GoogleItemObject } from "../interface/GoogleItemObject.js";
import { extractImgsIntoArray, fetchGoogleImgs } from "../models/searchImage.js";

export async function searchImages () : Promise<string[]> {
    const retorno = await fetchGoogleImgs('Camisas');
/*
    if(retorno instanceof Array<GoogleItemObject>) {
        const srcArray = extractImgsIntoArray(retorno);
        return srcArray;
    } else {
    }*/
    throw new Error('The object provided isnt a intance of GoogleItemObject.');
}
