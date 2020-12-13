import produce from 'immer';
import { GET_USERS } from './constants';

import { SUCCESS } from '../constants';

const initialState = {
  userMap: {},
  sortedUserIds: [],
};

function sortUsers(users) {
  return users.sort((a, b) => a.name <= b.name).map(user => user.id);
}

const usersReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_USERS:
      switch (action.status) {
        case SUCCESS: {
          action.payload.users.forEach(user => {
            draft.userMap[user.id] = user;
          });

          draft.sortedUserIds = sortUsers(action.payload.users);
          break;
        }
        default:
          break;
      }
      break;
    default:
      break;
  }
}, initialState);

export default usersReducer;
