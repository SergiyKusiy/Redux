import './index.scss';
import store from './store';
import { addUser, deleteUser } from './users.actions';


store.dispatch(addUser({ id: 1, name: 'Serhii' }));
store.dispatch(addUser({ id: 2, name: 'Igor' }));
store.dispatch(addUser({ id: 3, name: 'Vitalek' }));

store.dispatch(deleteUser(3));

store.subscribe(() => {
   const state = store.getState();
   console.log(state);
});


console.log(store.getState());