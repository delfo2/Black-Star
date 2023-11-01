import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-address-field-default',
	templateUrl: './address-field-default.component.html',
	styleUrls: ['./address-field-default.component.css'],
})
export class AddressFieldDefaultComponent {
	@Input({ required: true }) public label = 'Campo';
	@Input({ required: true }) public value = '';
	@Input() public disabled = true;
	@Output()
	public onUpdate = new EventEmitter<string>();
	public updateValue(target: EventTarget | null): void {
		const input = target as HTMLInputElement;

		if(!this.disabled && input && input.value) {
			this.onUpdate.emit(input.value);
		}
	}
}
