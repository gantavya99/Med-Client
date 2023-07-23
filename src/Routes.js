import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Category from "./views/Category/Category";
import ProductPage from "./views/ProductPage/ProductPage";
import Cart from "./views/Cart/Cart";
import Checkout from "./views/checkout/Checkout";
import Success from "./views/Cart/Success";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import Fail from "./views/Cart/Fail";

const MedPharmRoutes = () => {
  return (
    <div>
        <Suspense fallback={<div></div>}>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<Category />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path ="/cart" element={<Cart />}/>
        <Route path ="/checkout" element={<Checkout />}/>
        <Route path ="/success" element={<Success />}/>
        <Route path ="/fail" element={<Fail />}/>
        <Route path ="/login" element={<Login />}/>
        <Route path ="/signUp" element={<SignUp />}/>
        </Routes>
        </Suspense>
    </div>
  )
}

export default MedPharmRoutes;