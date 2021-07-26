import App from '@src/app';
import configureStore from '@src/store';
import { THEME, GlobalStyle } from '@src/theme';
import { history } from '@src/utils/history';
import { ConnectedRouter } from 'connected-react-router';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader from 'react-loader-spinner';
import { Provider } from 'react-redux';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ThemeProvider } from 'styled-components';
import { FallBackContainer } from './pages/Order/order.styled';

/**
 * This is used because of a problem of this library with css loader.
 */
injectStyle();

const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Suspense
				fallback={
					<FallBackContainer visible={true}>
						<Loader color="#00BFFF" height={100} type="Oval" visible={true} width={100} />
					</FallBackContainer>
				}
			>
				<ThemeProvider theme={THEME}>
					<GlobalStyle />
					<App />
				</ThemeProvider>
			</Suspense>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'),
);
