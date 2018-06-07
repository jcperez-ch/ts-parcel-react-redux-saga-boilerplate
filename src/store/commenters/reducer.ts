import { AnyAction, Reducer } from 'redux';
import { Item } from 'app-api';
import { Commenter } from './types';
import { actionTypes as storiesActionTypes } from '../stories';
import { FETCH_KID_ITEMS_DETAILS_SUCCESS } from './action.types';

const initialState: Commenter = {};

export const reduceCommenterCount = (state: Commenter, { items }: { items: Item[] }) => {
    const filteredItems = items.filter((item: Item) => (
        item !== null && item.type === 'comment' && !item.deleted
    ));
    if (filteredItems.length === 0) {
        return state;
    }
    return filteredItems.reduce((newState, { by }) => ({
        ...newState,
        [by]: Object.prototype.hasOwnProperty.call(newState, by)
            ? newState[by] + 1
            : 1,
    }), state);
};

export const reducer: Reducer<Commenter, AnyAction> = (state = initialState, { type, ...payload }: AnyAction): Commenter => {
    switch (type) {
        case storiesActionTypes.FETCH_TOP_STORIES:
            return initialState;
        case FETCH_KID_ITEMS_DETAILS_SUCCESS:
            return reduceCommenterCount(state, payload as { items: Item[] });
        default:
            return state;
    }
};
