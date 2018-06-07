import { runSaga } from 'redux-saga';
import { fetchTopStoriesWorker, fetchStoryDetailsWorker } from '../saga';
import { FETCH_TOP_STORIES_SUCCESS, FETCH_ITEMS_DETAILS_SUCCESS } from '../action.types';
import appApi from 'app-api';

describe('Stories saga', () => {
    const getTopStoriesSpy = jest.spyOn(appApi.v0, 'getTopStories').mockImplementation(() => Promise.resolve([
        1, 2, 3, 4, 5, 6,
    ]));
    const getItemSpy = jest.spyOn(appApi.v0, 'getItem')
        .mockImplementationOnce(id => Promise.resolve({
            id, title: 'one', kids: [],
        }))
        .mockImplementationOnce(id => Promise.resolve({
            id, title: 'two', kids: [7],
        }))
        .mockImplementationOnce(id => Promise.resolve({
            id, title: 'three', kids: [8, 9],
        }));

    describe('Top Stories saga', () => {
        let dispatched: any;
        beforeAll(async () => {
            await runSaga({
                dispatch: (action) => { dispatched = action; },
                getState: () => ({ stories: [], ready: true }),
            }, fetchTopStoriesWorker, {});
        });
        test('calls asynchronously getTopStories', () => {
            expect(getTopStoriesSpy).toHaveBeenCalled();
            getTopStoriesSpy.mockClear();
        });
        test('the FETCH_TOP_STORIES_SUCCESS action is dispatched once', () => {
            expect(dispatched).toEqual({
                type: FETCH_TOP_STORIES_SUCCESS,
                itemIds: [1, 2, 3, 4, 5, 6],
            });
        });
    });
    describe('Story Details saga', () => {
        const dispatched: any[] = [];
        beforeAll(async () => {
            await runSaga({
                dispatch: (action) => { dispatched.push(action); },
                getState: () => ({ stories: [], ready: true }),
            }, fetchStoryDetailsWorker, { type: 'test', itemIds: [1,2,3] });
        });
        test('calls asynchronously getItem three times', () => {
            expect(getItemSpy).toHaveBeenCalledTimes(3);
            expect(getItemSpy).toHaveBeenCalledWith('1');
            expect(getItemSpy).toHaveBeenLastCalledWith('3');
        });
        test('the FETCH_ITEMS_DETAILS_SUCCESS action is dispatched 3 times', () => {
            expect(dispatched).toEqual([
                {
                    type: FETCH_ITEMS_DETAILS_SUCCESS,
                    items: [
                        { id: '1', title: 'one', kids: [] },
                        { id: '2', title: 'two', kids: [7] },
                        { id: '3', title: 'three', kids: [8,9] },
                    ],
                },
            ]);
        });
    });
});
