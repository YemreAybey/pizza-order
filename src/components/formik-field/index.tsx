import { FormFieldContainer, FormField } from '@src/components/formik-field/formik-field.styled';
import { FieldInputProps } from 'formik';
import React from 'react';

interface IFormikFieldProps extends FieldInputProps<unknown> {
	stretch: boolean;
	title: string;
	errors: Record<string, unknown>;
	touched: boolean;
	name: string;
	ml: string;
}

const FormikField = ({ stretch, title, errors, touched, name, ml, ...props }: IFormikFieldProps): JSX.Element => {
	const errorMessage = errors && touched && errors[name] && touched[name] ? errors[name] : null;

	return (
		<FormFieldContainer ml={ml} stretch={stretch}>
			<label htmlFor={name} style={{ fontSize: '12px', opacity: '50%' }}>
				{title}
			</label>

			<FormField bordercolor={errorMessage ? 'red' : 'rgba(57, 61, 67, 0.3)'} name={name} {...props} />
			{errorMessage && <span style={{ fontSize: '12px', color: 'red' }}>{errors[name]}</span>}
		</FormFieldContainer>
	);
};

export default FormikField;
