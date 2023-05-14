import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Category from "./views/Category/Category";


const MedPharmRoutes = () => {
  return (
    <div>
        <Suspense fallback={<div></div>}>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        </Routes>

        </Suspense>
    </div>
  )
}

export default MedPharmRoutes;