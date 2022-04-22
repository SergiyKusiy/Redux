export const SHOW_SPINNER = 'SPINNER/SHOW_SPINNER';
import { getUserData } from './users.gateway'
export const USER_DATA_RECIEVED = 'USER/DATA_RECIEVED';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const userDataRecieved = userData => {
  return {
    type: USER_DATA_RECIEVED,
    payload: {
      userData,
    },
  };
};

export const fetchUserData = (userName) => {
  return function (dispatch) {
    getUserData(userName)
      .then(userData => {
        dispatch(userDataRecieved(userData));
    });
  };
};
