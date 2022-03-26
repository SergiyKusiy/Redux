export const USER_ADD = 'USERS/ADD';
export const USER_DELETE = 'USERS/USER_DELETE';
export const USER_UPDATE = 'USERS/UPDATE';

export const userAdd = userData => {
   return {
      type: USER_ADD,
      payload: {
         userData,
      }
   };
}

export const userDelete = userId => {
   return {
      type: USER_DELETE,
      payload: {
         userId,
      }
   };
}

export const userUpdate = (userId, userData) => {
   return {
      type: USER_UPDATE,
      payload: {
         userId,
         userData,
      }
   };
};