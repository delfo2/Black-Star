import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { SelectedProduct } from 'src/app/model/SelectedProduct';
import { ProductConfirmation, ProductMessage } from 'src/app/shared/types/ProductPopUpObject';
import { getAnimateDelay } from 'src/app/shared/utils/stylesFunctions';

@Component({
	selector: 'app-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.css', 'cart-item.responsive.component.css', 'cart-item.general.component.css'],
})
export class CartItemComponent extends SelectedProductController {
	@Input()
	public override selectedProducts: SelectedProduct[] = [];
	public getAnimateDelay = getAnimateDelay;
	@Output()
	public override Exception = new EventEmitter<ProductMessage>();
	@Output()
	public override Confirmation = new EventEmitter<ProductConfirmation>();
}
