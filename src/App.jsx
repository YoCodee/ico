import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import useFirstLoad from "./scripts/useFirstLoad.js";
import StylePage from "./pages/StylePage.jsx";
import JualPage from "./pages/JualPage.jsx";
import Edukasi from "./pages/Edukasi.jsx";
import Challenge from "./pages/Challenge.jsx";
import StyleQuiz from "./pages/StylePage/StyleQuiz.jsx";
import Result from "./pages/StylePage/Result.jsx";
import LayoutLight from "./layout/LayoutLight.jsx";
import CartPage from "./pages/JualPage/CartPage.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import ProductCart from "./components/ProductCart.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/style",
          element: <StylePage />,
        },
        {
          path: "/jual",
          element: <JualPage />,
        },
        {
          path: "/edukasi",
          element: <Edukasi />,
        },
        {
          path: "/challenge",
          element: <Challenge />,
        },
        {
          path: "/question",
          element: <StyleQuiz />,
        },
      ],
    },
    {
      path: "/",
      element: <LayoutLight />,
      children: [
        {
          path: "/result",
          element: <Result />,
        },
        {
          path: "/cart/:id",
          element: <ProductDetail />,
        },
        {
          path: "/shopp",
          element: <CartPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
