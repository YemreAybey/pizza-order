import { ERROR_MESSAGES } from '@src/shared/constants';
import { object, string, lazy, AnySchema } from 'yup';
import Lazy from 'yup/lib/Lazy';

export interface IPizzaSelectionForm {
	pizzaType: string;
	pepperoni: boolean;
	peppers: boolean;
	mashrooms: boolean;
	olives: boolean;
}

export const CHOOSE_PIZZA_VALIDATION_SCHEMA: Lazy<AnySchema> = lazy(() =>
	object().shape({
		pizzaType: string().nullable().required(ERROR_MESSAGES.required),
	}),
);

export const PIZZA_SELECTION_INITIAL_VALUES: IPizzaSelectionForm = {
	pizzaType: 'small',
	pepperoni: false,
	peppers: false,
	mashrooms: false,
	olives: false,
};
