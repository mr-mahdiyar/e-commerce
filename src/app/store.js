import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import categoryReducer from "./categorySlice";
import productsSlice from "./productSlice";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        category: categoryReducer,
        products : productsSlice,
        cart: cartReducer,
        serch: searchReducer
    }
})

export default store;