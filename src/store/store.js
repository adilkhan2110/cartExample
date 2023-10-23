import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import SliceViewProduct from "./features/SliceViewProduct";


const store = configureStore({
    reducer: {
        counter: counterSlice,
        viewProduct:SliceViewProduct,
    }
})

export default store;