export function listenTouch() {
    window.addEventListener('click', (e) => {
        if (e.target instanceof HTMLImageElement) {
            e.target.src = 'assets/img/just test images/destaques 1.jpg';
            return;
        }
        imgChildrenCheck(e.target);
        if (e.target instanceof Element && e.target.previousElementSibling instanceof HTMLImageElement) {
            e.target.previousElementSibling.src = 'assets/img/just test images/destaques 1.jpg';
            return;
        }
        else {
            console.log(e.target);
        }
    });
}
function imgChildrenCheck(element) {
    if (element instanceof Element
        && element.children.length > 0
        && elementCanHaveInternalChange(element)) {
        let children = element.children;
        searchNewChildren(children);
    }
}
function searchNewChildren(children) {
    for (const element of children) {
        if (element.children.length > 0) {
            searchNewChildren(element.children);
        }
        if (element instanceof HTMLImageElement) {
            element.src = 'assets/img/just test images/destaques 1.jpg';
        }
    }
}
const cantChangeElements = [
    "MAIN",
    "HEADER",
    "DIV",
    "SECTION",
    "SECTION"
];
function elementCanHaveInternalChange(element) {
    return !cantChangeElements.includes(element.nodeName.toUpperCase());
}
