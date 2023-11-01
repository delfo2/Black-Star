export interface Address {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
	ibge: string;
	gia: string;
	ddd: string;
	siafi: string;
}

export interface AddressEssential {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
}

export interface AddressError {
	erro: boolean;
}

export interface CepObject {
	cep: string;
	complete: boolean;
	loading: boolean;
	valid: boolean;
}
