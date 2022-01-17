import {
  CREATE_MEDICINE_FAIL,
  CREATE_MEDICINE_SUCCESS,
  CREATE_MEDICINE_REQUEST,
  GET_ALL_MEDICINE_FAIL,
  GET_ALL_MEDICINE_SUCCESS,
  GET_ALL_MEDICINE_REQUEST,
  DELETE_MEDICINE_FAIL,
  DELETE_MEDICINE_SUCCESS,
  DELETE_MEDICINE_REQUEST,
} from './action.types';
import axios from '../../Utils/axios';

const { _id } =
  localStorage.getItem('userinfo') === null
    ? ''
    : JSON.parse(localStorage.getItem('userinfo'));
const token =
  localStorage.getItem('token') === null ? '' : localStorage.getItem('token');

const get_all_medicine_request = () => ({
  type: GET_ALL_MEDICINE_REQUEST,
});

const get_all_medicine_success = (medicines) => ({
  type: GET_ALL_MEDICINE_SUCCESS,
  payload: medicines,
});

const get_all_medicine_fail = (error) => ({
  type: GET_ALL_MEDICINE_FAIL,
  payload: error,
});

const create_medicine_request = () => ({
  type: CREATE_MEDICINE_REQUEST,
});

const create_medicine_success = (medicine) => ({
  type: CREATE_MEDICINE_SUCCESS,
  payload: medicine,
});

const create_medicine_fail = (error) => ({
  type: CREATE_MEDICINE_FAIL,
  payload: error,
});

const delete_medicine_request = () => ({
  type: DELETE_MEDICINE_REQUEST,
});

const delete_medicine_success = (medicine) => ({
  type: DELETE_MEDICINE_SUCCESS,
  payload: medicine,
});

const delete_medicine_fail = (error) => ({
  type: DELETE_MEDICINE_FAIL,
  payload: error,
});

export const create_medicine = (medicine) => (dispatch) => {
  dispatch(create_medicine_request());
  axios
    .post(`user/${_id}/medicine/new`, medicine, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(create_medicine_success(res.data));
    })
    .catch((err) => {
      dispatch(create_medicine_fail(err.response.data));
    });
};

export const get_all_medicine = () => (dispatch) => {
  dispatch(get_all_medicine_request());
  axios
    .get('/medicine', {})
    .then((res) => {
      dispatch(get_all_medicine_success(res.data));
    })
    .catch((err) => {
      dispatch(get_all_medicine_fail(err.response.data));
    });
};

export const delete_medicine = (medicine) => (dispatch) => {
  dispatch(delete_medicine_request());
  axios
    .delete(`user/${_id}/medicine/${medicine._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(delete_medicine_success(res.data));
    })
    .catch((err) => {
      dispatch(delete_medicine_fail(err.response.data));
    });
};
