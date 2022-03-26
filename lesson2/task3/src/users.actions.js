export const addUser = ({ id, name }) => {
  return {
    type: 'USER/ADD',
    payload: {
      id,
      name,
    },
  };
};

export const deleteUser = id => {
  return {
    type: 'USER/DELETE',
    payload: {
      id,
    },
  };
};
