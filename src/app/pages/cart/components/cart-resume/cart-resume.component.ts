import { Component, Input } from '@angular/core';
import { SelectedProduct } from 'src/app/model/SelectedProduct';

@Component({
	selector: 'app-cart-resume',
	templateUrl: './cart-resume.component.html',
	styleUrls: ['./cart-resume.component.css'],
})
export class CartResumeComponent {
	@Input()
	public selectedProducts: SelectedProduct[] = [];

	public getTotal(): number {
		const total: number[] = this.selectedProducts.map((product) => {
			return product.getAmount() * product.getProduct().price;
		});
		return total.reduce((acc, value) => acc + value, 0);
	}
	public getDiscount(): number {
		const total: number[] = this.selectedProducts.map((product) => {
			return product.getAmount() * product.getProduct().discount;
		});
		return total.reduce((acc, value) => acc + value, 0);
	}
}
