import { fetchGoogleImgs } from "../models/searchImage.js";

export async function searchImages () : Promise<void> {
    const retorno = await fetchGoogleImgs('Camisas');
    console.log(retorno);
}
