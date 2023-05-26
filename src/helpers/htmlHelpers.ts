export function searchPreviousImg (element : Element) : HTMLImageElement {
    const children = element.children;
    let img;
    if(element.childElementCount > 0) {
        for (const kid of children) {
            if(kid instanceof HTMLImageElement) {
                img = kid;
                return img;
            }
        }
    } else if (!img) {
        img = previousSearchLoop(element);
        return img;
    }
    throw new Error(`The element: ${element.nodeName}, with the class: ${element.classList[0]} haven't any sibling or children.`);
}

export function previousSearchLoop (htmlElement : Element) : HTMLImageElement {
    const el = htmlElement.previousElementSibling;
    let result : HTMLImageElement;
    if(el) {
        if(el instanceof HTMLImageElement) {
            return el;
        } else {
            result = previousSearchLoop(el);
            return result;
        }
    } else {
        throw new Error(`No Image was found for the element: ${htmlElement.nodeName}, with the class: ${htmlElement.classList[0]}.`);
    }
}