import { FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from '../constants';
import { API } from '../../constants';


export function fetchUsers() {
  return async (dispatch) => {
    dispatch({
      type: FETCH_USERS,
    });
    try {
      const response = await fetch(`${API}/users`);

      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_ERROR,
        error,
      });
    }
  };
}
