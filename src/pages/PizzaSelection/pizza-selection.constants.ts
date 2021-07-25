import { ERROR_MESSAGES } from '@src/shared/constants';
import { object, string, lazy, AnySchema } from 'yup';
import Lazy from 'yup/lib/Lazy';

export interface IPizzaSelectionForm {
	pizzaType: string;
}

export const CHOOSE_PIZZA_VALIDATION_SCHEMA: Lazy<AnySchema> = lazy(() =>
	object().shape({
		pizzaType: string().nullable().required(ERROR_MESSAGES.required),
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

export const PIZZA_SELECTION_INITIAL_VALUES: IPizzaSelectionForm = {
	pizzaType: 'small',
};
