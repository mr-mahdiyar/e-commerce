import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./SidebarSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer
    }
})

export default store;