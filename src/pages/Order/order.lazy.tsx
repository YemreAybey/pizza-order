import { OrderProps } from '@src/pages/Order';
import { lazy, LazyExoticComponent, FC } from 'react';

export const OrderPage: LazyExoticComponent<FC<OrderProps>> = lazy(() => import(/* webpackChunkName: 'OrderPage' */ './'));
