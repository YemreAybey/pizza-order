import { toast } from 'react-toastify';
import { takeLatest, delay, put, all, fork } from 'redux-saga/effects';

import { IPlaceOrderAction, ORDER_ACTION_TYPES, togglePendingStatus } from '../actions';

function* placeOrderSaga(action: IPlaceOrderAction) {
	try {
		yield delay(2000);
		toast.success('Successfully Placed the Order');
		yield put(togglePendingStatus());
		console.log(action.data);
	} catch (e) {
		console.log(e);
	}
}

function* mySaga(): Generator {
	yield takeLatest(ORDER_ACTION_TYPES.PLACE_ORDER, placeOrderSaga);
}

export default function* rootSaga(): Generator {
	yield all([fork(mySaga)]);
}
