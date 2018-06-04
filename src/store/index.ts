import { applyMiddleware, compose, createStore, Store } from 'redux';
import reduxSaga from 'redux-saga';
import { ReduxState } from './types';

import reducer from './reducer';
import saga from './saga';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = reduxSaga();

export const startStore = () => createStore(
    reducer,
    {},
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware,
        ),
    ),
);

const store = startStore();
sagaMiddleware.run(saga as (() => Iterator<any>));

export * from './action.creators';
export * from './types';
export default () => store;
