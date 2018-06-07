
import 'regenerator-runtime/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'reset-css/reset.css';
import appStore from 'app-store';
import './index.css';

import Root from './components/Root';

ReactDOM.render(
  <Provider store={appStore()}>
    <Root />
  </Provider>,
  document.getElementById('root')
);