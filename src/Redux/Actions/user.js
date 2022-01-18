import {
  GET_ALL_USER_FAIL,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from './action.types';

import axios from './../../Utils/axios';

const id =
  localStorage.getItem('userinfo') === null
    ? ''
    : JSON.parse(localStorage.getItem('userinfo'))._id;
const token =
  localStorage.getItem('token') === null ? '' : localStorage.getItem('token');

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

const delete_user_request = () => ({
  type: DELETE_USER_REQUEST,
});

const delete_user_success = (user) => ({
  type: DELETE_USER_SUCCESS,
  payload: user,
});

const delete_user_fail = (error) => ({
  type: DELETE_USER_FAIL,
  payload: error,
});

export const get_all_user = () => async (dispatch) => {
  dispatch(get_all_user_request());
  try {
    const response = await axios.get(`user/${id}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(get_all_user_success(response.data));
  } catch (error) {
    dispatch(get_all_user_fail(error));
  }
};

export const delete_user = (data) => async (dispatch) => {
  dispatch(delete_user_request());
  try {
    const response = await axios.delete(
      `user/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      { id: data }
    );
    dispatch(delete_user_success(response.data));
  } catch (error) {
    dispatch(delete_user_fail(error));
  }
};
