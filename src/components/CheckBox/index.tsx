import { CheckBoxContainer } from '@src/components/CheckBox/check-box.styled';
import { FieldAttributes } from 'formik';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ICheckBoxProps = FieldAttributes<any>;

const CheckBox = ({ field: { name, onBlur, onChange, value }, id, label, ...props }: ICheckBoxProps): JSX.Element => {
	// const [isChecked, setIsChecked] = useState<boolean>(false);
	// const handleChange = () => setIsChecked(!isChecked);

	return (
		<CheckBoxContainer>
			<input id={id} name={name} onBlur={onBlur} onChange={onChange} type="checkbox" value={value} {...props} />
			<label htmlFor={id}>{label}</label>
		</CheckBoxContainer>
	);
};

export default CheckBox;
