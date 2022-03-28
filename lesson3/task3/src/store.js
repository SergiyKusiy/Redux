import { createStore, combineReducers } from 'redux';
import { cartReducer } from './cart.reducer';
import { userReducer } from './user.reducer';
import { langReducer } from './language.reducer';

const appReducer = combineReducers({
  language: langReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export default store;