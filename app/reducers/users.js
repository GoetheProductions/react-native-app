
import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../constants';

const defaultState = {
  users: [],
  errors: [],
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        isFetching: true
      };

    case FETCH_USERS_SUCCESS:
      return {
        isFetching: false,
        users: action.payload.data,
      };

    case FETCH_USERS_ERROR:
      return {
        isFetching: false,
        errors: [
          ...state.errors,
          action.error
        ],
      };

    default:
      return state;
  }
};
