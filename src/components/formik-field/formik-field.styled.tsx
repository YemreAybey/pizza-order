/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field } from 'formik';
import styled, { StyledComponent } from 'styled-components';

export const FormFieldContainer: StyledComponent<'div', any, Record<string, unknown>, never> = styled.div(props => ({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	color: `${props.theme.colors.darkBlue}`,
}));

export const FormField = styled(Field)(props => ({
	border: 'none',
	borderBottom: `1px solid ${props.bordercolor}`,
	padding: '10px 0',

	':focus': {
		outline: 'none',
	},
}));
