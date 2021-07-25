import { NamedExoticComponent } from 'react';
import { DefaultTheme, StyledComponent } from 'styled-components';

export interface IErrorMessages {
	required: string;
}

export const ERROR_MESSAGES: IErrorMessages = {
	required: 'This field is required',
};

export type StyledGenericType<U extends Record<undefined, unknown>> = StyledComponent<NamedExoticComponent, DefaultTheme, U, never>;
