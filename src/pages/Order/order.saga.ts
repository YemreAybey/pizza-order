import { IPlaceOrderAction, ORDER_ACTION_TYPES, resetState, togglePendingStatus } from '@src/pages/Order/order.actions';
import { IOrderState } from '@src/pages/Order/order.reducer';
import { IGlobalState } from '@src/redux/reducers';
import { MAIN_ROUTES } from '@src/shared/enums';
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';
import { takeLatest, delay, put, select } from 'redux-saga/effects';

function* placeOrderSaga(action: IPlaceOrderAction) {
	try {
		yield delay(2000);
		const { adress, pizzaType, toppings, totalPrice }: IOrderState = yield select((state: IGlobalState) => state.ORDER);

		toast.success('Successfully Placed the Order');
		yield put(togglePendingStatus());
		const toppingList: string[] = [];

		Object.keys(toppings).forEach(topping => {
			if (toppings[topping]) {
				toppingList.push(topping);
			}
		});
		console.log({ userInfo: adress, pizzaInfo: { pizzaType, toppings: toppingList, totalPrice }, cardInfo: action.data });
		yield put(resetState());
		yield put(push(MAIN_ROUTES.PIZZA_SELECTION));
	} catch (e) {
		console.log(e);
	}
}

function* orderSaga(): Generator {
	yield takeLatest(ORDER_ACTION_TYPES.PLACE_ORDER, placeOrderSaga);
}

export default orderSaga;
