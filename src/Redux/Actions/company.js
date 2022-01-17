import {
  GET_COMPANY_FAIL,
  GET_COMPANY_REQUEST,
  GET_COMPANY_SUCCESS,
} from './action.types';

import axios from './../../Utils/axios';

const id =
  localStorage.getItem('userinfo') === null
    ? ''
    : JSON.parse(localStorage.getItem('userinfo'))._id;
const token =
  localStorage.getItem('token') === null ? '' : localStorage.getItem('token');

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
