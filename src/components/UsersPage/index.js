import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../state/users/actions';
import { selectSortedUserIds } from '../../state/users/selectors';
import UserItem from '../UserItem';

export default function UsersPage() {
  const dispatch = useDispatch();
  const userIds = useSelector(selectSortedUserIds);

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  return (
    <div id="users-page">
      <h2 id="users-header">Users</h2>
      <ul className="users-list">
        {userIds.map(userId => (
          <UserItem id={userId} key={userId} />
        ))}
      </ul>
    </div>
  );
}
