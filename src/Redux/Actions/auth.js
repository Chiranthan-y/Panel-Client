import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
} from './action.types';
import axios from '../../Utils/axios';

const get_all_user_request = () => ({
  type: GET_ALL_USER_REQUEST,
});

const get_all_user_success = (users) => ({
  type: GET_ALL_USER_SUCCESS,
  payload: users,
});

const get_all_user_fail = (error) => ({
  type: GET_ALL_USER_FAIL,
  payload: error,
});

const get_all_user = () => async (dispatch) => {
  dispatch(get_all_user_request());
  try {
    const response = await axios.get('/users');
    dispatch(get_all_user_success(response.data));
  } catch (error) {
    dispatch(get_all_user_fail(error));
  }
};

const register_request = () => ({
  type: REGISTER_REQUEST,
});

const register_success = (cred) => ({
  type: REGISTER_SUCCESS,
  payload: cred,
});

const register_fail = (error) => ({
  type: REGISTER_FAIL,
  payload: error,
});

const login_request = () => ({
  type: LOGIN_REQUEST,
});

const login_success = (cred) => ({
  type: LOGIN_SUCCESS,
  payload: cred,
});

const login_fail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

const logout_request = () => ({
  type: LOGOUT_REQUEST,
});

const logout_success = () => ({
  type: LOGOUT_SUCCESS,
});

const logout_fail = (error) => ({
  type: LOGOUT_FAIL,
  payload: error,
});

export const register = (cred) => {
  return (dispatch) => {
    dispatch(register_request());
    axios
      .post('auth/register', cred)
      .then((res) => {
        dispatch(register_success(res.data));
      })
      .catch((err) => {
        dispatch(register_fail(err.response.data));
      });
  };
};

export const login = (cred) => (dispatch) => {
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

export const logout = () => (dispatch) => {
  dispatch(logout_request());
  localStorage.removeItem('token');
  localStorage.removeItem('userinfo');
  dispatch(logout_success());
};
