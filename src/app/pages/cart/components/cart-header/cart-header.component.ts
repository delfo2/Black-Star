import { Component, Input} from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { SelectedProduct } from 'src/app/model/SelectedProduct';

@Component({
	selector: 'app-cart-header',
	templateUrl: './cart-header.component.html',
	styleUrls: ['./cart-header.component.css'],
})
export class CartHeaderComponent extends SelectedProductController {
	@Input()
	public override selectedProducts: SelectedProduct[] = [];
}
