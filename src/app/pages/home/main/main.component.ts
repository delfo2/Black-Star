import { Component } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/selected-products.service';
import { WindowHelper } from 'src/app/shared/utils/WindowHelper';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
})
export class MainComponent extends SelectedProductController {
	constructor() {
		super();
		WindowHelper.moveToUp();
		//coletando no LocalStorage os ids dos produtos selecionados
		//e escolhendo eles com base na lista de produtos atual;
		this.fetch(this.productsService.getProducts());
	}
	public productsService = new ProductsService();
}
