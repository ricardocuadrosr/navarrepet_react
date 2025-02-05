import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/Navigation/Navigation";
import ContactPage from "../customer/pages/ContactPage/ContactPage";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import CartItem from "../customer/components/cart/CartItem";
import Cart from "../customer/components/cart/Cart";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";
import LandbotComponent from "../customer/components/Landbot/LandbotComponent";

const CustomerRouters = () => {
  return (
    <div>
      <div>
          <Navigation/>
      </div>
      <Routes>
        <Route path="/login" element={<HomePage/>}></Route>
        <Route path="/register" element={<HomePage/>}></Route>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess/>}></Route>

      </Routes>
      <div>
        <LandbotComponent/>
        <Footer/>
      </div>
    </div>
  );
};

export default CustomerRouters;
