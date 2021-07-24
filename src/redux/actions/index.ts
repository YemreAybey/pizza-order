export enum ORDER_ACTION_TYPES {
	PLACE_ORDER = '[Order] Place Order',
	TOGGLE_PENDING_STATUS = '[Order] Toggle Pending Status',
}

export interface IPlaceOrderAction {
	type: ORDER_ACTION_TYPES.PLACE_ORDER;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
}

export interface ITogglePendingStatusAction {
	type: ORDER_ACTION_TYPES.TOGGLE_PENDING_STATUS;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const placeOrder: (data: any) => IPlaceOrderAction = (data: any) => ({ type: ORDER_ACTION_TYPES.PLACE_ORDER, data });

export const togglePendingStatus: () => ITogglePendingStatusAction = () => ({ type: ORDER_ACTION_TYPES.TOGGLE_PENDING_STATUS });

export type AnyOrderAction = IPlaceOrderAction | ITogglePendingStatusAction;
