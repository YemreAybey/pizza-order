import { AdressProps } from '@src/pages/Adress';
import { lazy, LazyExoticComponent, FC } from 'react';

export const AdressPage: LazyExoticComponent<FC<AdressProps>> = lazy(() => import(/* webpackChunkName: 'AdressPage' */ './'));
