import { Button, ButtonContainer } from '@src/components/Button';
import CheckBox from '@src/components/CheckBox';
import { LazyImage } from '@src/components/Image';
import RadioButton from '@src/components/Radio';
import { Text } from '@src/components/Text';
import { FormGeneralContainer, FormRow, TwoColumns } from '@src/pages/PizzaSelection/pizza-selection.styled';
import { Field, Formik } from 'formik';
import React from 'react';
import { CHOOSE_PIZZA_VALIDATION_SCHEMA, IPizzaSelectionForm, PIZZA_SELECTION_INITIAL_VALUES } from './pizza-selection.constants';

type PizzaSelectionProps = {
	[k: string]: unknown;
};

const PizzaSelection: React.FC<PizzaSelectionProps> = () => {
	const handleSubmit: (values: IPizzaSelectionForm) => void = (values: IPizzaSelectionForm) => {
		console.log(values);
	};

	return (
		<FormGeneralContainer>
			<Text color={'darkGray'} fontSize={'x3Large'} textAlign={'center'}>
				Select Pizza
			</Text>
			<LazyImage name="pizza.jpeg" />
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
								<Field component={RadioButton} id="large" label="Large ($20)" name="pizzaType" />
							</FormRow>
							<FormRow>
								<Field component={CheckBox} id="small" label="Olives (+$3)" name="olives" />
								<Field component={CheckBox} id="medium" label="Pepperoni (+$4)" name="pepperoni" />
								<Field component={CheckBox} id="large" label="Mushrooms (+$2)" name="mushrooms" />
								<Field component={CheckBox} id="large" label="Peppers (+$2)" name="peppers" />
							</FormRow>
						</TwoColumns>
						<FormRow>
							<ButtonContainer>
								<Button onClick={handleSubmit} variant="PRIMARY">
									Proceed To Order
								</Button>
							</ButtonContainer>
						</FormRow>
					</>
				)}
			</Formik>
		</FormGeneralContainer>
	);
};

export default PizzaSelection;
