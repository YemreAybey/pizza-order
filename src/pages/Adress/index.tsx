import { Button, ButtonContainer } from '@src/components/Button';
import FormikField from '@src/components/formik-field';
import { Text } from '@src/components/Text';
import { ADRESS_INITIAL_VALUES, ADRESS_VALIDATION_SCHEMA, IAdressForm } from '@src/pages/Adress/adress.contants';
import { AutoInputRow } from '@src/pages/Adress/adress.styled';
import { setAdressInfo } from '@src/pages/Order/order.actions';
import { FormGeneralContainer, FormRow } from '@src/pages/PizzaSelection/pizza-selection.styled';
import { MAIN_ROUTES } from '@src/shared/enums';
import { push } from 'connected-react-router';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

export type AdressProps = {
	[k: string]: unknown;
};

const AdressPage: React.FC<AdressProps> = () => {
	const dispatch: Dispatch = useDispatch();

	const handleSubmit: (values: IAdressForm) => void = (values: IAdressForm) => {
		dispatch(setAdressInfo(values));
		dispatch(push(MAIN_ROUTES.ORDER));
	};

	return (
		<FormGeneralContainer gap={'24px'}>
			<Text color={'darkGray'} fontSize={'x3Large'} textAlign={'center'}>
				Enter Adress Info
			</Text>
			<Formik<IAdressForm> enableReinitialize={true} initialValues={ADRESS_INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={ADRESS_VALIDATION_SCHEMA}>
				{({ handleSubmit, touched, errors }): JSX.Element => (
					<>
						<AutoInputRow>
							<FormikField errors={errors} name={'name'} placeholder={'Full Name...'} title={'Name'} touched={touched} type={'input'} />
							<FormikField errors={errors} name={'city'} placeholder={'Enter city...'} title={'City'} touched={touched} type={'input'} />
						</AutoInputRow>
						<AutoInputRow>
							<FormikField errors={errors} name={'streetName'} placeholder={'Enter street name...'} title={'Street'} touched={touched} type={'input'} />
							<FormikField errors={errors} name={'houseNumber'} placeholder={'Enter house number'} title={'House Number'} touched={touched} type={'number'} />
						</AutoInputRow>
						<AutoInputRow>
							<FormikField
								errors={errors}
								name={'adress'}
								placeholder={'Enter adress description...'}
								title={'Adress Description'}
								touched={touched}
								type={'input'}
							/>
						</AutoInputRow>
						<AutoInputRow>
							<FormikField errors={errors} name={'postalCode'} placeholder={'Postal Code...'} title={'Postal Code'} touched={touched} type={'input'} />
							<FormikField errors={errors} name={'phoneNumber'} placeholder={'Enter phone...'} title={'Phone'} touched={touched} type={'input'} />
						</AutoInputRow>
						<FormRow>
							<ButtonContainer>
								<Button onClick={handleSubmit} type={'button'} variant="PRIMARY">
									Proceed to Order
								</Button>
							</ButtonContainer>
						</FormRow>
					</>
				)}
			</Formik>
		</FormGeneralContainer>
	);
};

export default AdressPage;
