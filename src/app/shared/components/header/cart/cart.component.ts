import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { getAnimateDelay } from 'src/app/shared/utils/stylesFunctions';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css'],
})
export class CartComponent {
	@Input()
	public products: Product[] = [];
	public getAnimateDelay = getAnimateDelay;
	public removeById(id: number): void {
		const index = this.products.findIndex((product) => product.id === id);
		this.products.splice(index, 1);
		console.log(index);
	}
}
