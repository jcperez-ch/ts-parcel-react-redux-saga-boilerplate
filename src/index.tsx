
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import './index.css';

import Root from './components/Root';
import store from './store';

ReactDOM.render(
  <Provider store={store()}>
    <Root />
  </Provider>,
  document.getElementById('root')
);