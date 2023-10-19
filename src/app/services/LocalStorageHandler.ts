import { Product } from '../model/Product';
import { SelectedProduct } from '../model/SelectedProduct';
import { TypeChecker } from '../shared/utils/TypeChecker';

export class LocalSave {
	static saveSelectedProducts(selectedProducts: SelectedProduct[]): void {
		const selectedProductsId = selectedProducts.map((p) => [
			p.getId(),
			p.getAmount(),
		]);
		localStorage.setItem(
			'selectedProducts',
			JSON.stringify(selectedProductsId)
		);
	}
	static collectSelectedProducts(
		products: Product[]
	): SelectedProduct[] | null {
		let selectedProducts: SelectedProduct[] | null = [];
		let productsAmountValues = localStorage.getItem('selectedProducts');

		if (productsAmountValues) {
			productsAmountValues = JSON.parse(productsAmountValues);
			const selectedProductsNumbers =
				TypeChecker.isArrayOfArraysOfNumbers(productsAmountValues);
			if (selectedProductsNumbers && products.length > 0) {
				for (const productNumber of selectedProductsNumbers) {
					const index = products.findIndex(
						(p) => p.id === productNumber[0]
					);
					const selectedProduct = new SelectedProduct(
						products[index],
						productNumber[1]
					);
					selectedProducts.push(selectedProduct);
				}
			}
		}
		if (selectedProducts.length > 0) {
			return selectedProducts;
		}
		return null;
	}
	static deleteSelectedProducts(): void {
		localStorage.removeItem("selectedProducts");
	}
}
