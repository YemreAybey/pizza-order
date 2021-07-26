import { createReducer, IGlobalState } from '@src/redux/reducers';
import rootSaga from '@src/redux/sagas';
import { history } from '@src/utils/history';
import { routerMiddleware } from 'connected-react-router';
import { History, LocationState } from 'history';
import { createStore, applyMiddleware, compose, Middleware, Dispatch, Reducer, AnyAction, Store, StoreEnhancerStoreCreator } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

const DEVELOPMENT = 'development';

interface IStoreInjection {
	injectedReducers: { [k: string]: Reducer<keyof IGlobalState, AnyAction> };
	injectedSagas: { [k: string]: unknown };

	runSaga(saga: unknown): unknown;
}

export type InjectedStore = Store & IStoreInjection;

const configureStore = (initialState: Record<string, unknown> = {}, history: History<LocationState>): InjectedStore => {
	let composeEnhancers = compose;

	// If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
	/* istanbul ignore next */
	if (process.env.ENV === DEVELOPMENT && typeof window === 'object') {
		if (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) {
			composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({});
		}
	}

	const sagaMiddleware: SagaMiddleware<Record<string, unknown>> = createSagaMiddleware();

	// Create the store with two middlewares
	// 1. sagaMiddleware: Makes redux-sagas work
	// 2. routerMiddleware: Syncs the location/URL path to the state
	const middlewares: (SagaMiddleware<Record<string, unknown>> | Middleware<Record<string, unknown>, unknown, Dispatch>)[] = [
		sagaMiddleware,
		routerMiddleware(history),
	];

	const enhancers: ((next: StoreEnhancerStoreCreator) => StoreEnhancerStoreCreator<{ dispatch: unknown }, unknown>)[] = [applyMiddleware(...middlewares)];
	const store: Store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));

	const injectedStore: InjectedStore = {
		...store,
		injectedReducers: {},
		injectedSagas: {},
		runSaga: (saga: never) => sagaMiddleware.run(saga),
	};

	// Make reducers hot reloadable, see http://mxs.is/googmo
	/* istanbul ignore next */
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	if (module.hot) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		module.hot.accept('../redux/reducers', () => {
			injectedStore.replaceReducer(createReducer(injectedStore.injectedReducers));
		});
	}

	sagaMiddleware.run(rootSaga);

	return injectedStore;
};

const initialState = {};

export const store = configureStore(initialState, history);
