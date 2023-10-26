import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { SelectedProduct } from 'src/app/model/SelectedProduct';
import { ProductsService } from 'src/app/services/selected-products.service';
import { ProductConfirmation } from 'src/app/shared/types/ProductPopUpObject';
import { WindowHelper } from 'src/app/shared/utils/WindowHelper';

@Component({
	selector: 'app-cart-main',
	templateUrl: './cart-main.component.html',
	styleUrls: ['./cart-main.component.css'],
})
export class CartMainComponent extends SelectedProductController {
	constructor(private location: Location) {
		super();
		WindowHelper.moveToUp();
		this.fetch(this.productsService.getProducts());
	}
	public goBack(): void {
		this.location.back();
	}

	private productsService = new ProductsService();
	public override selectedProducts: SelectedProduct[] = [];

	public productConfirmation : ProductConfirmation = {
		alive: false, question: "Aceita?", callbackFunction: function(){}
	}
	public showConfirmationDialog(productConfirmation : ProductConfirmation): void {
		this.productConfirmation = productConfirmation;
	}
	public confirmationDialogHandler(confirmation: boolean) {
		this.disposeConfirmationDialog();
		if(confirmation) {
			this.productConfirmation.callbackFunction(confirmation);
		}
	}
	private disposeConfirmationDialog(): void {
		this.productConfirmation.alive = false;
	}
}
