import React, { useEffect } from "react";
import AdressCard from "../adresscard/AdressCard";
import { Button } from "@mui/material";
import CartItem from "../cart/CartItem";
import { felines } from "../../../data/navarretepet";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../state/Order/Action";
import { createPayment } from "../../../state/Payment/Action";
import CartProduct from "./CartProduct";

const OrderSummary = () => {

  const dispatch = useDispatch();
  const location = useLocation()
  const { order } = useSelector( store => store)
  const searchParams = new URLSearchParams(location.search)
  const orderId = searchParams.get("order_id")

  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])

  const handleCheckout=()=>{
    console.log("numero de orden", orderId);
    dispatch(createPayment(orderId))
  }

  console.log("numero de orden", orderId);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-5-md border">
        <AdressCard address={order.order?.shippingAddress}/>
      </div>
      <div className="mt-3">
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <CartProduct item={item}/>
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border p-2">
              <p className="uppercase font-bold opacity-60 pb-4">
                Detalles del precio
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Precio</span>
                  <span>S/{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Descuento</span>
                  <span className="text-green-600">S/{order.order?.discounte}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Gastos de envío</span>
                  <span className="text-green-600">Gratuito</span>
                </div>
                <hr />
                <div className="flex justify-between pt-3 font-bold">
                  <span>Monto Total</span>
                  <span className="text-green-600">S/{order.order?.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button
                color='info'
                className="w-full mt-5"
                variant="contained"
                sx={{ px: "2.5rem", py: ".7rem" }}
                onClick={handleCheckout}
              >
                Pagar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
