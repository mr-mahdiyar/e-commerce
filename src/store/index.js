import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "./SidebarSlice";
import CategoryReducer from "./CategorySlice";
import ProductsSlice from "./ProductsSlice";
const store = configureStore({
    reducer: {
        sidebar: SidebarReducer,
        category: CategoryReducer,
        producst: ProductsSlice
    }
})

export default store;