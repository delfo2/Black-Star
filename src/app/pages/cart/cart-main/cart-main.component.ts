import { Component } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { SelectedProduct } from 'src/app/model/SelectedProduct';
import { ProductsService } from 'src/app/services/selected-products.service';
import { ProductConfirmation, ProductMessage } from 'src/app/shared/types/ProductPopUpObject';
import { WindowHelper } from 'src/app/shared/utils/WindowHelper';

@Component({
	selector: 'app-cart-main',
	templateUrl: './cart-main.component.html',
	styleUrls: ['./cart-main.component.css'],
})
export class CartMainComponent extends SelectedProductController {
	constructor() {
		super();
		WindowHelper.moveToUp();
		this.fetch(this.productsService.getProducts());
	}
	private productsService = new ProductsService();
	public override selectedProducts: SelectedProduct[] = [];

	public messageDialogObject: ProductMessage = {
		alive: false,
		description: '',
		reason: 'você atingiu a quantidade máxima para um produto individual.'
	}
	public disposeMessageDialog(): void {
		this.messageDialogObject.alive = false;
	}
	public showMessageDialog(productMessage: ProductMessage): void {
		this.messageDialogObject = productMessage;
	}

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
