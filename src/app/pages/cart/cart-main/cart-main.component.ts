import { Component } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { Product } from 'src/app/model/Product';
import { SelectedProduct } from 'src/app/model/SelectedProduct';
import { ProductsService } from 'src/app/services/selected-products.service';
import { WindowHelper } from 'src/app/shared/utils/WindowHelper';

@Component({
	selector: 'app-cart-main',
	templateUrl: './cart-main.component.html',
	styleUrls: ['./cart-main.component.css'],
})
export class CartMainComponent extends SelectedProductController {
	constructor() {
		super();
		WindowHelper.moveToUp();
		this.fetch(this.productsService.getProducts());
	}
	private productsService = new ProductsService();
	public override selectedProducts: SelectedProduct[] = [];
}
