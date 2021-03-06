import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
} from './../Actions/action.types';

const initialState = {
  isLoading: false,
  isAuthenticated: Boolean(localStorage.getItem('token')),
  token: localStorage.getItem('token') || '',
  user: localStorage.getItem('userinfo')
    ? JSON.parse(localStorage.getItem('userinfo'))
    : null,
  error: null,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
        error: null,
      };
    }

    case LOGIN_FAIL: {
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: '',
        user: null,
        error: action.payload,
      };
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        token: '',
        user: null,
        error: null,
      };
    }

    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: '',
        user: null,
        error: null,
      };
    }

    case LOGOUT_FAIL: {
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: '',
        user: null,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default Auth;
