import { Component, Input } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { Product } from 'src/app/model/Product';
import { SelectedProduct } from 'src/app/model/SelectedProduct';

@Component({
	selector: 'app-default-collection',
	templateUrl: './default-collection.component.html',
	styleUrls: [
		'./default-collection.component.css',
		'default-collection.responsive.component.css',
	],
})
export class DefaultCollectionComponent extends SelectedProductController{
	constructor() {
		super();
	}
	@Input()
	public products: Product[] = [];
	@Input()
	public override selectedProducts: SelectedProduct[] = [];
	@Input()
	public title: string = 'Destaques';

	public getAnimationSide(number: number): string {
		let className = 'slideInRight';
		if (number % 3 === 0 || number % 4 === 0) {
			className = 'slideInLeft';
		}
		return className;
	}
}
