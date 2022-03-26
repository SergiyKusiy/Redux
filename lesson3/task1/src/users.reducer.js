import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(payload.userData),
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== payload.userId),
      };
    }
    case UPDATE_USER: {
      return {
        ...state,
        usersList: state.usersList.map(user => {
          if (user.id === payload.userId) {
            return { ...user, ...payload.userData };
          }

          return user;
        }),
      };
    }
    default:
      return state;
  }
};
