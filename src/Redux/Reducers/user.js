import {
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAIL,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from '../Actions/action.types';

const initialState = {
  isLoading: false,
  user: null,
  error: null,
  users: [],
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        users: [],
        user: null,
        error: null,
      };
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        isLoading: true,
        users: action.payload,
        user: null,
        error: null,
      };
    case GET_ALL_USER_FAIL:
      return {
        ...state,
        isLoading: true,
        users: [],
        user: null,
        error: action.payload,
      };
    case DELETE_USER_REQUEST:
      return {
        isLoading: true,
        users: [],
        user: null,
        error: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        isLoading: true,
        users: state.users.filter((user) => user._id !== action.payload._id),
        user: null,
        error: null,
      };
    case DELETE_USER_FAIL:
      return {
        isLoading: true,
        users: [],
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default User;
