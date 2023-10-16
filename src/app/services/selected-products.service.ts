import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { Observable, Subject } from 'rxjs';
import { SizingChart } from '../shared/enums/MetricsEnum';

@Injectable({
	providedIn: 'root',
})
export class SelectedProductsService {
	private selectedProducts: Subject<Product> = new Subject();
	private p = (id: number): Product => {
		return {
		id: id,
		title: `Product`,
		price: 23.99,
		discount: 0,
		details: {
			size: SizingChart.M,
			gender: 'M',
			rating: 1,
			views: 233,
		},
		render: {
			img: 'https://st4.depositphotos.com/2760050/31515/i/1600/depositphotos_315155296-stock-photo-hipster-winter-fashion-outfit-guy.jpg',
			description: `${id} Description for Product.`,
			material: 'Material description',
		}}
	};

	constructor() {}
	public getObservable(): Observable<Product> {
		return this.selectedProducts.asObservable();
	}
	public addProduct(product: Product) {
		for (let i = 0; i < 1; i++) {
			this.selectedProducts.next(this.p(i));
		}
	}
	public addTest() {
		this.addProduct(this.p(1));
	}
}
