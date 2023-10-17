import { Component } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { SelectedProductsService } from 'src/app/services/selected-products.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
})
export class MainComponent {
	constructor(private selectedProductsService: SelectedProductsService) {
		this.selectedProductsService.getObservable().subscribe({
			next: (value) => {
				this.products.push(value);
			},
		})
		this.selectedProductsService.fakeAdd();
	}
	public products : Product[] = [];
	public selectedProducts : Product[] = [];
}
