import { all } from 'redux-saga/effects';
import { saga as commenters } from './commenters';
import { saga as ready } from './ready';
import { saga as stories } from './stories';

export default function* rootSaga() {
    yield all([
        commenters(),
        ready(),
        stories(),
    ]);
}
