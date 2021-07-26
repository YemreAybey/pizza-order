import { setPizzaType } from '@src/pages/Order/order.actions';
import { FieldAttributes } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IRadioProps = FieldAttributes<any>;

const RadioButton = ({ field: { name, value, onChange, onBlur }, id, label, ...props }: IRadioProps): JSX.Element => {
	const dispatch: Dispatch = useDispatch();

	const handleChange: (e) => void = e => {
		dispatch(setPizzaType(e.target.value));
		onChange(e);
	};

	return (
		<div>
			<input checked={id === value} data-testid={id} id={id} name={name} onBlur={onBlur} onChange={handleChange} type="radio" value={id} {...props} />
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export default RadioButton;
