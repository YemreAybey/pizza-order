import { FieldAttributes } from 'formik';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IRadioProps = FieldAttributes<any>;

const RadioButton = ({ field: { name, value, onChange, onBlur }, id, label, ...props }: IRadioProps): JSX.Element => {
	return (
		<div>
			<input checked={id === value} id={id} name={name} onBlur={onBlur} onChange={onChange} type="radio" value={id} {...props} />
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export default RadioButton;
