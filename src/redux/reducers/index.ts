import { IOrderState, orderReducer } from '@src/pages/Order/order.reducer';
import { history } from '@src/utils/history';
import { connectRouter, RouterState } from 'connected-react-router';
import { CombinedState, combineReducers, Reducer } from 'redux';

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
