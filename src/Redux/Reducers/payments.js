const {
  GET_PAYMENT_FAIL,
  GET_PAYMENT_SUCCESS,
  GET_PAYMENT_REQUEST,
} = require('../Actions/action.types');

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  token: null,
};

const Payment = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAYMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: action.payload,
      };
    case GET_PAYMENT_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default Payment;
