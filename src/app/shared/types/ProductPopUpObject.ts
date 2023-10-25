export type ProductMessage = {
	alive: boolean;
	reason: string;
	description: string;
}

export type ProductConfirmation = {
	alive: boolean;
	question: string;
	callbackFunction: Function
}
