import { combineReducers } from 'redux';
import { ReduxState } from './types';
import { reducer as commenters } from './commenters';
import { reducer as error } from './error';
import { reducer as ready } from './ready';
import { reducer as stories } from './stories';

export default combineReducers<ReduxState>({
    commenters,
    error,
    ready,
    stories,
});
