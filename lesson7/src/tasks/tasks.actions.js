import * as tasksGetway from './tasksGateway';
import { tasksListSelector } from './tasks.selectors';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const taskListRecieved = tasksList => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: {
      tasksList,
    },
  };
  return action;
};

export const getTaskList = () => {
  const thunkAction = function (dispatch) {
     tasksGetway
        .fetchTasksList()
        .then(tasksList => dispatch(taskListRecieved(tasksList)));
  };
  return thunkAction;
};

export const updateTask = taskId => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
     tasksGetway
        .updateTask(taskId, updatedTask)
        .then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction = function (dispatch) {
     tasksGetway
        .deleteTask(taskId)
        .then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const createTask = text => {
  const thunkAction = dispatch => {
    const taskData = {
      text,
      done: false,
    };
     tasksGetway
        .createTask(taskData)
        .then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};