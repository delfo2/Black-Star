import { AllowChange } from "../helpers/functionHelpers.js";
import { changeCartProductsState } from "../view/showCartProducts.js";
import { changeMenuState } from "../view/showMenu.js";

const btnMenu : HTMLButtonElement = <HTMLButtonElement> document.querySelector('[data-menu="btn"]');
const btnCarrinho : HTMLButtonElement = <HTMLButtonElement> document.querySelector('[data-btn="carrinho"]');
const canOrNot = new AllowChange();

export function listenBtnMenu () : void {
    btnMenu?.addEventListener('click', () => {
        changeMenuState(canOrNot);
    })
    btnCarrinho?.addEventListener('click', () => {
        changeCartProductsState(btnCarrinho, canOrNot);
    })
}