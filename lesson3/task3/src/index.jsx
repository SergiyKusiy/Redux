import store from './store';
import { setUser, removeUser } from './user.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';

store.subscribe(() => console.log(store.getState()));


store.dispatch(setLanguage('ru'));

store.dispatch(setUser({ id: 1, name: 'Oleg' }));
store.dispatch(setUser({ id: 3, name: 'Vika' }));

store.dispatch(addProduct({ id: 1, name: 'Cheese' }));
store.dispatch(addProduct({ id: 2, name: 'Onion' }));
store.dispatch(addProduct({ id: 3, name: 'Potato' }));
store.dispatch(removeProduct(2));
store.dispatch(removeUser());
store.dispatch(setLanguage('en'));