import React from 'react';
import ReactDOM from 'react-dom';

// setup redux-saga
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { persistStore } from 'redux-persist-immutable';
import history from './utils/history';
import { config } from './persistlayer/config';
import {
  // localSave,
  // removeItemFromLocalForageAsync,
  // removeItemFromLocalStorage,
  configureLocalForage,
} from './persistlayer';
import configureStore from './store/configureStore';

import * as serviceWorker from './serviceWorker';
import App from './App';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

// configure the localForage
configureLocalForage();

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(<App />, MOUNT_NODE);

serviceWorker.unregister();
