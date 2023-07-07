export class LoadPage {
    private body = <HTMLBodyElement> document.querySelector('[data-main=""]');

    public refresh (innerHtml : string) : void {
        this.body.innerHTML = innerHtml;
    }
}