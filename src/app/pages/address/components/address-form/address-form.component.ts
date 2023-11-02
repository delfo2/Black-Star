import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalSave } from 'src/app/services/LocalStorage/LocalStorageHandler';
import { ViaCepService } from 'src/app/services/ViaCep/via-cep.service';
import {
	Address,
	AddressEssential,
	CepObject,
} from 'src/app/shared/types/addressTypes';
import {
	getOnlyEssentialFromAddress,
	isInstanceOfAddressError,
} from 'src/app/shared/utils/addressHelpers';
import { getAnimateDelay } from 'src/app/shared/utils/stylesFunctions';

@Component({
	selector: 'app-address-form',
	templateUrl: './address-form.component.html',
	styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent implements OnInit {
	public cepObject: CepObject = {
		cep: '',
		complete: false,
		loading: false,
		valid: true,
	};

	public addressForm = new FormGroup({});
	public address: AddressEssential = {
		cep: '',
		logradouro: '',
		complemento: '',
		bairro: '',
		localidade: '',
		uf: '',
	};
	public originalAddress: AddressEssential = {
		cep: '',
		logradouro: '',
		complemento: '',
		bairro: '',
		localidade: '',
		uf: '',
	};

	constructor(private viaCepService: ViaCepService, private router: Router) {}

	public ngOnInit() {
		const localAddress = LocalSave.collectUserAddress();
		console.log(localAddress);
		if (localAddress) {
			this.address = localAddress;
			this.originalAddress = localAddress;
			this.cepObject.cep = localAddress.cep;
			this.cepObject.complete = true;
			this.cepObject.valid = true;
		}
		console.log(this.cepObject);
	}

	public getCep(cepObject: CepObject): void {
		this.cepObject = cepObject;
		this.cepObject.loading = true;

		this.viaCepService
			.connect(this.cepObject.cep.replace('-', ''))
			.subscribe({
				next: (value) => {
					if (isInstanceOfAddressError(value)) {
						this.cepObject.valid = !value.erro;
					} else {
						this.cepObject.valid = true;
						this.address = getOnlyEssentialFromAddress(value);
						this.originalAddress =
							getOnlyEssentialFromAddress(value);
					}
				},
				complete: () => {
					setTimeout(() => {
						this.cepObject.loading = false;
					}, 500);
				},
			});
	}
	public onSubmit() {
		if (this.cepObject.valid && this.cepObject.complete) {
			LocalSave.saveUserAddress(this.address);
			this.router.navigate(['confirmation'])
		}
	}
	public disableField(field: string): boolean {
		if (this.cepObject.valid && this.cepObject.complete) {
			return field !== '';
		}
		return true;
	}
	public getAnimateDelay = getAnimateDelay;
}
