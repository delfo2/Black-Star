import { Component, Input } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { SelectedProduct } from 'src/app/model/SelectedProduct';
import { getAnimateDelay } from 'src/app/shared/utils/stylesFunctions';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css'],
})
export class CartComponent extends SelectedProductController {
	@Input()
	public override selectedProducts: SelectedProduct[] = [];
	public getAnimateDelay = getAnimateDelay;
	public convertProductAmount(number: number): number | string {
		return number > 9 ? '9+' : number;
	}
}
