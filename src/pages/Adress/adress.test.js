import { store } from '@src/store';
import { THEME } from '@src/theme';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import AdressPage from './';

test('pizza selection page price logic', async () => {
	const { rerender } = render(
		<Provider store={store}>
			<ThemeProvider theme={THEME}>
				<AdressPage />
			</ThemeProvider>
		</Provider>,
	);

	const submitButton = screen.getByRole('button', {
		name: /proceed to order/i,
	});

	const adressInput = screen.getByPlaceholderText(/enter adress description\.\.\./i);
	let errorMessages = screen.queryAllByTestId(/errorMessage/i);

	expect(errorMessages.length).toBe(0);

	userEvent.type(adressInput, 'one');

	userEvent.click(submitButton);

	rerender(
		<Provider store={store}>
			<ThemeProvider theme={THEME}>
				<AdressPage />
			</ThemeProvider>
		</Provider>,
	);

	errorMessages = await screen.findAllByTestId(/errorMessage/i);

	expect(errorMessages.some(element => element.textContent === 'Min. adress length should be 10')).toBe(true);
});
