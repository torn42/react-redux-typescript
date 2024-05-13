import { UserAction, UserActionTypes } from '../../types/user';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchUsers = (): any => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setTimeout(() => { //imitating downloading data from the server
        dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
      }, 500);
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей',
      });
    }
  };
};