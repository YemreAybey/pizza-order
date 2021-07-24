import App from '@src/app';
import { store } from '@src/store';
import { THEME, GlobalStyle } from '@src/theme';
import { history } from '@src/utils/history';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ThemeProvider } from 'styled-components';

/**
 * This is used because of a problem of this library with css loader.
 */
injectStyle();

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<ThemeProvider theme={THEME}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'),
);
