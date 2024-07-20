import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AdressCard from "../adresscard/AdressCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../state/Order/Action";
import CartProduct from "./CartProduct";

const DeliveryAddressForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cart} = useSelector(store => store)

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber")
    }
    const orderData = {address, navigate}
    dispatch(createOrder(orderData))
    console.log("address", address);
  }

  console.log("car", cart);

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xl={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          {cart.cart?.cartItems.map((item) =><CartProduct item={item}/>)}
          {/* <div className="p-5 py-7 border-b cursor-pointer">
            <AdressCard />
            <Button
              sx={{ mt: 2, bgcolor: "green" }}
              size="large"
              variant="contained"
            >
              Deviler Here
            </Button>
          </div> */}
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="Nombre"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Apellido"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Dirección"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="Ciudad"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="Estado / Provincia / Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Código Postal"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Número de Celular"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ py:1.2 ,mt: 2, bgcolor: "gray" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Entrega
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
