import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import { thunk } from "redux-thunk";
import blogSlice from "../features/blog/blogSlice";

const store=configureStore(
    {
        reducer:{
             user : authSlice,
             blog:blogSlice,
        },
    },
    applyMiddleware(thunk),
);
export default store;