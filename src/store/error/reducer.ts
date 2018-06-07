import { Reducer } from 'redux';
import { actionTypes as commentersActionTypes } from '../commenters';
import { actionTypes as readyActionTypes } from '../ready';
import { actionTypes as storiesActionTypes } from '../stories';
import { ErrorAction } from '../types';

const initialState = null;

export const reducer: Reducer<any, ErrorAction> = (state = initialState, { type, error }: ErrorAction): any => {
    switch (type) {
        case readyActionTypes.APPLICATION_READY:
            return initialState;
        case commentersActionTypes.FETCH_KID_ITEMS_DETAILS_ERROR:
        case storiesActionTypes.FETCH_ITEMS_DETAILS_ERROR:
        case storiesActionTypes.FETCH_TOP_STORIES_ERROR:
            return error;
        default:
            return state;
    }
};
