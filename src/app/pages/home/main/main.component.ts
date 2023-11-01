import { Component } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { ProductsService } from 'src/app/services/ProductsService/Products.service';
import { ProductMessage } from 'src/app/shared/types/ProductPopUpObject';
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
