import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  render() {
    const { users, currentPage, goNext, goPrev } = this.props;

    const currentUsersList = users.slice(currentPage * 3, 3 + currentPage * 3);

    return (
      <div>
        <Pagination
          goNext={goNext}
          goPrev={goPrev}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={3}
        />

        <ul className="users">
          {currentUsersList.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({
  users: state.usersList,
  currentPage: state.currentPage,
});

const mapDispatch = {
  goNext: userActions.goNext,
  goPrev: userActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const Users = connector(UsersList);

export default Users;