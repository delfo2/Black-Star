import { Component } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { SelectedProductsService } from 'src/app/services/selected-products.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
})
export class MainComponent {
	constructor(private selectedProducts: SelectedProductsService) {
		this.selectedProducts.getObservable().subscribe({
			next: (value) => {
				this.products.push(value);
				this.i = this.products.length;
			},
		})
	}
	public products : Product[] = [];
	public i = this.products.length;
	public increment(): void {
		this.selectedProducts.addTest();
	}
}
