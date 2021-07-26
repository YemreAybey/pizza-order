import { IAdressForm } from '@src/pages/Adress/adress.contants';
import { AnyOrderAction, ORDER_ACTION_TYPES } from '@src/pages/Order/order.actions';
import { IPizzaSelectionForm } from '@src/pages/PizzaSelection/pizza-selection.constants';
import { PIZZA_TYPE_VALUES, TOPPING_VALUES } from '@src/shared/constants';

export enum PENDING_STATUSES {
	IDLE = 'idle',
	PENDING = 'pending',
}

export interface IOrderState {
	pendingStatus: PENDING_STATUSES;
	pizzaSelection: IPizzaSelectionForm;
	adress: IAdressForm;
	pizzaType: string;
	toppings: Record<string, boolean>;
	totalPrice: number;
}

const initialState = {
	pendingStatus: PENDING_STATUSES.IDLE,
	pizzaSelection: null,
	adress: null,
	pizzaType: 'small',
	toppings: {},
	totalPrice: 15,
};

export const orderReducer = (state: Readonly<IOrderState> = initialState, action: AnyOrderAction): IOrderState => {
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
		case ORDER_ACTION_TYPES.SET_PIZZA_SELECTION:
			return {
				...state,
				pizzaSelection: action.data,
			};
		case ORDER_ACTION_TYPES.SET_ADRESS_INFO:
			return {
				...state,
				adress: action.data,
			};
		case ORDER_ACTION_TYPES.SET_PIZZA_TYPE:
			return {
				...state,
				totalPrice: state.totalPrice - PIZZA_TYPE_VALUES[state.pizzaType] + PIZZA_TYPE_VALUES[action.data],
				pizzaType: action.data,
			};
		case ORDER_ACTION_TYPES.SET_PIZZA_TOPPINGS:
			return {
				...state,
				totalPrice: action.data.value ? state.totalPrice + TOPPING_VALUES[action.data.name] : state.totalPrice - TOPPING_VALUES[action.data.name],
				toppings: { ...state.toppings, [action.data.name]: action.data.value ?? undefined },
			};
		case ORDER_ACTION_TYPES.RESET_STATE:
			return {
				...initialState,
			};

		default:
			return state;
	}
};
