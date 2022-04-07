import { createStore, combineReducers } from 'redux';
import optionsReducer from './options/options.reducer';

const reducer = combineReducers({
  options: optionsReducer,
});

const store = createStore(reducer);
export default store;