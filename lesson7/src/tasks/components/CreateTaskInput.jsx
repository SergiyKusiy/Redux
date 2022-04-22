import React from 'react';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  handelChange = event => {
    this.setState({
      value: event.target.value,
    });
  };
  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.value}
          onChange={this.handelChange}
        />
        <button className="btn create-task__btn" onClick={this.handleTaskCreate}>
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;