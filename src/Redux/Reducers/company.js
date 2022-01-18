import {
  GET_COMPANY_FAIL,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_REQUEST,
  CREATE_COMPANY_REQUEST,
  CREATE_COMPANY_SUCCESS,
  CREATE_COMPANY_FAIL,
  DELETE_COMPANY_FAIL,
  DELETE_COMPANY_REQUEST,
  DELETE_COMPANY_SUCCESS,
} from './../Actions/action.types';

const initialState = {
  company: [],
  loading: false,
  error: null,
};

const company = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_COMPANY_SUCCESS:
      return {
        ...state,
        company: action.payload,
        loading: false,
      };
    case GET_COMPANY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COMPANY_SUCCESS:
      return {
        ...state,

        loading: false,
        error: null,
      };
    case CREATE_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        company: state.company.filter(
          (company) => company._id !== action.payload
        ),
      };
    case DELETE_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default company;
