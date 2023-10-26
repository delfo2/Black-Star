import { ProductMessage } from "../shared/types/ProductPopUpObject";

export class MessageDialogController {
	public messageDialogObject: ProductMessage = {
		alive: false,
		description: '',
		reason: 'você atingiu a quantidade máxima para um produto individual.'
	}
	public disposeMessageDialog(): void {
		this.messageDialogObject.alive = false;
	}
	public showMessageDialog(productMessage: ProductMessage): void {
		this.messageDialogObject = productMessage;
	}
}
