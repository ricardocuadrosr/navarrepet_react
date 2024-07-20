import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderHistory } from "../../../state/Order/Action";

const OrderStatus = [
  { label: "On the way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { orders, loading, error } = useSelector(state => state.order);

  useEffect(() => {
    if (jwt) {
      dispatch(fetchOrderHistory(jwt));
      console.log("hay jwt", jwt);
    }
  }, [dispatch, jwt]);

  return (
    <div className="py-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg text-center">Ordenes</h1>
            <div className="space-y-4 mt-10">
              {/* <h1 className="font-semibold">Order status</h1>
              {OrderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultValue={option.value}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml3 text-sm text-gray-600"
                    htmlFor="{option.value}"
                  >
                    {option.label}
                  </label>
                </div>
              ))} */}
              <img src="https://cdn-icons-png.flaticon.com/512/2649/2649266.png" alt="" />
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
            <div className="space-y-5">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
