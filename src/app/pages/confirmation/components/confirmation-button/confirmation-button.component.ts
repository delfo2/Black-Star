import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-confirmation-button',
	templateUrl: './confirmation-button.component.html',
	styleUrls: ['./confirmation-button.component.css'],
})
export class ConfirmationButtonComponent {
	@Input({ required: true }) public userAcceptProducts = false;
	@Input({ required: true }) public userAcceptAddress = false;
	@Output()
	public confirmationEmit = new EventEmitter<void>();
	public emitConfirmation(): void {
		this.confirmationEmit.emit();
	}
}
