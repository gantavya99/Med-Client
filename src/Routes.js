import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Category from "./views/Category/Category";
import ProductPage from "./views/ProductPage/ProductPage";


const MedPharmRoutes = () => {
  return (
    <div>
        <Suspense fallback={<div></div>}>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/product/vicodin" element={<ProductPage />} />
        </Routes>

        </Suspense>
    </div>
  )
}

export default MedPharmRoutes;