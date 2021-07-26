import Order from '@src/pages/Order';
import PizzaSelection from '@src/pages/PizzaSelection/';
import { MAIN_ROUTES } from '@src/shared/enums';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AdressPage from './pages/Adress';

type AppProps = {
	[k: string]: unknown;
};

const App: React.FC<AppProps> = () => {
	return (
		<div>
			<ToastContainer autoClose={3000} />
			<Switch>
				<Route exact component={PizzaSelection} path={MAIN_ROUTES.PIZZA_SELECTION} />
				<Route exact component={AdressPage} path={MAIN_ROUTES.ADRESS_PAGE} />
				<Route exact component={Order} path={MAIN_ROUTES.ORDER} />
			</Switch>
		</div>
	);
};

export default App;
