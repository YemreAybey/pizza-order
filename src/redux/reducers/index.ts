import { AnyOrderAction, ORDER_ACTION_TYPES } from '@src/redux/actions';
import { history } from '@src/utils/history';
import { connectRouter, RouterState } from 'connected-react-router';
import { CombinedState, combineReducers, Reducer } from 'redux';

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

export interface IGlobalState {
	ORDER: IOrderState;
	router: RouterState;
}

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export const createReducer = (injectedReducers: Record<string, Reducer<keyof IGlobalState>> = {}): Reducer<CombinedState<IGlobalState>> =>
	combineReducers<IGlobalState>({
		router: connectRouter(history),
		ORDER: orderReducer,
		...injectedReducers,
	});
