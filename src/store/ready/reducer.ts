import { AnyAction, Reducer } from 'redux';
import { APPLICATION_READY } from './action.types';

export const reducer: Reducer<boolean, AnyAction> = (state = false, { type }: AnyAction): boolean => (
    state || type === APPLICATION_READY
);
