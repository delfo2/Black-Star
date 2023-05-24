export function listenTouch() {
    window.addEventListener('click', (e) => {
        if (e.target instanceof HTMLImageElement) {
            e.target.src = 'assets/img/just test images/destaques 1.jpg';
            return;
        }
        if (e.target instanceof Element && e.target.children.length > 0) {
            let children = e.target.children;
            for (const element of children) {
                if (element instanceof HTMLImageElement) {
                    element.src = 'assets/img/just test images/destaques 1.jpg';
                }
            }
            return;
        }
        if (e.target instanceof Element && e.target.previousElementSibling instanceof HTMLImageElement) {
            e.target.previousElementSibling.src = 'assets/img/just test images/destaques 1.jpg';
            return;
        }
        else {
            console.log(e.target);
        }
    });
}
