import { all, call, put, takeEvery } from 'redux-saga/effects';
import appApi, { Item } from 'app-api';
import { fetchKidItemDetailsSuccess, fetchKidItemDetailsError } from './action.creators';
import { actionTypes as storiesActionTypes } from '../stories';
import { ItemsAction } from '../types';

export function* fetchItemKidsDetailsWorker({ items }: ItemsAction) {
    let itemKids: Item[] = [];
    let hasError = false;
    for(const item of items) {
        if (item && item.kids) {
            try {
                itemKids = [...itemKids, ...yield all(item.kids.map(itemId => call(appApi.v0.getItem, itemId.toString())))];
            } catch (error) {
                hasError = true; 
                yield put(fetchKidItemDetailsError(error));
                break;
            }
        }
    }
    if (!hasError) {
        yield put(fetchKidItemDetailsSuccess(itemKids));
    }
}

export function* saga() {
    yield takeEvery(storiesActionTypes.FETCH_ITEMS_DETAILS_SUCCESS, fetchItemKidsDetailsWorker);
}