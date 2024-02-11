import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./SidebarSlice";

const store = configureStore({
    reducer: {
        sidebarReducer
    }
})

export default store;