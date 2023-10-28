import { Component, Input } from '@angular/core';
import { Filters } from '../../enums/StylesEnums';
import { isMobile } from '../../utils/deviceIndentifier';
import { getAnimateDelay } from '../../utils/stylesFunctions';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { SelectedProduct } from 'src/app/model/SelectedProduct';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css', './header.responsive.component.css'],
})
export class HeaderComponent extends SelectedProductController {
	@Input()
	public override selectedProducts: SelectedProduct[] = [];
	public buttonsStats = {
		menu: Filters.off,
		cart: Filters.off,
	};

	public showProductCart = false;
	public showMobileMenuOptions = false;

	public btnCartVisibility = true;
	public btnMenuVisibility = true;

	constructor() {
		super();
	}

	// visibility modifiers
	public changeButtonsVisibility(active: boolean): void {
		this.btnCartVisibility = !active;
		this.btnMenuVisibility = !active;
	}
	public changeCartAndMenuVisibility(whoClicked: 'menu' | 'cart'): void {
		this.showProductCart = whoClicked === 'cart' ? (!this.showProductCart) : false;
		this.showMobileMenuOptions = whoClicked === 'menu' ? (!this.showMobileMenuOptions) : false;
		this.switchMarkButton();
	}

	// html helpers
	public getAnimateDelay = getAnimateDelay;

	public convertCartNumber(number: number): number | string {
		return number > 9 ? '9+' : number;
	}
	public reducer(products: SelectedProduct[]): number {
		return products
			.map((p) => p.getAmount())
			.reduce((p, acc) => acc + p, 0);
	}

	// private modifiers

	private switchMarkButton(): void {
		this.buttonsStats.menu = this.showMobileMenuOptions
			? Filters.on
			: Filters.off;
		this.buttonsStats.cart = this.showProductCart
			? Filters.on
			: Filters.off;
	}
}
