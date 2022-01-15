import {
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from './action.types';
import axios from '../../Utils/axios';

const { _id } = JSON.parse(localStorage.getItem('userinfo'));
const token = localStorage.getItem('token');

const get_category_request = () => {
  return {
    type: GET_CATEGORY_REQUEST,
  };
};

const get_category_success = (category) => {
  return {
    type: GET_CATEGORY_SUCCESS,
    payload: category,
  };
};

const get_category_fail = (error) => {
  return {
    type: GET_CATEGORY_FAIL,
    payload: error,
  };
};

export const get_category = () => {
  return (dispatch) => {
    dispatch(get_category_request());
    if (_id === undefined) {
      dispatch(get_category_fail('User not logged in'));
    } else {
      axios
        .get(`user/${_id}/category`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          dispatch(get_category_success(response.data));
        })
        .catch((error) => {
          dispatch(get_category_fail(error.response.data));
        });
    }
  };
};
