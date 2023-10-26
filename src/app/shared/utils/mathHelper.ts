export function getProductPriceWithDiscount(value: number, discountPercentage: number): number {
	return value - value * (discountPercentage / 100);
}
export function getDiscountValue(value: number, discountPercentage: number): number {
	return value * (discountPercentage / 100);
}
