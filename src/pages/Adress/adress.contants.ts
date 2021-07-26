import { ERROR_MESSAGES } from '@src/shared/constants';
import { object, string, lazy, AnySchema, number } from 'yup';
import Lazy from 'yup/lib/Lazy';

export interface IAdressForm {
	name: string;
	city: string;
	adress: string;
	postalCode: string;
	houseNumber: number;
	streetName: string;
	phoneNumber: string;
}

export const ADRESS_VALIDATION_SCHEMA: Lazy<AnySchema> = lazy(() =>
	object().shape({
		name: string().nullable().required(ERROR_MESSAGES.required),
		city: string().nullable().required(ERROR_MESSAGES.required),
		adress: string().nullable().required(ERROR_MESSAGES.required).min(10, ERROR_MESSAGES.min(10)),
		postalCode: string().nullable().required(ERROR_MESSAGES.required),
		houseNumber: number().nullable().required(ERROR_MESSAGES.required),
		streetName: string().nullable().required(ERROR_MESSAGES.required),
		phoneNumber: string().nullable().required(ERROR_MESSAGES.required),
		// price: number()
		// 	.typeError('Fiyat girişi yaparken kuruş bilgisini nokta (.) İle giriniz.')
		// 	.nullable()
		// 	.required(ERROR_MESSAGES.required)
		// 	.test('decimalError', 'Lütfen noktadan sonra iki hane giriniz', (value: number) => {
		// 		const numbers = `${value}`.split('.');

		// 		return numbers.length < 2 || numbers[numbers.length - 1].length < 3;
		// 	}),
	}),
);

export const ADRESS_INITIAL_VALUES: IAdressForm = {
	name: '',
	city: '',
	adress: '',
	postalCode: '',
	houseNumber: null,
	streetName: '',
	phoneNumber: '',
};
