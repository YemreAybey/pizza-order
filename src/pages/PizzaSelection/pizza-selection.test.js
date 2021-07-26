import { store } from '@src/store';
import { THEME } from '@src/theme';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PizzaSelection from './';

test('pizza selection page price logic', async () => {
	render(
		<Provider store={store}>
			<ThemeProvider theme={THEME}>
				<PizzaSelection />
			</ThemeProvider>
		</Provider>,
	);

	let TotalPriceText = screen.getByText(/total price/i);
	const MediumRadio = screen.getByTestId(/medium/i);
	const OliveCheckBox = screen.getByLabelText(/olives/i);

	expect(TotalPriceText.textContent).toContain('15');

	userEvent.click(MediumRadio);

	TotalPriceText = await screen.findByText(/total price/i);

	expect(TotalPriceText.textContent).toContain('20');

	userEvent.click(OliveCheckBox);

	TotalPriceText = await screen.findByText(/total price/i);

	expect(TotalPriceText.textContent).toContain('23');
});
