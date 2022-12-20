import { configureStore } from "@reduxjs/toolkit";
import  ContactSliceReducer  from "./ContactSlice";

export const Store = configureStore({
    reducer: {
        contacts: ContactSliceReducer,
    },
});