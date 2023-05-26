const menu = document.querySelector('[data-menu="carrinho"]');
export function changeCartProductsState(btn, can) {
    if (can.cartCan) {
        const classList = btn.classList;
        if (classList.contains('carrinho__botao-clicado')) {
            classList.remove('carrinho__botao-clicado');
            menu.classList.remove('visivel');
            menu.classList.add('escondido');
            can.updateMenuCan();
        }
        else {
            classList.add('carrinho__botao-clicado');
            menu.classList.remove('escondido');
            menu.classList.add('visivel');
            can.updateMenuCan();
        }
    }
    else {
        console.log(`You cant change Cart Menu right now. Please disable Menu first.`);
    }
}
