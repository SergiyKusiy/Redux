import React from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import * as tasksAction from '../tasks.actions.js';
import { connect } from 'react-redux';
import { sortedTasksListSelector } from '../tasks.selectors';
import PropTypes from 'prop-types';

class TasksList extends React.Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className="list">
          {this.props.tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.props.updateTask}
              onDelete={this.props.deleteTask}
            />
          ))}
        </ul>
      </main>
    );
  }
}

const mapDispatch = {
  getTaskList: tasksAction.getTaskList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

TasksList.propTypes = {
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

export default connect(mapState, mapDispatch)(TasksList);