import { all, call, put, takeEvery } from 'redux-saga/effects';
import appApi, { Item } from 'app-api';
import { 
    fetchTopStoriesSuccess, 
    fetchTopStoriesError, 
    fetchItemDetailsSuccess,
    fetchItemDetailsError,
} from './action.creators';
import { FETCH_TOP_STORIES_SUCCESS, FETCH_TOP_STORIES } from './action.types';
import { ItemIdsAction } from './types';

export function* fetchTopStoriesWorker() {
    try {
        const topStoriesIds: number[] = yield call(appApi.v0.getTopStories);
        yield put(fetchTopStoriesSuccess(topStoriesIds.filter((_, index) => index < 30)));
    } catch (error) {
        yield put(fetchTopStoriesError(error));
    }
}

export function* fetchStoryDetailsWorker({ itemIds }: ItemIdsAction) {
    try {
        const topStoriesDetails: Item[] = yield all(itemIds.map(itemId => call(appApi.v0.getItem, itemId.toString())));
        yield put(fetchItemDetailsSuccess(topStoriesDetails));
    } catch (error) {
        yield put(fetchItemDetailsError(error));
    }
}

export function* saga() {
    yield takeEvery(FETCH_TOP_STORIES, fetchTopStoriesWorker);
    yield takeEvery(FETCH_TOP_STORIES_SUCCESS, fetchStoryDetailsWorker);
}