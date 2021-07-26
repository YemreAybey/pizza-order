import { CheckBoxContainer } from '@src/components/CheckBox/check-box.styled';
import { setTopping } from '@src/pages/Order/order.actions';
import { FieldAttributes } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ICheckBoxProps = FieldAttributes<any>;

const CheckBox = ({ field: { name, onBlur, onChange, value }, id, label, ...props }: ICheckBoxProps): JSX.Element => {
	const dispatch: Dispatch = useDispatch();

	const handleChange: (e) => void = e => {
		dispatch(setTopping({ name, value: e.target.value === 'true' ? false : true }));
		onChange(e);
	};

	return (
		<CheckBoxContainer>
			<input id={id} name={name} onBlur={onBlur} onChange={handleChange} type="checkbox" value={value} {...props} />
			<label htmlFor={id}>{label}</label>
		</CheckBoxContainer>
	);
};

export default CheckBox;
