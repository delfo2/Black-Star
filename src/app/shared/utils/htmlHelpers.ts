export function sliceString(string: string, size: number): string {
	if(string.length > size) {
		return string.slice(0, size) + '...';
	}
	return string
}
