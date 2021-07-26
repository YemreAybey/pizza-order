import { PizzaSelectionProps } from '@src/pages/PizzaSelection';
import { lazy, LazyExoticComponent, FC } from 'react';

export const PizzaSelectionPage: LazyExoticComponent<FC<PizzaSelectionProps>> = lazy(() => import(/* webpackChunkName: 'PizzaSelection' */ './'));
