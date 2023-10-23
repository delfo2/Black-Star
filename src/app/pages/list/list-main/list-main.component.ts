import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/selected-products.service';
import {
	ClothesTypes,
	allClotheTypes,
} from 'src/app/shared/types/clothesTypes';
import { WindowHelper } from 'src/app/shared/utils/WindowHelper';
import { sliceString } from 'src/app/shared/utils/htmlHelpers';

@Component({
	selector: 'app-list-main',
	templateUrl: './list-main.component.html',
	styleUrls: ['./list-main.component.css'],
})
export class ListMainComponent extends SelectedProductController {
	constructor(private activedRoute: ActivatedRoute) {
		super();
		WindowHelper.moveToUp();
		this.activedRoute.queryParams.subscribe((params) => {
			this.productsInit(params['q']);
		});
		this.fetch(this.productsService.getProducts());
	}
	public productsService = new ProductsService();
	public products: Product[] = [];
	public title: string = 'Geral';

	public productsInit(q: any): void {
		WindowHelper.moveToUp();
		if (q && typeof q === 'string' && q.toLowerCase() !== 'geral') {
			if (
				q.toLowerCase() === 'feminino' ||
				q.toLowerCase() === 'masculino'
			) {
				this.products = this.productsService.getProductsByGender(q[0]);
				this.title = q;
			} else if (
				allClotheTypes.includes(q.toLowerCase() as ClothesTypes)
			) {
				this.products = this.productsService.getProductsByCategory(q);
				this.title = q;
			} else {
				this.products = this.productsService.getProductsBySearch(q);
				this.title = `Pesquisa por: ${sliceString(q, 20)}`;
			}
		} else {
			this.products = this.productsService.getProducts();
			this.title = 'geral';
		}
	}
}
