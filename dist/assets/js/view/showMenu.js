var _a;
const menu = (_a = document.querySelector('[data-menu="div"]')) === null || _a === void 0 ? void 0 : _a.children;
export function changeMenuState(btn) {
    for (const btn of menu) {
        if (getActualState(btn).contains("visivel")) {
            btn.classList.remove("visivel");
            btn.classList.add("escondido");
        }
        if (getActualState(btn).contains("escondido")) {
            btn.classList.remove("escondido");
            btn.classList.add("visivel");
        }
    }
}
function getActualState(btn) {
    return btn.classList;
}
