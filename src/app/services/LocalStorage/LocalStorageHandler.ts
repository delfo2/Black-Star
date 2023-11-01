import { AddressEssential } from 'src/app/shared/types/addressTypes';
import { Product } from '../../model/Product';
import { SelectedProduct } from '../../model/SelectedProduct';
import { LocalProductAmount } from '../../shared/types/storageTypes';
import { isInstanceOfAddressEssencial } from 'src/app/shared/utils/addressHelpers';

export class LocalSave {
	static saveSelectedProducts(selectedProducts: SelectedProduct[]): void {
		const selectedProductsId: LocalProductAmount[] = selectedProducts.map(
			(p) => ({ id: p.getId(), amount: p.getAmount(), size: p.getSize() })
		);
		try {
			localStorage.setItem(
				'selectedProducts',
				JSON.stringify(selectedProductsId)
			);
		} catch (error) {
			console.error(
				'Error while saving selected products to localStorage:',
				error
			);
		}
	}
	static collectSelectedProducts(
		products: Product[]
	): SelectedProduct[] | null {
		const productsAmountValues = JSON.parse(
			localStorage.getItem('selectedProducts') || '[]'
		);

		if (Array.isArray(productsAmountValues) && products.length > 0) {
			const selectedProducts = productsAmountValues
				.filter((productAmount) =>
					products.some((p) => p.id === productAmount.id)
				)
				.map((productAmount) => {
					const product = <Product>(
						products.find((p) => p.id === productAmount.id)
					);
					product.details.size = productAmount.size;
					return new SelectedProduct(product, productAmount.amount);
				});

			if (selectedProducts.length > 0) {
				return selectedProducts;
			}
		}
		return null;
	}
	static deleteSelectedProducts(): void {
		localStorage.removeItem('selectedProducts');
	}
	static saveUserAddress(address: AddressEssential): void {
		try {
			localStorage.setItem('userAddress', JSON.stringify(address));
		} catch (error) {
			console.error(
				'Error while saving user addres to localStorage:',
				error
			);
		}
	}
	static collectUserAddress(): AddressEssential | null {
		const userAddress = JSON.parse(
			localStorage.getItem('userAddress') || '[]'
		);

		if (isInstanceOfAddressEssencial(userAddress)) {
			return userAddress as AddressEssential;
		}
		return null;
	}
	static deleteUserAddress(): void {
		localStorage.removeItem('userAddress');
	}
}
