import { Component, Input } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { Product } from 'src/app/model/Product';
import { SelectedProduct } from 'src/app/model/SelectedProduct';
import { getAnimationSide } from 'src/app/shared/utils/stylesFunctions';

@Component({
	selector: 'app-default-collection',
	templateUrl: './default-collection.component.html',
	styleUrls: [
		'./default-collection.component.css',
		'default-collection.responsive.component.css',
	],
})
export class DefaultCollectionComponent extends SelectedProductController {
	constructor() {
		super();
	}
	@Input()
	public products: Product[] = [];
	@Input()
	public override selectedProducts: SelectedProduct[] = [];
	@Input()
	public title: string = 'Destaques';
	public getAnimationSide = getAnimationSide;
}
