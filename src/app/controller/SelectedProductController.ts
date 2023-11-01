import { EventEmitter } from '@angular/core';
import { Product } from '../model/Product';
import { SelectedProduct } from '../model/SelectedProduct';
import { LocalSave } from '../services/LocalStorage/LocalStorageHandler';
import {
	ProductConfirmation,
	ProductMessage,
} from '../shared/types/ProductPopUpObject';
import { SizingChart } from '../shared/enums/MetricsEnum';
import { MessageDialogController } from './MessageDialogController';

export class SelectedProductController extends MessageDialogController {
	public selectedProducts: SelectedProduct[] = [];
	public Exception = new EventEmitter<ProductMessage>();
	public Confirmation = new EventEmitter<ProductConfirmation>();

	public fetch(products: Product[]): void {
		const tempSelectedProducts =
			LocalSave.collectSelectedProducts(products);
		if (tempSelectedProducts) {
			this.selectedProducts = tempSelectedProducts;
		}
	}

	public removeSelectedProductById(
		id: number,
		confirmation: boolean = true
	): void {
		if (confirmation) {
			const index = this.findIndexProduct(id);
			this.selectedProducts.splice(index, 1);
			this.localSave();
		} else {
			this.Confirmation.emit({
				alive: true,
				question: 'Deseja deletar esse produto?',
				callbackFunction: (confirmation: boolean) => {
					this.removeSelectedProductById(id, confirmation);
				},
			});
		}
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

	public removeAllSelectedProduct(confirmation: boolean = true): void {
		if (confirmation) {
			this.selectedProducts.splice(0, this.selectedProducts.length);
			LocalSave.deleteSelectedProducts();
		} else {
			this.Confirmation.emit({
				alive: true,
				question: 'Deseja deletar TODOS os produtos?',
				callbackFunction: (confirmation: boolean) => {
					this.removeAllSelectedProduct(confirmation);
				},
			});
		}
	}

	public changeProductAmount(id: number, add: number = 1): void {
		const index = this.findIndexProduct(id);
		const actualAmount = this.selectedProducts[index].getAmount();
		if (actualAmount >= 10 && add === 1) {
			this.Exception.emit({
				alive: true,
				description:
					'você atingiu a quantidade máxima para um produto individual.',
				reason: 'Limite excedido',
			});
		} else if (actualAmount === 1 && add < 0) {
			this.Confirmation.emit({
				alive: true,
				question: 'Deseja deletar esse produto?',
				callbackFunction: (confirmation: boolean) => {
					this.removeSelectedProductById(id, confirmation);
				},
			});
		} else {
			this.selectedProducts[index].setAmount(actualAmount + add);
			this.localSave();
		}
	}

	public changeSelectedProductSize(
		id: number,
		size: SizingChart,
		products: Product[]
	) {
		const index = this.findIndexProduct(id);
		if (index < 0) {
			const product = products.find((p) => p.id === id);
			if (product) {
				product.details.size = size;
			}
		} else {
			this.selectedProducts[index].setSize(size);
			this.localSave();
		}
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
