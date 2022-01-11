import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from './action.types';
import axios from '../../Utils/axios';

export const login_request = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const login_success = (cred) => {
  return {
    type: LOGIN_SUCCESS,
    payload: cred,
  };
};

export const login_fail = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

export const login = (cred) => {
  return (dispatch) => {
    dispatch(login_request());
    axios
      .post('auth/login', cred)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userinfo', JSON.stringify(response.data.user));
        dispatch(login_success(response.data));
      })
      .catch((error) => {
        dispatch(login_fail(error.response.data));
      });
  };
};
