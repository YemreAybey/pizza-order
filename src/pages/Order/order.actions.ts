import { IAdressForm } from '../Adress/adress.contants';
import { IPizzaSelectionForm } from '../PizzaSelection/pizza-selection.constants';
import { ICardForm } from './order.contants';

export enum ORDER_ACTION_TYPES {
	PLACE_ORDER = '[Order] Place Order',
	TOGGLE_PENDING_STATUS = '[Order] Toggle Pending Status',
	SET_PIZZA_SELECTION = '[Order] Set Pizza Selection',
	SET_ADRESS_INFO = '[Order] Set Adress Info',
	SET_PIZZA_TYPE = '[Order] Set Pizza Type',
	SET_PIZZA_TOPPINGS = '[Order] Set Toppings',
	RESET_STATE = '[Order] Reset State',
}

export interface IPlaceOrderAction {
	type: ORDER_ACTION_TYPES.PLACE_ORDER;
	data: ICardForm;
}

export interface ISetPizzaSelectionAction {
	type: ORDER_ACTION_TYPES.SET_PIZZA_SELECTION;
	data: IPizzaSelectionForm;
}

export interface ITogglePendingStatusAction {
	type: ORDER_ACTION_TYPES.TOGGLE_PENDING_STATUS;
}

export interface ISetAdressInfoAction {
	type: ORDER_ACTION_TYPES.SET_ADRESS_INFO;
	data: IAdressForm;
}

export interface ISetPizzaTypeAction {
	type: ORDER_ACTION_TYPES.SET_PIZZA_TYPE;
	data: string;
}

export interface ISetToppingsAction {
	type: ORDER_ACTION_TYPES.SET_PIZZA_TOPPINGS;
	data: { name: string; value: boolean };
}

export interface IResetStateAction {
	type: ORDER_ACTION_TYPES.RESET_STATE;
}

export const placeOrder: (data: ICardForm) => IPlaceOrderAction = (data: ICardForm) => ({ type: ORDER_ACTION_TYPES.PLACE_ORDER, data });

export const setPizzaSelection: (data: IPizzaSelectionForm) => ISetPizzaSelectionAction = (data: IPizzaSelectionForm) => ({
	type: ORDER_ACTION_TYPES.SET_PIZZA_SELECTION,
	data,
});

export const togglePendingStatus: () => ITogglePendingStatusAction = () => ({ type: ORDER_ACTION_TYPES.TOGGLE_PENDING_STATUS });

export const setAdressInfo: (data: IAdressForm) => ISetAdressInfoAction = (data: IAdressForm) => ({
	type: ORDER_ACTION_TYPES.SET_ADRESS_INFO,
	data,
});

export const setPizzaType: (data: string) => ISetPizzaTypeAction = (data: string) => ({ type: ORDER_ACTION_TYPES.SET_PIZZA_TYPE, data });

export const setTopping: (data: { name: string; value: boolean }) => ISetToppingsAction = (data: { name: string; value: boolean }) => ({
	type: ORDER_ACTION_TYPES.SET_PIZZA_TOPPINGS,
	data,
});

export const resetState: () => IResetStateAction = () => ({ type: ORDER_ACTION_TYPES.RESET_STATE });

export type AnyOrderAction =
	| IPlaceOrderAction
	| ITogglePendingStatusAction
	| ISetPizzaSelectionAction
	| ISetAdressInfoAction
	| ISetToppingsAction
	| ISetPizzaTypeAction
	| IResetStateAction;
