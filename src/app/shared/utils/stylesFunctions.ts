export function getAnimateDelay(
	increment: number,
	baseDelay: number = 100,
	inverse: boolean = false,
	listLength: number = 1,
	ignoreLimit: boolean = false
): string {
	let positiveIncrement = Math.max(0, increment);
	if(!ignoreLimit) {
		positiveIncrement =
		positiveIncrement > 5 ? positiveIncrement % 5 : positiveIncrement;
	}

	if (inverse && listLength > 1) {
		positiveIncrement = listLength - increment;
	}
	return `${positiveIncrement * baseDelay}ms`;
}

export function getAnimationSide(number: number): string {
	let className = 'slideInBottom';
	if (number % 3 === 0 || number % 4 === 0) {
		className = 'slideInTop';
	}
	return className;
}
