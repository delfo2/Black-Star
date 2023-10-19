export class TypeChecker {
	static isArrayOfArraysOfNumbers(input: any): number[][] | null {
		if (!Array.isArray(input)) {
			return null;
		}

		for (const arr of input) {
			if (!Array.isArray(arr)) {
				return null;
			}

			for (const item of arr) {
				if (typeof item !== 'number') {
					return null;
				}
			}
		}

		return input;
	}
}
