import { Product } from '../model/Product';
import { SelectedProduct } from '../model/SelectedProduct';
import { LocalSave } from '../services/LocalStorageHandler';

export class SelectedProductController {
	public selectedProducts: SelectedProduct[] = [];

	public fetch(products: Product[]): void {
		const tempSelectedProducts =
			LocalSave.collectSelectedProducts(products);
		if (tempSelectedProducts) {
			this.selectedProducts = tempSelectedProducts;
		}
	}

	public removeSelectedProductById(id: number): void {
		const index = this.findIndexProduct(id);
		this.selectedProducts.splice(index, 1);
		this.localSave();
	}

	public selectProduct(id: number, products: Product[]): void {
		const product: Product | undefined = products.find((p) => p.id === id);
		if (product) {
			if (this.productAlreadyExists(id)) {
				this.changeProductAmount(id);
			} else {
				this.selectedProducts.push(new SelectedProduct(product));
				this.localSave();
			}
		}
	}

	public removeAllSelectedProduct(): void {
		this.selectedProducts.splice(0, this.selectedProducts.length);
		LocalSave.deleteSelectedProducts();
	}

	public changeProductAmount(id: number, add: number = 1): void {
		const index = this.findIndexProduct(id);
		const actualAmount = this.selectedProducts[index].getAmount();
		this.selectedProducts[index].setAmount(actualAmount + add);
		if(this.selectedProducts[index].getAmount() < 1) {
			this.removeSelectedProductById(id);
		}
		this.localSave();
	}

	private findIndexProduct(id: number): number {
		return this.selectedProducts.findIndex(
			(product) => product.getId() === id
		);
	}

	private localSave(): void {
		LocalSave.saveSelectedProducts(this.selectedProducts);
	}

	private productAlreadyExists(id: number): boolean {
		return this.findIndexProduct(id) >= 0;
	}
}
