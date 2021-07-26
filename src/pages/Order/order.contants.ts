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
	}),
);

export const CARD_INITIAL_VALUES: ICardForm = {
	cardNumber: '',
	expiryDate: '',
	cvc: '',
	name: '',
};
