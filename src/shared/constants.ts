import { NamedExoticComponent } from 'react';
import { DefaultTheme, StyledComponent } from 'styled-components';

export interface IErrorMessages {
	required: string;
	min: (length: number) => string;
}

export const ERROR_MESSAGES: IErrorMessages = {
	required: 'This field is required',
	min: (length: number) => `Min. adress length should be ${length}`,
};

export const PIZZA_TYPE_VALUES: Record<string, number> = {
	small: 15,
	medium: 20,
	large: 25,
};

export const TOPPING_VALUES: Record<string, number> = {
	olives: 3,
	pepperoni: 4,
	mushrooms: 2,
	peppers: 2,
};

export type StyledGenericType<U extends Record<undefined, unknown>> = StyledComponent<NamedExoticComponent, DefaultTheme, U, never>;
