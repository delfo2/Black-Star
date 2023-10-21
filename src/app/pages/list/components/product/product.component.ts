import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { getAnimationSide } from 'src/app/shared/utils/stylesFunctions';
import { getProductPriceWithDiscount } from 'src/app/shared/utils/mathHelper';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css'],
})
export class ProductComponent {
	@Input()
	public products: Product[] = [];
	public getAnimationSide = getAnimationSide;
	public getProductPriceWithDiscount = getProductPriceWithDiscount;
}
