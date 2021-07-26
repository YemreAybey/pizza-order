import { AdressPage } from '@src/pages/Adress/adress.lazy';
import { OrderPage } from '@src/pages/Order/order.lazy';
import { PizzaSelectionPage } from '@src/pages/PizzaSelection/pizza-selection.lazy';
import { MAIN_ROUTES } from '@src/shared/enums';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

type AppProps = {
	[k: string]: unknown;
};

const App: React.FC<AppProps> = () => {
	return (
		<div>
			<ToastContainer autoClose={3000} />
			<Switch>
				<Route exact component={PizzaSelectionPage} path={MAIN_ROUTES.PIZZA_SELECTION} />
				<Route exact component={AdressPage} path={MAIN_ROUTES.ADRESS_PAGE} />
				<Route exact component={OrderPage} path={MAIN_ROUTES.ORDER} />
			</Switch>
		</div>
	);
};

export default App;
