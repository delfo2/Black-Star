import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
	providedIn: 'root',
})
export class SelectedProductsService {
	public selectedProducts: Product[] = [];
	public counter: number = this.selectedProducts.length;
	constructor() {}
	public addProduct(product: Product) {
		this.selectedProducts.push(product);
	}
	public ii() {
		this.counter++;
	}
}
