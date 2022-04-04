import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';
import Pagination from './Pagination';
import User from './User';
import { userListSelector, currentPageSelector } from './user.selectors'

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
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({
  users: userListSelector(state),
  currentPage: currentPageSelector(state),
});

const mapDispatch = {
  goNext: userActions.goNext,
  goPrev: userActions.goPrev,
};

export default connect(mapState, mapDispatch)(UsersList);
