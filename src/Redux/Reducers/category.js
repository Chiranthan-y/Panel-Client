import {
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
} from './../Actions/action.types';

const initialState = {
  category: [],
  loading: false,
  error: null,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case GET_CATEGORY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        category: [...state.category, action.payload],
        loading: false,
      };
    case CREATE_CATEGORY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default category;
