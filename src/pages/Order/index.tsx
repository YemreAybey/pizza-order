import { Button, ButtonContainer } from '@src/components/Button';
import FormikField from '@src/components/formik-field';
import { Text } from '@src/components/Text';
import { AutoInputRow } from '@src/pages/Adress/adress.styled';
import { CARD_INITIAL_VALUES, CARD_VALIDATION_SCHEMA, ICardForm } from '@src/pages/Order/order.contants';
import { IOrderState, PENDING_STATUSES } from '@src/pages/Order/order.reducer';
import { FallBackContainer } from '@src/pages/Order/order.styled';
import { CenterGrid, FormGeneralContainer, FormRowGrid } from '@src/pages/PizzaSelection/pizza-selection.styled';
import { IGlobalState } from '@src/redux/reducers';
import { Formik, Field } from 'formik';
import React from 'react';
import 'react-credit-cards/lib/styles.scss';
import Cards from 'react-credit-cards';
import Loader from 'react-loader-spinner';
import { usePaymentInputs, PaymentInputsWrapper } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { placeOrder } from './order.actions';

type OrderProps = {
	[k: string]: unknown;
};

const OrderPage: React.FC<OrderProps> = () => {
	const { pendingStatus, totalPrice } = useSelector<IGlobalState, IOrderState>(state => state.ORDER, shallowEqual) ?? {};
	const { meta, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps, wrapperProps } = usePaymentInputs();
	const dispatch: Dispatch = useDispatch();

	const validate: () => Record<string, unknown> = () => {
		const errors: Record<string, unknown> = {};

		if (meta.erroredInputs.cardNumber) {
			errors.cardNumber = meta.erroredInputs.cardNumber;
		}

		if (meta.erroredInputs.expiryDate) {
			errors.expiryDate = meta.erroredInputs.expiryDate;
		}

		if (meta.erroredInputs.cvc) {
			errors.cvc = meta.erroredInputs.cvc;
		}

		return errors;
	};

	const handleSubmit: (values: ICardForm) => void = (values: ICardForm) => {
		dispatch(placeOrder(values));
	};

	return (
		<FormGeneralContainer gap={'24px'}>
			<FallBackContainer visible={pendingStatus === PENDING_STATUSES.PENDING}>
				<Loader color="#00BFFF" height={100} type="Oval" visible={pendingStatus === PENDING_STATUSES.PENDING} width={100} />
			</FallBackContainer>
			<Text color={'darkGray'} fontSize={'x3Large'} textAlign={'center'}>
				Card Info
			</Text>
			<Formik initialValues={CARD_INITIAL_VALUES} onSubmit={handleSubmit} validate={validate} validationSchema={CARD_VALIDATION_SCHEMA}>
				{({ handleSubmit, errors, touched, values }) => (
					<form onSubmit={handleSubmit}>
						<FormRowGrid>
							<CenterGrid>
								<Cards cvc={values.cvc} expiry={values.expiryDate.split(' ').join('')} focused={meta.focused} name={values.name} number={values.cardNumber} />
							</CenterGrid>
							<AutoInputRow>
								<FormikField errors={errors} name={'name'} placeholder={'Enter name...'} title={'Name'} touched={touched} type={'input'} />
							</AutoInputRow>
							<AutoInputRow>
								<PaymentInputsWrapper {...wrapperProps}>
									<svg {...getCardImageProps({ images })} />
									<Field name="cardNumber">{({ field }) => <input {...getCardNumberProps({ onBlur: field.onBlur, onChange: field.onChange })} />}</Field>
									<Field name="expiryDate">{({ field }) => <input {...getExpiryDateProps({ onBlur: field.onBlur, onChange: field.onChange })} />}</Field>
									<Field name="cvc">{({ field }) => <input {...getCVCProps({ onBlur: field.onBlur, onChange: field.onChange })} />}</Field>
								</PaymentInputsWrapper>
							</AutoInputRow>

							<ButtonContainer>
								<Button onClick={handleSubmit} type={'button'} variant="PRIMARY">
									Submit
								</Button>
							</ButtonContainer>
						</FormRowGrid>
					</form>
				)}
			</Formik>
			<Text color={'darkGray'}>Total Price: ${totalPrice}</Text>
		</FormGeneralContainer>
	);
};

export default OrderPage;
