import { createBrowserRouter } from "react-router-dom";
import { App, Home, ProductSinglePage } from "..";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h3>404 Not found.</h3>,
    children: [
        { 
            path: "/",
            element: <Home />
        },
        {
          path: "/product/:id",
          element: <ProductSinglePage />
        }
    ],
  },
]);
