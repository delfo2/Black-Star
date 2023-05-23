import { changeMenuState } from "../view/showMenu.js";
const btnMenu = document.querySelector('[data-menu="btn"]');
export function listenBtnMenu() {
    btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.addEventListener('click', () => {
        changeMenuState(btnMenu);
    });
}
