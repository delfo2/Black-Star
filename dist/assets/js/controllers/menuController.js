import { AllowChange } from "../helpers/functionHelpers.js";
import { changeCartProductsState } from "../view/showCartProducts.js";
import { changeMenuState } from "../view/showMenu.js";
const btnMenu = document.querySelector('[data-menu="btn"]');
const btnCarrinho = document.querySelector('[data-btn="carrinho"]');
const canOrNot = new AllowChange();
export function listenBtnMenu() {
    btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.addEventListener('click', () => {
        changeMenuState(canOrNot);
    });
    btnCarrinho === null || btnCarrinho === void 0 ? void 0 : btnCarrinho.addEventListener('click', () => {
        changeCartProductsState(btnCarrinho, canOrNot);
    });
}
