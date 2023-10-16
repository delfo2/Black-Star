import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { calculateAnimationDelay } from 'src/app/shared/utils/stylesFunctions';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css'],
})
export class CartComponent {
	@Input()
	public products: Product[] = [];
	public calculateAnimationDelay = calculateAnimationDelay;
}
