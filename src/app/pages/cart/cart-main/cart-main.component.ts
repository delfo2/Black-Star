import { Component } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { Product } from 'src/app/model/Product';
import { SelectedProduct } from 'src/app/model/SelectedProduct';
import { SelectedProductsService } from 'src/app/services/selected-products.service';

@Component({
	selector: 'app-cart-main',
	templateUrl: './cart-main.component.html',
	styleUrls: ['./cart-main.component.css'],
})
export class CartMainComponent extends SelectedProductController {
	constructor(private selectedProductsService: SelectedProductsService) {
		super();
		this.selectedProductsService.getObservable().subscribe({
			next: (value) => {
				this.products.push(value);
				this.selectProduct(value.id, this.products);
			},
		});
		this.selectedProductsService.fakeAdd();
	}
	public products: Product[] = [];
	public override selectedProducts: SelectedProduct[] = [];
}
