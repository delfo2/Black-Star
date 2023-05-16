const key = 'AIzaSyAwuW-ukJKk8feDI0OoyXVtS2WNoRFpRWc';
const cx = 'f75f63e5975044e3e';
const searchType = 'image';

async function fetchGoogleImgs (q) {
    const query = q;
    try {
        const test = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}&searchType=${searchType}`);
        const testJson = await test.json();
        const itemsResult = testJson.items;
    
        return itemsResult;
    } catch (error) {
        throw new Error(error);
    }
}

const result = await fetchGoogleImgs('Camisas');

console.log(result);