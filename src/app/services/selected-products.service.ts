import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { Observable, Subject } from 'rxjs';
import { SizingChart } from '../shared/enums/MetricsEnum';
import { ClothesTypes } from '../shared/types/clothesTypes';

@Injectable({
	providedIn: 'root',
})
export class SelectedProductsService {
	private selectedProducts: Subject<Product> = new Subject();
	private p = (
		id: number,
		src: string = 'https://st4.depositphotos.com/2760050/31515/i/1600/depositphotos_315155296-stock-photo-hipster-winter-fashion-outfit-guy.jpg',
		type: ClothesTypes = 'moletom'
	): Product => {
		return {
			id: id,
			title: `Product`,
			price: 23.99,
			discount: 0,
			details: {
				size: SizingChart.M,
				gender: 'M',
				rating: 1,
				type: type,
				views: 233,
			},
			render: {
				img: src,
				description: `${id} Description for Product.`,
				material: 'Material description',
			},
		};
	};

	constructor() {}
	public getObservable(): Observable<Product> {
		return this.selectedProducts.asObservable();
	}
	public addProduct(product: Product) {
		this.selectedProducts.next(product);
	}
	public addTest() {
		for (let i = 0; i < 5; i++) {
			this.addProduct(this.p(1));
		}
	}
	public fakeAdd() {
		this.addProduct(
			this.p(2, '../../../../../assets/img/webp/inverno1.webp')
		);
		this.addProduct(
			this.p(3, '../../../../../assets/img/webp/inverno2.webp', 'conjunto')
		);
		this.addProduct(
			this.p(4, '../../../../../assets/img/webp/inverno3.webp', 'manga longa')
		);
		this.addProduct(
			this.p(5, '../../../../../assets/img/webp/inverno4.webp', 'camisa')
		);
		this.addProduct(
			this.p(1, '../../../../../assets/img/webp/modelocelb.webp')
		);
	}
}
