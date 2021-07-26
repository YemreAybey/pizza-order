import orderSaga from '@src/pages/Order/order.saga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga(): Generator {
	yield all([fork(orderSaga)]);
}
