const userReduser = (state = { userList: [] }, { type, payload }) => {
   switch (type) {
      case 'USER/ADD': {
         return {
            ...state,
            userList: state.userList.concat(payload),
         }
      }
         
      case 'USER/DELETE': {
         return {
            ...state,
            userList: state.userList.filter(user => user.id !== payload.id)
         }
      }
         
      default:
         return state;
   }
};

export default userReduser;