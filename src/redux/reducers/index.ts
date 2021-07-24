import { AnyOrderAction, ORDER_ACTION_TYPES } from '@src/redux/actions';

enum PENDING_STATUSES {
	IDLE = 'idle',
	PENDING = 'pending',
}

export interface IOrderState {
	pendingStatus: PENDING_STATUSES;
}

const initialState = {
	pendingStatus: PENDING_STATUSES.IDLE,
};

const orderReducer = (state: Readonly<IOrderState> = initialState, action: AnyOrderAction): IOrderState => {
	switch (action.type) {
		case ORDER_ACTION_TYPES.PLACE_ORDER:
			return {
				...state,
				pendingStatus: PENDING_STATUSES.PENDING,
			};
		case ORDER_ACTION_TYPES.TOGGLE_PENDING_STATUS:
			return {
				...state,
				pendingStatus: state.pendingStatus === PENDING_STATUSES.PENDING ? PENDING_STATUSES.IDLE : PENDING_STATUSES.PENDING,
			};

		default:
			return state;
	}
};

export default orderReducer;
