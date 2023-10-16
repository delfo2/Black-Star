export function calculateAnimationDelay(
	index: number,
	waitingTime = 100
): string {
	let i = index > 10 ? 0 : index;
	console.log(i);

	return `${i * waitingTime}ms`;
}
