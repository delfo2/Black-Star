import { Component } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { ProductsService } from 'src/app/services/ProductsService/Products.service';
import { WindowHelper } from 'src/app/shared/utils/WindowHelper';

@Component({
	selector: 'app-address-main',
	templateUrl: './address-main.component.html',
	styleUrls: ['./address-main.component.css'],
})
export class AddressMainComponent extends SelectedProductController {
	constructor() {
		super();
		this.fetch(this.productsService.getProducts());
		WindowHelper.moveToUp();
	}

	private productsService = new ProductsService();
}
