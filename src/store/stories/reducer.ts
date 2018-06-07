import { AnyAction, Reducer } from 'redux';
import { Item } from 'app-api';
import { FETCH_TOP_STORIES, FETCH_ITEMS_DETAILS_SUCCESS } from './action.types';
import { Story } from './types';

const initialState: Story[] = [];

export const reducer: Reducer<Story[], AnyAction> = (state = initialState, { type, ...payload }: AnyAction): Story[] => {
    switch (type) {
        case FETCH_TOP_STORIES:
            return initialState;
        case FETCH_ITEMS_DETAILS_SUCCESS:
            return payload.items.reduce((newState: Story[], { id, title, type, url }: Item) => (
                type === 'story'
                    ? [...newState, { id, title, url }]
                    : newState
                ), state);
        default:
            return state;
    }
};
