import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "./SidebarSlice";
import CategoryReducer from "./CategorySlice";

const store = configureStore({
    reducer: {
        sidebar: SidebarReducer,
        category: CategoryReducer
    }
})

export default store;