import { takeEvery, put } from 'redux-saga/effects';
import { actionTypes } from '../commenters';
import { setAppAsReady } from './action.creators';

export function* fetchUsersDetailsWorker() {
    yield put(setAppAsReady());
}

export function* saga() {
    yield takeEvery(actionTypes.FETCH_KID_ITEMS_DETAILS_SUCCESS, fetchUsersDetailsWorker);
}