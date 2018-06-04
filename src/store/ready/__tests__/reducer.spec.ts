import { APPLICATION_READY } from '../action.types';
import { reducer } from '../reducer';

describe('ready reducer', () => {
    test('does not change the state when dispatching any other action and the state itself is not ready', () => {
        const state = reducer(false, { type: 'any-other' });
        expect(state).toBe(false);
    });
    test('changes the state when the state is not ready and "APPLICATION_READY" is dispatched', () => {
        const state = reducer(false, { type: APPLICATION_READY });
        expect(state).toBe(true);
    });
    test('does not change the state when dispatching "APPLICATION_READY" and the state itself is ready already', () => {
        const state = reducer(true, { type: 'any-other' });
        expect(state).toBe(true);
    });
});
