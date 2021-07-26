import { Button, ButtonContainer } from '@src/components/Button';
import CheckBox from '@src/components/CheckBox';
import RadioButton from '@src/components/Radio';
import { Text } from '@src/components/Text';
import { setPizzaSelection } from '@src/pages/Order/order.actions';
import { FormGeneralContainer, FormRow, TwoColumns } from '@src/pages/PizzaSelection/pizza-selection.styled';
import { IGlobalState } from '@src/redux/reducers';
import { MAIN_ROUTES } from '@src/shared/enums';
import { push } from 'connected-react-router';
import { Field, Formik } from 'formik';
import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IOrderState } from '../Order/order.reducer';
import { CHOOSE_PIZZA_VALIDATION_SCHEMA, IPizzaSelectionForm, PIZZA_SELECTION_INITIAL_VALUES } from './pizza-selection.constants';

export type PizzaSelectionProps = {
	[k: string]: unknown;
};

const PizzaSelection: React.FC<PizzaSelectionProps> = () => {
	const dispatch: Dispatch = useDispatch();
	const { totalPrice } = useSelector<IGlobalState, IOrderState>(state => state.ORDER, shallowEqual) ?? {};

	const handleSubmit: (values: IPizzaSelectionForm) => void = (values: IPizzaSelectionForm) => {
		dispatch(setPizzaSelection(values));
		dispatch(push(MAIN_ROUTES.ADRESS_PAGE));
	};

	return (
		<FormGeneralContainer>
			<Text color={'darkGray'} fontSize={'x3Large'} textAlign={'center'}>
				Select Pizza
			</Text>
			<Formik<IPizzaSelectionForm>
				enableReinitialize={true}
				initialValues={PIZZA_SELECTION_INITIAL_VALUES}
				onSubmit={handleSubmit}
				validationSchema={CHOOSE_PIZZA_VALIDATION_SCHEMA}
			>
				{({ handleSubmit }): JSX.Element => (
					<>
						<TwoColumns>
							<FormRow>
								<Field component={RadioButton} id="small" label="Small ($15)" name="pizzaType" />
								<Field component={RadioButton} id="medium" label="Medium ($20)" name="pizzaType" />
								<Field component={RadioButton} id="large" label="Large ($25)" name="pizzaType" />
							</FormRow>
							<FormRow>
								<Field component={CheckBox} id="olives" label="Olives (+$3)" name="olives" />
								<Field component={CheckBox} id="pepperoni" label="Pepperoni (+$4)" name="pepperoni" />
								<Field component={CheckBox} id="mushrooms" label="Mushrooms (+$2)" name="mushrooms" />
								<Field component={CheckBox} id="peppers" label="Peppers (+$2)" name="peppers" />
							</FormRow>
						</TwoColumns>
						<FormRow>
							<ButtonContainer>
								<Button onClick={handleSubmit} type={'button'} variant="PRIMARY">
									Proceed Adress Page
								</Button>
							</ButtonContainer>
						</FormRow>
					</>
				)}
			</Formik>
			<Text color={'darkGray'}>Total Price: ${totalPrice}</Text>
		</FormGeneralContainer>
	);
};

export default PizzaSelection;
