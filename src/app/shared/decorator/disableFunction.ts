import { isMobile } from "../utils/deviceIndentifier";

export function disableIfMobile() {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value;
		descriptor.value = function(...args: any[]) {
			if(isMobile()) {
				return originalMethod.apply(this, args);
			}
		}
		return descriptor;
	};
}
