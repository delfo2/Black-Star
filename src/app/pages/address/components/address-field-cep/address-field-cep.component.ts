import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CepObject } from 'src/app/shared/types/addressTypes';
@Component({
	selector: 'app-address-field-cep',
	templateUrl: './address-field-cep.component.html',
	styleUrls: ['./address-field-cep.component.css'],
})
export class AddressFieldComponent {
	@Input({ required: true })
	public cepObject: CepObject = {
		cep: '',
		complete: false,
		loading: false,
		valid: true,
	};
	@Output()
	public cepObjectEmmiter = new EventEmitter<CepObject>();

	private regex = /[0-9]{5}-[0-9]{3}/g;
	private lastCepDigited = '';

	public emitValue(input: EventTarget | null) {
		const userCep = input as HTMLInputElement | null;

		if (userCep && typeof userCep.value === 'string') {
			const userCepClean = userCep.value.trim();
			this.regex.lastIndex = 0;
			const regexMatches = this.regex.exec(userCepClean);
			if (regexMatches) {
				this.cepObject.cep = regexMatches.join('').replace('-', '');
				this.cepObject.complete = true;
				if (this.lastCepDigited !== this.cepObject.cep) {
					this.cepObjectEmmiter.emit(this.cepObject);
				}
				this.lastCepDigited = this.cepObject.cep;
			} else {
				this.cepObject.complete = false;
			}
		}
	}
}
