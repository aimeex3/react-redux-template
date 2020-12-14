import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectUser } from '../../state/users/selectors';

export const UserItem = ({ id }) => {
  const user = useSelector(state => selectUser(state, id));
  const displayName =
    user.name !== user.profile.display_name && user.profile.display_name;
  return (
    <li className="user-item">
      <img alt="avatar" className="user-avatar" src={user.profile.image_72} />
      <div className="user-details">
        <div className="user-name">{user.name}</div>
        <div className="user-display-name">{displayName}</div>
      </div>
    </li>
  );
};

UserItem.propTypes = {
  id: PropTypes.string,
};

export default UserItem;
