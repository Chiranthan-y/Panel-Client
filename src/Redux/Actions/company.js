import {
  GET_COMPANY_FAIL,
  GET_COMPANY_REQUEST,
  GET_COMPANY_SUCCESS,
} from './action.types';

import axios from './../../Utils/axios';

const id = JSON.parse(localStorage.getItem('userinfo'))._id;
const token = localStorage.getItem('token');

const get_company_request = () => {
  return {
    type: GET_COMPANY_REQUEST,
  };
};

const get_company_success = (company) => {
  return {
    type: GET_COMPANY_SUCCESS,
    payload: company,
  };
};

const get_company_fail = (error) => {
  return {
    type: GET_COMPANY_FAIL,
    payload: error,
  };
};

export const get_company = () => {
  return (dispatch) => {
    dispatch(get_company_request());
    if (id === undefined) {
      dispatch(get_company_fail('User not logged in'));
    } else {
      axios
        .get(`user/${id}/company`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          dispatch(get_company_success(response.data));
        })
        .catch((error) => {
          dispatch(get_company_fail(error.response.data));
        });
    }
  };
};
