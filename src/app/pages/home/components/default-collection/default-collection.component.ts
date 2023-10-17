import { Component, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
	selector: 'app-default-collection',
	templateUrl: './default-collection.component.html',
	styleUrls: [
		'./default-collection.component.css',
		'default-collection.responsive.component.css',
	],
})
export class DefaultCollectionComponent {
	@Input()
	public products: Product[] = [];
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
