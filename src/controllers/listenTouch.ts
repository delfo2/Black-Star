import { changeSourceImg } from "../view/changeSrcImg.js";


let imgSrcData : string[];
export function listenTouch (imgArray : string[]) {

    imgSrcData = imgArray;

    window.addEventListener('click', (e) => {
        if(e.target instanceof HTMLImageElement) {
            changeSourceImg(e.target, getOneSource());
            return;
        }
        imgChildrenCheck(e.target);

        if(e.target instanceof Element 
            && e.target.previousElementSibling instanceof HTMLImageElement) {

            changeSourceImg(e.target.previousElementSibling, getOneSource());
            return;
        }
        else {
            console.log(e.target);
        }
    })
}

function getOneSource () : string {
    const randomNumber = getRandomNumber(imgSrcData.length);
    const imgSrc = imgSrcData[randomNumber];
    return imgSrc;
}

function getRandomNumber (limit : number) : number {
    let randomNumber = Math.round(Math.random() * 10);
    if(randomNumber >= limit) {
        randomNumber = getRandomNumber(limit);
    }
    return randomNumber;
}

        
function imgChildrenCheck(element:any) {
    if(element instanceof Element 
        && element.children.length > 0
            && elementCanHaveInternalChange(element)) {

        let children = element.children;
        searchNewChildren(children);
    }
}

function searchNewChildren(children: HTMLCollection) {
    for (const element of children) {
        if (element.children.length > 0) {
            searchNewChildren(element.children);
        }
        if (element instanceof HTMLImageElement) {
            changeSourceImg(element, getOneSource());
        }
    }
}

const cantChangeElements = [
    "MAIN",
    "HEADER",
    "DIV",
    "SECTION",
    "SECTION"
]

function elementCanHaveInternalChange(element: Element) {
    return !cantChangeElements.includes(element.nodeName.toUpperCase());
}
