var _a;
export const menu = (_a = document.querySelector('[data-menu="div"]')) === null || _a === void 0 ? void 0 : _a.children;
export function changeMenuState(can) {
    if (can.menuCan) {
        for (const btn of menu) {
            if (getActualState(btn).contains('visivel')) {
                btn.classList.remove("visivel");
                btn.classList.add("escondido");
                can.updateCartCan();
            }
            else if (getActualState(btn).contains("escondido")) {
                btn.classList.remove("escondido");
                btn.classList.add("visivel");
                can.updateCartCan();
            }
        }
    }
    else {
        console.log(`You cant change Menu right now. Please disable Cart Menu first.`);
    }
}
function getActualState(btn) {
    return btn.classList;
}
