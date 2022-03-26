const usersReducer = (state = { usersList: [] }, { type, payload }) => {
   switch (type) {
     case 'USER/ADD': {
       return {
         ...state,
         usersList: state.usersList.concat(payload),
       };
     }
 
     case 'USER/DELETE': {
       return {
         ...state,
         usersList: state.usersList.filter(user => user.id !== payload.id),
       };
     }
     default:
       return state;
   }
 };
 
 export default usersReducer;