import { GET_USERS } from './constants';

import { getUsers } from '../../api';
import { PENDING, SUCCESS, FAILURE } from '../constants';

export function getUsersAction() {
  return dispatch => {
    dispatch({
      type: GET_USERS,
      status: PENDING,
    });
    return getUsers()
      .then(users => {
        dispatch({
          type: GET_USERS,
          payload: { users },
          status: SUCCESS,
        });
      })
      .catch(err =>
        dispatch({
          type: GET_USERS,
          payload: err,
          error: true,
          status: FAILURE,
        }),
      );
  };
}
