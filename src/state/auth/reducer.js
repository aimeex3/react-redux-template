import { produce } from 'immer';
import { LOGIN } from './constants';

import { SUCCESS } from '../constants';

const initialState = {
  user: undefined,
};

const authReducer = produce((draft, action) => {
  switch (action.type) {
    case LOGIN:
      switch (action.status) {
        case SUCCESS: {
          draft.user = action.payload;
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

export default authReducer;
