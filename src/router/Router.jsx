import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import Intro from "../pages/Intro";
import App from "../App";
import Main from "../pages/Main";
import AllCategory from "../pages/AllCategory";
import ProductDetail from "../pages/ProductDetail";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Intro /> }, // "/" 기본

        { path: "main", element: <Main /> },
        { path: "cart", element: <Cart /> },

        { path: "all", element: <AllCategory /> },

        { path: "product/:id", element: <ProductDetail /> },

        // 마지막에 써야함
        { path: ":gnb", element: <AllCategory /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
