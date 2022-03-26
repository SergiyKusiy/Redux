import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';
import { increment, decrement, reset } from './counter.actions';

store.subscribe(() => console.log(store.getState()));


store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

store.dispatch(addUser({ id: 1, name: 'Serhii' }));
store.dispatch(addUser({ id: 2, name: 'Vitalik' }));
store.dispatch(addUser({ id: 3, name: 'Olya' }));


store.dispatch(deleteUser(2));
store.dispatch(updateUser(1, { id: 3, name: 'TOMAS' }));