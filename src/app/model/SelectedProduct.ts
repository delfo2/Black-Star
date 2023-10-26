import { SizingChart } from '../shared/enums/MetricsEnum';
import { Product } from './Product';

export class SelectedProduct {
	private amount: number = 1;
	private product: Product;
	private id: number;
	private size: SizingChart;
	constructor(product: Product, amount: number = 1) {
		this.product = product;
		this.id = product.id;
		this.amount = amount;
		this.size = product.details.size;
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
	public getSize(): SizingChart {
		return this.size;
	}
	public setSize(size: SizingChart) {
		this.size = size;
		this.product.details.size = size;
	}
}
