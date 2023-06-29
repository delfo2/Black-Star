import { AllowChange } from "../helpers/functionHelpers.js";

export const menu : HTMLCollection = <HTMLCollection> document.querySelector('[data-menu="div"]')?.children;

export function changeMenuState (can : AllowChange) : void {
    if(can.menuCan) {
        for (const btn of menu) {
            if(getActualState(btn).contains('visivel')) {
                btn.classList.remove("visivel");
                btn.classList.add("escondido");
                can.updateCartCan()
            }
            else if(getActualState(btn).contains("escondido")) {
                btn.classList.remove("escondido");
                btn.classList.add("visivel");
                can.updateCartCan()
            }
        }
    } else {
        console.log(`You cant change Menu right now. Please disable Cart Menu first.`);
    }
}

function getActualState (btn : Element) {
    return btn.classList;
}