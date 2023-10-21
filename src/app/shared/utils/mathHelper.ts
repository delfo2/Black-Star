export function getProductPriceWithDiscount(value: number, discount: number): number {
	return value - value * (discount / 100);
}
export function getDiscountValue(value: number, discount: number): number {
	return value * (discount / 100);
}
