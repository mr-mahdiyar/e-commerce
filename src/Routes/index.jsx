import { createBrowserRouter } from "react-router-dom";
import { App, Home } from "..";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h3>404 Not found.</h3>,
    children: [
        { 
            path: "/",
            element: <Home />
        }
    ],
  },
]);
