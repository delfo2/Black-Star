import { Component, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { SelectedProductsService } from 'src/app/services/selected-products.service';

@Component({
	selector: 'app-default-collection',
	templateUrl: './default-collection.component.html',
	styleUrls: [
		'./default-collection.component.css',
		'default-collection.responsive.component.css',
	],
})
export class DefaultCollectionComponent {
	constructor(private selectedProductsService: SelectedProductsService) {}
	@Input()
	public products: Product[] = [];
	@Input()
	public selectedProducts: Product[] = [];
	@Input()
	public title: string = 'Destaques';

	public getAnimationSide(number: number): string {
		let className = 'slideInRight';
		if (number % 3 === 0 || number % 4 === 0) {
			className = 'slideInLeft';
		}
		return className;
	}
	public addProduct(id: number): void {
		const product: Product | undefined = this.products.find(
			(p) => p.id === id
		);
		if(product) {
			this.selectedProducts.push(product);
		} else {
			console.error('não foi possível adicionar o produto selecionado!');
		}
	}
}
