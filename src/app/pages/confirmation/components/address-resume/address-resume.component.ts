import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AddressEssential } from 'src/app/shared/types/addressTypes';

@Component({
	selector: 'app-address-resume',
	templateUrl: './address-resume.component.html',
	styleUrls: ['./address-resume.component.css'],
})
export class AddressResumeComponent {
	@Input()
	public address: AddressEssential = {
		cep: '',
		logradouro: '',
		complemento: '',
		bairro: '',
		localidade: '',
		uf: '',
	};
	@Output()
	public buttonClicked = new EventEmitter<boolean>();
	public emitConfirmation(value: boolean): void {
		this.buttonClicked.emit(value);
	}
}
