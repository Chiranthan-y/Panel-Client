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
  GET_MEDI_CATEGORY_FAIL,
  GET_MEDI_CATEGORY_SUCCESS,
  GET_MEDI_CATEGORY_REQUEST,
} from '../Actions/action.types';

const initailState = {
  isLoading: false,
  message: '',
  medicine: null,
  medicineList: [],
  error: null,
};

const medicineReducer = (state = initailState, action) => {
  switch (action.type) {
    case CREATE_MEDICINE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_MEDICINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
        medicine: action.payload,
      };
    case CREATE_MEDICINE_FAIL:
      return {
        ...state,
        isLoading: false,
        mwssage: '',
        error: action.payload,
      };
    case GET_ALL_MEDICINE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_MEDICINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        medicineList: action.payload,
      };
    case GET_ALL_MEDICINE_FAIL:
      return {
        ...state,
        isLoading: false,
        message: '',
        error: action.payload,
      };
    case DELETE_MEDICINE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_MEDICINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
        medicine: action.payload,
      };
    case DELETE_MEDICINE_FAIL:
      return {
        ...state,
        isLoading: false,
        message: '',
        error: action.payload,
      };
    case GET_MEDI_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MEDI_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        medicineList: action.payload,
      };
    case GET_MEDI_CATEGORY_FAIL:
      return {
        ...state,
        isLoading: false,
        message: '',
        error: action.payload,
      };

    default:
      return state;
  }
};

export default medicineReducer;
