import { CREATE_REVIEW_FAILURE, CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, GET_REVIEWS_FAILURE, GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS } from "./ActionType";

const initialState = {
    reviews: [],
    loading: false,
    error: null
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REVIEW_REQUEST:
            return { ...state, loading: true, error: null };
        case CREATE_REVIEW_SUCCESS:
            return { ...state, reviews: [...state.reviews, action.payload], loading: false };
        case CREATE_REVIEW_FAILURE:
            return { ...state, error: action.error, loading: false };
        case GET_REVIEWS_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_REVIEWS_SUCCESS:
            return { ...state, loading: false, reviews: action.payload };
        case GET_REVIEWS_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export default reviewReducer;