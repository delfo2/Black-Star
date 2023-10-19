import { Component, Input } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { SelectedProduct } from 'src/app/model/SelectedProduct';

@Component({
	selector: 'app-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.css', 'cart-item.responsive.component.css'],
})
export class CartItemComponent extends SelectedProductController {
	@Input()
	public override selectedProducts: SelectedProduct[] = [];
}
