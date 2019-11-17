/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer } from 'resaga';

import history from '../utils/history';
import { USER_LOGOUT, USER_DATA_STORE } from '../appConstants';

// tell resaga to clear store on USERLOGOUT
export const customReducer = {
  [USER_LOGOUT]: store => store.clear(),
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    // router: connectRouter(history),
    [USER_DATA_STORE]: reducer(USER_DATA_STORE, customReducer),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
