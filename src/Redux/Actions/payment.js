import {
  GET_PAYMENT_FAIL,
  GET_PAYMENT_SUCCESS,
  GET_PAYMENT_REQUEST,
} from './action.types';
import axios from './../../Utils/axios';

const id =
  localStorage.getItem('userinfo') === null
    ? ''
    : JSON.parse(localStorage.getItem('userinfo'))._id;
const token =
  localStorage.getItem('token') === null ? '' : localStorage.getItem('token');

const get_payment_success = (payload) => ({
  type: GET_PAYMENT_SUCCESS,
  payload,
});

const get_payment_fail = (payload) => ({
  type: GET_PAYMENT_FAIL,
  payload,
});

const get_payment_request = () => ({
  type: GET_PAYMENT_REQUEST,
});

export const get_payment = (data) => (dispatch) => {
  dispatch(get_payment_request());
  axios
    .post(
      `/user/${id}/makepay`,
      { data: data },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(get_payment_success(res.data));
    })
    .catch((err) => {
      dispatch(get_payment_fail(err));
    });
};
