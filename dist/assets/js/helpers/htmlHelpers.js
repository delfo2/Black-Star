export class HtmlHelpers {
    static getDocumentImages() {
        let imgTag = document.querySelectorAll('img');
        let arr = [];
        imgTag.forEach(item => {
            arr.push(item.src);
        });
        return arr;
    }
    searchPreviousElement(element, type) {
        const children = element.children;
        let htmlElement;
        if (element.childElementCount > 0) {
            for (const kid of children) {
                if (kid instanceof type) {
                    htmlElement = kid;
                    return htmlElement;
                }
            }
        }
        else if (!htmlElement) {
            htmlElement = this.previousSearchLoop(element, type);
            return htmlElement;
        }
        throw new Error(`The element: ${element.nodeName}, with the class: ${element.classList[0]} haven't any sibling or children.`);
    }
    previousSearchLoop(htmlElement, type) {
        const el = htmlElement.previousElementSibling;
        let result;
        if (el) {
            if (el instanceof type) {
                return el;
            }
            else {
                result = this.previousSearchLoop(el, type);
                return result;
            }
        }
        else {
            throw new Error(`No Image was found for the element: ${htmlElement.nodeName}, with the class: ${htmlElement.classList[0]}.`);
        }
    }
}
