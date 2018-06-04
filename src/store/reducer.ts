import { combineReducers, AnyAction, Reducer } from 'redux';
import { ReduxState } from './types';
import { reducer as ready } from './ready/reducer';

export default combineReducers<ReduxState>({
    ready,
});
