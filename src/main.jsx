import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/index";
import { Header, Sidebar } from "./";
import store from "./store/index.js";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <Header />
    <Sidebar />
    <App /> */}
    <RouterProvider router={router} />
  </Provider>
);
