import { Product } from './Product';

export class SelectedProduct {
	private amount: number = 1;
	private product: Product;
	private id: number;
	constructor(product: Product) {
		this.product = product;
		this.id = product.id;
	}
	public setAmount(number: number): void {
		this.amount = number;
	}
	public getAmount(): number {
		return this.amount;
	}
	public getProduct(): Product {
		return this.product;
	}
	public getId(): number {
		return this.id;
	}
}
