import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import authReducer from './authSlice';
import { storageLogic } from "./storageLogic";

const store = configureStore({
    reducer:{
        cart:cartReducer,
        auth:authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storageLogic),
});
export default store;