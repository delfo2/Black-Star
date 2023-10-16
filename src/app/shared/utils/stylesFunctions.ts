export function calculateAnimationDelay(
	index: number,
	waitingTime: number = 100,
	decrement: number = 0
): string {
	let i = index >= 5 ? index % 5 : index;
	i = decrement - i <= 0 ? i : decrement - i;
	return `${i * waitingTime}ms`;
}
