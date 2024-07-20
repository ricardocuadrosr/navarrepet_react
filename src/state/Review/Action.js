import { api } from "../../config/apiConfig";
import { CREATE_REVIEW_FAILURE, CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, GET_REVIEWS_FAILURE, GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS } from "./ActionType";

export const createReviewProductId = (reqData) =>async (dispatch) => {
    dispatch({type:CREATE_REVIEW_REQUEST})
    console.log("ayudaaaa");
    try {
        console.log("si pasa", reqData);
        const {data} = await api.post("/api/reviews/create", reqData)
        dispatch({ type: CREATE_REVIEW_SUCCESS, payload: data });
        console.log("createreview", data);
    } catch (error) {
        dispatch({ type: CREATE_REVIEW_FAILURE, error });
    }
};

export const getReviewProductId = (productId) => async (dispatch) => {
    dispatch({type:GET_REVIEWS_REQUEST});
    try {
        const {data} = await api.get(`/api/reviews/product/${productId}`)
        dispatch({type:GET_REVIEWS_SUCCESS, payload:data})
        console.log("review", data);
    } catch (error) {
        dispatch({type:GET_REVIEWS_FAILURE, payload:error.message})
    }

}