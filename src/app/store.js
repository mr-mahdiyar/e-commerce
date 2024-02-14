import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import categoryReducer from "./categorySlice";
import productsSlice from "./productsSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        category: categoryReducer,
        producst: productsSlice
    }
})

export default store;