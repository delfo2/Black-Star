import {
	Component,
	Input,
	Output,
	EventEmitter
} from '@angular/core';

@Component({
	selector: 'app-message-dialog',
	templateUrl: './message-dialog.component.html',
	styleUrls: ['./message-dialog.component.css'],
})
export class MessageDialogComponent {
	@Input()
	public title = 'Algo inesperado aconteceu.';
	@Input()
	public description = 'não estava previsto.';
	@Input()
	public buttonText = 'Aceitar';

	@Output()
	public buttonClicked = new EventEmitter<void>();
	public emitClick(): void {
		this.buttonClicked.emit();
	}
}
