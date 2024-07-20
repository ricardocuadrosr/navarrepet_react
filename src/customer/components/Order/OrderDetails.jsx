import React, { useEffect, useState } from "react";
import AdressCard from "../adresscard/AdressCard";
import OrderTraker from "./OrderTraker";
import { Box, Button, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderById } from "../../../state/Order/Action";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
export default function OrderDetails () {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const params = useParams()
  const dispatch = useDispatch()
  const {order} = useSelector(store => store)

  console.log("params", params)


  useEffect(()=>{
    const data = {orderId:params.orderId}
    dispatch(getOrderById(data))
  }, [params.orderId])

  console.log("ordersss", order)

  return (
    <div className="py-5 px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AdressCard address={order.order?.shippingAddress}/>
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>
      <div className="p-5 text-end">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">S/{order.order?.totalDiscountedPrice}</span>
      </div>
      <Grid className="space-y-5" container>
        {order.order?.orderItems.map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item.product.imageUrl}
                  alt=""
                />
                <div className="space-y-2 ml-5 text-start">
                  <p className="font-semibold">{item.product.title}</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                  </p>
                  <p>Marca: {item.product.brand}</p>
                  <p>Precio: S/{item.product.discountedPrice}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
              </div>
            </Grid>
            <Grid>
              <div>
                <Button variant="contained" onClick={() => navigate(`/product/${item.product.id}`)}>
                  <RemoveRedEyeIcon/>
                </Button>
              </div>
            </Grid>
            {/* <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid> */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
