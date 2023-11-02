import { Address, AddressError, AddressEssential } from '../types/addressTypes';

export function isInstanceOfAddressError(obj: any): obj is AddressError {
	return 'erro' in obj;
}

export function isInstanceOfAddressEssencial(
	obj: any
): obj is AddressEssential {
	return (
		'cep' in obj &&
		'logradouro' in obj &&
		'complemento' in obj &&
		'bairro' in obj &&
		'localidade' in obj &&
		'uf' in obj
	);
}

export function getOnlyEssentialFromAddress(
	address: Address
): AddressEssential {
	return {
		cep: address.cep,
		logradouro: address.logradouro,
		complemento: address.complemento,
		bairro: address.bairro,
		localidade: address.localidade,
		uf: address.uf,
	};
}
