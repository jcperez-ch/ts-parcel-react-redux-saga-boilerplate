import { FETCH_ITEMS_DETAILS_SUCCESS } from '../action.types';
import { reducer } from '../reducer';
import { Story } from '../types';

describe('story reducer', () => {
    test('does not change the state when dispatching any other action', () => {
        const initialState: Story[] = [];
        const state = reducer(initialState, { type: 'any-other' });
        expect(state).toEqual(initialState);
    });
    test('changes the state when "FETCH_ITEMS_DETAILS_SUCCESS" is dispatched', () => {
        const initialState: Story[] = [];
        const items = [
            { id: 1, title: 'one', type: 'story' },
            { id: 2, title: 'two', type: 'story' },
            { id: 3, title: 'three', type: 'story' },
            { id: 4, title: 'four', type: 'comment' },
        ];
        const state = reducer(initialState, { type: FETCH_ITEMS_DETAILS_SUCCESS, items });
        expect(state).toEqual([
            { id: 1, title: 'one' },
            { id: 2, title: 'two' },
            { id: 3, title: 'three' },
        ]);
    });
    test('replaces the state when dispatching "FETCH_ITEMS_DETAILS_SUCCESS"', () => {
        const initialState = [
            { id: 1, title: 'one' },
            { id: 2, title: 'two' },
            { id: 3, title: 'three' },
        ];
        const items = [
            { id: 5, title: 'five', type: 'story' },
            { id: 6, title: 'six', type: 'comment' },
            { id: 7, title: 'seven', type: 'story' },
        ];
        const state = reducer(initialState, { type: FETCH_ITEMS_DETAILS_SUCCESS, items });
        expect(state).not.toBe(initialState);
        expect(state).toEqual([
            { id: 1, title: 'one' },
            { id: 2, title: 'two' },
            { id: 3, title: 'three' },
            { id: 5, title: 'five' },
            { id: 7, title: 'seven' },
        ]);
    });
});
