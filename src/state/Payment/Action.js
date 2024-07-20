import { api } from "../../config/apiConfig"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST } from "./ActionType"

export const createPayment=(orderId)=> async(dispatch)=>{
    dispatch({type:CREATE_PAYMENT_REQUEST})
    console.log("ordenes", orderId);
    try {
        const {data} = await api.post(
            `/api/payments/${orderId}`, 
            {}
        );
        console.log("no hay error");
        if(data.payment_link_url){
            window.location.href = data.payment_link_url;
        }
    } catch (error) {
        console.log("errores");
        dispatch({type:CREATE_PAYMENT_FAILURE, payload: error.message})
    }
}

export const updatePayment=(reqData)=> async(dispatch)=>{
    dispatch({type:UPDATE_PAYMENT_REQUEST})
    console.log("update datos  - ", reqData);
    try {

        console.log("update datos  - ", reqData);
        const {data} = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

        // if(data.payment_link_url){
        //     window.location.href = data.payment_link_url;
        // }

        console.log("update payment - ", data);

    } catch (error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE, payload: error.message})
    }
}