import { createBrowserRouter } from "react-router-dom";
import { App, Home, ProductSinglePage, CartPage, CategoryProductPage, SearchPage } from "..";
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
        },
        {
          path: "/cart",
          element: <CartPage />
        },
        {
          path: "category/:category",
          element: <CategoryProductPage />
        },
        {
          path: "search/:searchTerm",
          element: <SearchPage />
        }
    ],
  },
]);
