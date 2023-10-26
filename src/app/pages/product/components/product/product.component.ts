import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { Product } from 'src/app/model/Product';
import { SelectedProduct } from 'src/app/model/SelectedProduct';
import { SizingChart } from 'src/app/shared/enums/MetricsEnum';
import { ProductMessage } from 'src/app/shared/types/ProductPopUpObject';
import { getProductPriceWithDiscount } from 'src/app/shared/utils/mathHelper';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css', 'product.responsive.component.css'],
})
export class ProductComponent extends SelectedProductController {
	public sizeArr: SizingChart[] = [
		SizingChart.PP,
		SizingChart.P,
		SizingChart.M,
		SizingChart.G,
		SizingChart.GG,
	];
	@Input()
	public product: Product | null = null;
	@Input()
	public products: Product[] = [];
	@Input()
	public override selectedProducts: SelectedProduct[] = [];
	@Output()
	public override Exception = new EventEmitter<ProductMessage>();
	public getProductPriceWithDiscount = getProductPriceWithDiscount;
}
