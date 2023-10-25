import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-confirmation-dialog',
	templateUrl: './confirmation-dialog.component.html',
	styleUrls: ['./confirmation-dialog.component.css'],
})
export class ConfirmationDialogComponent {
	@Input()
	public question = 'Você tem certeza?';

	@Output()
	public buttonClicked = new EventEmitter<boolean>();
	public emitClick(confirmation: boolean): void {
		this.buttonClicked.emit(confirmation);
	}
}
