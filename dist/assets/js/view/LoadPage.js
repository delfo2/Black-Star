export class LoadPage {
    constructor() {
        this.body = document.querySelector('[data-main=""]');
    }
    refresh(innerHtml) {
        this.body.innerHTML = innerHtml;
    }
}
