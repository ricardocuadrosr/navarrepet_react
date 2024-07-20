import { Avatar, AvatarGroup, Grid, Typography } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = ({order}) => {
    const navigate = useNavigate();
    console.log(order);

  return (
    <div onClick={() => navigate(`/account/order/${order.id}`)} className="p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Orden #{order.id}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <AvatarGroup sx={{justifyContent:"start"}}>
            {order.orderItems.map((orderId) => (
              <Avatar
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={orderId.product.imageUrl}  // Asegúrate de tener la URL correcta del producto
                alt=""     // Usa el nombre del producto como alternativa
              />
            ))}
          </AvatarGroup>
        </Grid>
        <Grid xs={4}>
          <div className="flex cursor-pointer">
            <div className="ml-5 space-y-2">
                <p className="font-bold">Pago total: S/{order.totalDiscountedPrice}</p><p></p>
                {/* <p className="opacity-50 text-xs font-semibold">Precio: S/{order.totalDiscountedPrice}</p> */}
                {/* <p className="opacity-50 text-xs font-semibold">Color: Black</p> */}
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivery en marcha</span>
              </p>
              {/* <p className="text-sm">
                Your Item Has Been Delivered
              </p> */}
            </div>
          )}
          {false && (
            <p>
              <span>Expered Delivery On Mar 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
