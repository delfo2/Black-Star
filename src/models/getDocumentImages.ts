const imgTag = document.querySelectorAll('img');

export function getDocumentImages () : string[] {
    let arr : string[] = [];

    imgTag.forEach(item => {
        arr.push(item.src);
    })
    
    return arr;
}