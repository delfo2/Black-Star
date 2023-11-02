import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-accept-resume',
	templateUrl: './accept-resume.component.html',
	styleUrls: ['./accept-resume.component.css'],
})
export class AcceptResumeComponent {
	@Input({ required: true }) public legend = 'campo';
	@Input({ required: true }) public option1 = 'opção1';
	@Input({ required: true }) public option2 = 'opção2';
	@Input({ required: true }) public fieldName = 'acceptOrReject';

	@Output()
	public buttonClicked = new EventEmitter<boolean>();
	public emitClick(value: boolean): void {
		this.buttonClicked.emit(value);
	}
}
