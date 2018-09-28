import { combineReducers } from 'redux';
import todos from './todos';
import spotify from './spotify';
import auth from './auth';
import { items, itemsHasErrored, itemsIsLoading } from './example_reducer';

export default combineReducers({
  auth,
  items,
  itemsHasErrored,
  itemsIsLoading,
  todos,
  spotify
});
