import { ERROR_MESSAGES } from '@src/shared/constants';
import { object, string, lazy, AnySchema, number } from 'yup';
import Lazy from 'yup/lib/Lazy';

export interface ICardForm {
	cardNumber: string;
	expiryDate: string;
	cvc: string;
	name: string;
}

export const CARD_VALIDATION_SCHEMA: Lazy<AnySchema> = lazy(() =>
	object().shape({
		cvc: number().nullable().required(ERROR_MESSAGES.required),
		expiryDate: string().nullable().required(ERROR_MESSAGES.required),
		name: string().nullable().required(ERROR_MESSAGES.required),
		cardNumber: string().nullable().required(ERROR_MESSAGES.required),
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

export const CARD_INITIAL_VALUES: ICardForm = {
	cardNumber: '',
	expiryDate: '',
	cvc: '',
	name: '',
};
