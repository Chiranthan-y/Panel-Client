import {
	GET_COMPANY_FAIL,
	GET_COMPANY_SUCCESS,
	GET_COMPANY_REQUEST,
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
		default:
			return state;
	}
};

export default company;
