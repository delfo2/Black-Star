import { Component, OnInit } from '@angular/core';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { LocalSave } from 'src/app/services/LocalStorage/LocalStorageHandler';
import { ProductsService } from 'src/app/services/ProductsService/Products.service';
import { AddressEssential } from 'src/app/shared/types/addressTypes';
import { WindowHelper } from 'src/app/shared/utils/WindowHelper';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
})
export class ConfirmationMainComponent
	extends SelectedProductController
	implements OnInit
{
	public productService = new ProductsService();
	public address: AddressEssential = {
		cep: '',
		logradouro: '',
		complemento: '',
		bairro: '',
		localidade: '',
		uf: '',
	};
	public userAcceptProducts = false;
	public userAcceptAddress = false;
	public addressIsValid = false;
	public orderConfirmed = false;

	public ngOnInit(): void {
		this.fetch(this.productService.getProducts());
		WindowHelper.moveToUp();
		this.collectAddress();
	}
	public confirmOrder(): void {
		LocalSave.deleteSelectedProducts();
		LocalSave.deleteUserAddress();
		this.orderConfirmed = true;
	}

	private collectAddress(): void {
		const address = LocalSave.collectUserAddress();
		if (address) {
			this.address = address;
			this.addressIsValid = true;
		}
	}
}
