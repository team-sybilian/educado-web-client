import localForage from 'localforage';
import { LOCAL_USER_STORE, EDUCADOSTORE_KEY_PREFIX } from '../appConstants';

export const config = {
  whitelist: [LOCAL_USER_STORE],
  keyPrefix: EDUCADOSTORE_KEY_PREFIX,
  debounce: 1000,
  storage: localForage,
};
