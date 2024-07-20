import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getOrderById } from "../../../state/Order/Action";
import { updatePayment } from "../../../state/Payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTraker from "../Order/OrderTraker";
import AdressCard from "../adresscard/AdressCard";
import { clearCart } from "../../../state/Cart/Action";

const PaymentSuccess = () => {
  const [sessionId, setSessionId] = useState();
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { order } = useSelector((store) => store);
  const { orderId } = useParams();

  const dispatch = useDispatch();

  console.log("order", orderId);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("session_id"));
  }, []);

  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };
      const dataorder = { orderId: orderId };
      console.log("datasadoble", data);
      dispatch(getOrderById(dataorder));
      dispatch(updatePayment(data));
      dispatch(clearCart());
    }
  }, [orderId, paymentId]);

  console.log("order2", order);
  return (
    <div className="px-2 py-5 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Pago Exitoso</AlertTitle>
          Felicitaciones, tu pedido ha sido realizado.
        </Alert>
      </div>
      <OrderTraker activeStep={1} />
      <div className="text-end p-5">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">S/{order.order?.totalDiscountedPrice}</span>
      </div>
      <Grid container className="space-y-5">
        {order.order?.orderItems.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item.product.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p>{item.product.title}</p>
                  <div className="opacity-50 text-xs font-semibold space-x-5">
                    <p>Detalles: </p>
                    <p>Marca: {item.product.brand}</p>
                    <p>Precio unitario: S/{item.product.discountedPrice}</p>
                    <p>Cantidad: {item.quantity}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      S/{item.discountedPrice}
                    </span>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item>
              <AdressCard address={order.order?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
