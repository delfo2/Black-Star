import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address, AddressError } from 'src/app/shared/types/addressTypes';

@Injectable({
	providedIn: 'root',
})
export class ViaCepService {
	private url = 'https://viacep.com.br/ws/';
	private format = 'json/';
	constructor(private http: HttpClient) {}

	public connect(cep: string): Observable<Address | AddressError> {
		return this.http.get<Address | AddressError>(this.getUrl(cep));
	}
	private getUrl(cep: string): string {
		return `${this.url}${cep}/${this.format}`;
	}
}
