import { Product } from '../model/Product';
import { SelectedProduct } from '../model/SelectedProduct';

export class SelectedProductController {
	public selectedProducts: SelectedProduct[] = [];

	public removeSelectedProductById(id: number): void {
		const index = this.findIndexProduct(id);
		this.selectedProducts.splice(index, 1);
		console.log(`removing product with the id ${id}`);
	}

	public selectProduct(id: number, products: Product[]): void {
		const product: Product | undefined = products.find((p) => p.id === id);
		if (product) {
			if (this.productAlreadyExists(id)) {
				this.changeProductAmount(id);
			} else {
				this.selectedProducts.push(new SelectedProduct(product));
				console.log(`adding product with the id ${id}`);
			}
		} else {
			console.error('não foi possível adicionar o produto selecionado!');
		}
	}

	public removeAllSelectedProduct(): void {
		this.selectedProducts.splice(0, this.selectedProducts.length);
		console.log(`removing all product`);
	}

	public changeProductAmount(id: number, add: number = 1): void {
		console.log(`---------------------`);
		console.log(`changing product amount, the id is: ${id}`);
		const index = this.findIndexProduct(id);
		const actualAmount = this.selectedProducts[index].getAmount();
		console.log(`amount: ${actualAmount}`);
		this.selectedProducts[index].setAmount(actualAmount + add);
		console.log(`amount: ${this.selectedProducts[index].getAmount()}`);

		console.log(`---------------------`);
	}

	private findIndexProduct(id: number): number {
		return this.selectedProducts.findIndex(
			(product) => product.getId() === id
		);
	}

	private productAlreadyExists(id: number): boolean {
		return this.findIndexProduct(id) >= 0;
	}
}
