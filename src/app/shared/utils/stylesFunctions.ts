export function getAnimateDelay(
	increment: number,
	baseDelay: number = 100,
	inverse: boolean = false,
	listLength: number = 1
): string {
	let positiveIncrement = Math.max(0, increment);
	positiveIncrement =
		positiveIncrement > 5 ? positiveIncrement % 5 : positiveIncrement;

	if (inverse && listLength > 1) {
		positiveIncrement = listLength - increment;
	}
	return `${positiveIncrement * baseDelay}ms`;
}
