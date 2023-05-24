import { changeMenuState } from "../view/showMenu.js";

const btnMenu : HTMLButtonElement = <HTMLButtonElement> document.querySelector('[data-menu="btn"]');

export function listenBtnMenu () : void {
    btnMenu?.addEventListener('click', () => {
        changeMenuState();
    })
}