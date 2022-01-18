import {
  GET_COMPANY_FAIL,
  GET_COMPANY_REQUEST,
  GET_COMPANY_SUCCESS,
  CREATE_COMPANY_REQUEST,
  CREATE_COMPANY_SUCCESS,
  CREATE_COMPANY_FAIL,
  DELETE_COMPANY_REQUEST,
  DELETE_COMPANY_SUCCESS,
  DELETE_COMPANY_FAIL,
} from './action.types';

import axios from './../../Utils/axios';

const id =
  localStorage.getItem('userinfo') === null
    ? ''
    : JSON.parse(localStorage.getItem('userinfo'))._id;
const token =
  localStorage.getItem('token') === null ? '' : localStorage.getItem('token');

const delete_company_request = () => ({
  type: DELETE_COMPANY_REQUEST,
});

const delete_company_success = (company) => ({
  type: DELETE_COMPANY_SUCCESS,
  payload: company,
});

const delete_company_fail = (error) => ({
  type: DELETE_COMPANY_FAIL,
  payload: error,
});

const get_company_request = () => ({
  type: GET_COMPANY_REQUEST,
});

const get_company_success = (company) => ({
  type: GET_COMPANY_SUCCESS,
  payload: company,
});

const get_company_fail = (error) => ({
  type: GET_COMPANY_FAIL,
  payload: error,
});

const create_company_request = () => ({
  type: CREATE_COMPANY_REQUEST,
});

const create_company_success = (company) => ({
  type: CREATE_COMPANY_SUCCESS,
  payload: company,
});

const create_company_fail = (error) => ({
  type: CREATE_COMPANY_FAIL,
  payload: error,
});

export const create_company = (data) => {
  return (dispatch) => {
    dispatch(create_company_request());
    axios
      .post(`/user/${id}/company/new`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(create_company_success(res.data));
      })
      .catch((err) => {
        dispatch(create_company_fail(err.response.data));
      });
  };
};

export const get_company = () => (dispatch) => {
  dispatch(get_company_request());

  axios
    .get('/company', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      dispatch(get_company_success(response.data));
    })
    .catch((error) => {
      dispatch(get_company_fail(error.response.data));
    });
};

export const delete_company = (companyId) => {
  return (dispatch) => {
    dispatch(delete_company_request());
    axios
      .delete(`/user/${id}/company/${companyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(delete_company_success(res.data));
      })
      .catch((err) => {
        dispatch(delete_company_fail(err.response.data));
      });
  };
};
