import { Component } from '@angular/core';
import { Filters } from '../../enums/StylesEnums';
import { disableIfMobile } from '../../decorator/disableFunction';
import { isMobile } from '../../utils/deviceIndentifier';
import { MenuOptions } from 'src/app/shared/components/header/MenuOptions';
import { SelectedProductsService } from 'src/app/services/selected-products.service';
import { Product } from 'src/app/model/Product';
import { getAnimateDelay } from '../../utils/stylesFunctions';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css', './header.responsive.component.css'],
})
export class HeaderComponent {
	constructor(private selectedProducts: SelectedProductsService) {
		this.selectedProducts.getObservable().subscribe({
			next: (value) => {
				this.products.push(value);

				this.cartNumber = this.convertCartNumber(this.products.length);
				this.showCartNumber = this.canShowCartNumber();
			},
		});
	}
	public products: Product[] = [];
	public cartNumber: number | string = this.products.length;
	public showCartNumber: boolean = this.canShowCartNumber();

	public buttonsStats = {
		search: Filters.off,
		menu: Filters.off,
		cart: Filters.off,
	};
	public menuOptions = MenuOptions.options;

	public showProductCart = false;
	public showMobileMenuOptions = false;

	public btnCartVisibility = true;
	public btnMenuVisibility = true;

	public searchMode = false;
	public searchVisibility = isMobile() ? 'none' : 'block';
	public searchBorder = '';
	public searchButtonBorder = '10%';

	public changeProductCartVisibility(): void {
		if (!this.showMobileMenuOptions) {
			this.showProductCart = !this.showProductCart;
		} else {
			this.showMobileMenuOptions = false;
			this.showProductCart = true;
		}
		this.switchMarkButton();
	}

	public changeMobileMenuOptionsVisibility(): void {
		if (!this.showProductCart) {
			this.showMobileMenuOptions = !this.showMobileMenuOptions;
		} else {
			this.showProductCart = false;
			this.showMobileMenuOptions = true;
		}
		this.switchMarkButton();
	}

	@disableIfMobile()
	public switchSearchMode(): void {
		this.btnCartVisibility = this.searchMode;
		this.btnMenuVisibility = this.searchMode;

		this.searchMode = !this.searchMode;
		this.searchStylesModifier();
		this.switchMarkButton();
	}

	public canShowCartNumber(): boolean {
		return (
			typeof this.cartNumber == 'string' ||
			(typeof this.cartNumber == 'number' && this.cartNumber > 0)
		);
	}

	public getAnimateDelay = getAnimateDelay;
	// public getAnimateDelay(i: number): string {
	// 	return `animation-delay: ${getAnimateDelay(i)};`;
	// }

	private switchMarkButton(): void {
		this.buttonsStats.search = this.searchMode ? Filters.on : Filters.off;
		this.buttonsStats.menu = this.showMobileMenuOptions
			? Filters.on
			: Filters.off;
		this.buttonsStats.cart = this.showProductCart
			? Filters.on
			: Filters.off;
	}

	private searchStylesModifier(): void {
		this.searchVisibility = this.changeSearchVisibility();
		this.searchBorder = this.changeSearchBorder();
		this.searchButtonBorder = this.changeSearchButtonBorder();
	}

	private changeSearchBorder(): string {
		return this.searchMode ? '2px solid black' : '';
	}

	@disableIfMobile()
	private changeSearchVisibility(): string {
		return this.searchMode ? 'block' : 'none';
	}

	private changeSearchButtonBorder(): string {
		return this.searchMode ? '0%' : '10%';
	}

	private convertCartNumber(number: number): number | string {
		return number > 9 ? '9+' : number;
	}
}
