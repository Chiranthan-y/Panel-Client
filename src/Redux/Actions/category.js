import {
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
} from './action.types';
import axios from '../../Utils/axios';

const { _id } =
  localStorage.getItem('userinfo') === null
    ? ''
    : JSON.parse(localStorage.getItem('userinfo'));
const token =
  localStorage.getItem('token') === null ? '' : localStorage.getItem('token');

const get_category_request = () => ({
  type: GET_CATEGORY_REQUEST,
});

const get_category_success = (category) => ({
  type: GET_CATEGORY_SUCCESS,
  payload: category,
});

const get_category_fail = (error) => ({
  type: GET_CATEGORY_FAIL,
  payload: error,
});

const create_category_request = () => ({
  type: CREATE_CATEGORY_REQUEST,
});

const create_category_success = (category) => ({
  type: CREATE_CATEGORY_SUCCESS,
  payload: category,
});

const create_category_fail = (error) => ({
  type: CREATE_CATEGORY_FAIL,
  payload: error,
});

const delete_category_request = () => ({
  type: DELETE_CATEGORY_REQUEST,
});

const delete_category_success = (category) => ({
  type: DELETE_CATEGORY_SUCCESS,
  payload: category,
});

const delete_category_fail = (error) => ({
  type: DELETE_CATEGORY_FAIL,
  payload: error,
});

export const create_category = (category) => (dispatch) => {
  dispatch(create_category_request());
  axios
    .post(
      `user/${_id}/category/new/`,
      { name: category },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(create_category_success(res.data));
    })
    .catch((err) => {
      dispatch(create_category_fail(err.response.data));
    });
};

export const get_category = () => (dispatch) => {
  dispatch(get_category_request());
  axios
    .get('/category', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      dispatch(get_category_success(response.data));
    })
    .catch((error) => {
      dispatch(get_category_fail(error.response.data));
    });
};

export const delete_category = (categoryId) => (dispatch) => {
  dispatch(delete_category_request());
  axios
    .delete(`user/${_id}/category/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      dispatch(delete_category_success(response.data));
    })
    .catch((error) => {
      dispatch(delete_category_fail(error.response.data));
    });
};
