import React from 'react';

const Task = ({ id, done, text, onChange, onDelete }) => {
  const listItemClases = `list-item ${done ? 'list-item_done' : ''}`;
  return (
    <li className={listItemClases}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
};

export default Task;