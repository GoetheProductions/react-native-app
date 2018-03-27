import { FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from '../constants';
import { API } from '../../constants';
import api from '../utils/methods';


export function fetchUsers() {
  return async (dispatch) => {
    dispatch({
      type: FETCH_USERS,
    });
    try {
      // const response = await fetch(`${API}/users`);

      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: await api.GET(`${API}/users`), // await response.json(),
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_ERROR,
        error,
      });
    }
  };
}
