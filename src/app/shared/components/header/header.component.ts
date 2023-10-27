import { Component, Input } from '@angular/core';
import { Filters } from '../../enums/StylesEnums';
import { disableIfMobile } from '../../decorator/disableFunction';
import { isMobile } from '../../utils/deviceIndentifier';
import { getAnimateDelay } from '../../utils/stylesFunctions';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { SelectedProduct } from 'src/app/model/SelectedProduct';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [
		'./header.pesquisa.component.css',
		'./header.component.css',
		'./header.responsive.component.css',
	],
})
export class HeaderComponent extends SelectedProductController {
	@Input()
	public override selectedProducts: SelectedProduct[] = [];
	public buttonsStats = {
		search: Filters.off,
		menu: Filters.off,
		cart: Filters.off,
	};

	public showProductCart = false;
	public showMobileMenuOptions = false;

	public btnCartVisibility = true;
	public btnMenuVisibility = true;

	// search variables
	public searchMode = false;
	public searchVisibility : string;
	public searchBorder = '';
	public searchButtonBorder = '10%';

	public clothesSearch = new FormGroup({
		searchInput: new FormControl('', [
			Validators.required,
			Validators.pattern('[A-Za-zÀ-ÿ ]*'),
		]),
	});
	constructor(private router: Router) {
		super();
		this.searchVisibility = this.isMobile() ? 'none' : 'block';
	}

	// visibility modifiers
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
	// Form Controller
	public onSubmit(): void {
		if (this.clothesSearch.valid && this.clothesSearch.value.searchInput) {
			const search: string = this.clothesSearch.value.searchInput;
			this.router.navigate(['/list'], {
				queryParams: { q: search },
			});
		}
	}
	// html helpers
	public getAnimateDelay = getAnimateDelay;
	public isMobile = isMobile;

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
}
