import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalsSlice";

export default configureStore({
    reducer: {
        modals: modalReducer
    }
})