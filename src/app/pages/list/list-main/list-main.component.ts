import { Component } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { Product } from 'src/app/model/Product';
import { SelectedProductsService } from 'src/app/services/selected-products.service';
import { WindowHelper } from 'src/app/shared/utils/WindowHelper';

@Component({
	selector: 'app-list-main',
	templateUrl: './list-main.component.html',
	styleUrls: ['./list-main.component.css'],
})
export class ListMainComponent extends SelectedProductController {
	constructor(private selectedProductsService: SelectedProductsService) {
		super();
		WindowHelper.moveToUp();
		this.selectedProductsService.getObservable().subscribe({
			next: (value) => {
				this.products.push(value);
			},
		});
		this.selectedProductsService.fakeAdd();
		this.fetch(this.products);
	}
	public products: Product[] = [];
}
