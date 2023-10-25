import { Component, Input, Output, EventEmitter} from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { SelectedProduct } from 'src/app/model/SelectedProduct';
import { ProductConfirmation } from 'src/app/shared/types/ProductPopUpObject';

@Component({
	selector: 'app-cart-header',
	templateUrl: './cart-header.component.html',
	styleUrls: ['./cart-header.component.css'],
})
export class CartHeaderComponent extends SelectedProductController {
	@Input()
	public override selectedProducts: SelectedProduct[] = [];
	@Output()
	public override Confirmation = new EventEmitter<ProductConfirmation>();
}
