const imgTag = document.querySelectorAll('img');
export function getDocumentImages() {
    let arr = [];
    imgTag.forEach(item => {
        arr.push(item.src);
    });
    return arr;
}
