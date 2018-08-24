import { applyMiddleware, compose, createStore } from 'redux';
import reduxSaga from 'redux-saga';

import reducer from './reducer';
import saga from './saga';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = reduxSaga();

export const startStore = () => createStore(
    reducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

const store = startStore();
sagaMiddleware.run(saga as (() => Iterator<any>));

export * from './action.creators';
export * from './types';
export default () => store;
