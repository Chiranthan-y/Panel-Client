import {
  CREATE_MEDICINE_FAIL,
  CREATE_MEDICINE_SUCCESS,
  CREATE_MEDICINE_REQUEST,
  GET_ALL_MEDICINE_FAIL,
  GET_ALL_MEDICINE_SUCCESS,
  GET_ALL_MEDICINE_REQUEST,
} from './action.types';
import axios from '../../Utils/axios';

const { _id } = JSON.parse(localStorage.getItem('userinfo'));
const token = localStorage.getItem('token');

const get_all_medicine_request = () => {
  return {
    type: GET_ALL_MEDICINE_REQUEST,
  };
};

const get_all_medicine_success = (medicines) => {
  return {
    type: GET_ALL_MEDICINE_SUCCESS,
    payload: medicines,
  };
};

const get_all_medicine_fail = (error) => {
  return {
    type: GET_ALL_MEDICINE_FAIL,
    payload: error,
  };
};

const create_medicine_request = () => {
  return {
    type: CREATE_MEDICINE_REQUEST,
  };
};

const create_medicine_success = (medicine) => {
  return {
    type: CREATE_MEDICINE_SUCCESS,
    payload: medicine,
  };
};
const create_medicine_fail = (error) => {
  return {
    type: CREATE_MEDICINE_FAIL,
    payload: error,
  };
};

export const create_medicine = (medicine) => {
  return (dispatch) => {
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
};

export const get_all_medicine = () => {
  return (dispatch) => {
    dispatch(get_all_medicine_request());
    axios
      .get(`user/${_id}/medicine`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(get_all_medicine_success(res.data));
      })
      .catch((err) => {
        dispatch(get_all_medicine_fail(err.response.data));
      });
  };
};
