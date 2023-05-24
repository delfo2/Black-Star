export const menu : HTMLCollection = <HTMLCollection> document.querySelector('[data-menu="div"]')?.children;

export function changeMenuState () : void {
    for (const btn of menu) {
        
        if(getActualState(btn).contains('visivel')) {
            btn.classList.remove("visivel");
            btn.classList.add("escondido");
        }
        else if(getActualState(btn).contains("escondido")) {
            btn.classList.remove("escondido");
            btn.classList.add("visivel");
        }
    }
}

function getActualState (btn : Element) {
    return btn.classList;
}