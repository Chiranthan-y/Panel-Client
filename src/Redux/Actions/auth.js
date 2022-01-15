import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
} from './action.types';
import axios from '../../Utils/axios';

const login_request = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const login_success = (cred) => {
  return {
    type: LOGIN_SUCCESS,
    payload: cred,
  };
};
const login_fail = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

const logout_request = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

const logout_success = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

const logout_fail = (error) => {
  return {
    type: LOGOUT_FAIL,
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

export const logout = () => {
  return (dispatch) => {
    dispatch(logout_request());
    localStorage.removeItem('token');
    localStorage.removeItem('userinfo');
    dispatch(logout_success());
  };
};
