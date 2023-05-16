import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import "./index.css"
import ErrorPage from "./error-page"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProductList from "./pages/ProductList"
import ProductDetail from "../src/components/ProductDetail"
import ContactList from "./pages/ContactList"
import OrderPage from "./pages/OrderPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        title: "Home",
    },
    {
        path: "/products",
        element: <ProductList />,
        errorElement: <ErrorPage />,
        title: "Product List",
    },
    {
        path: "/products/:productId",
        element: <ProductDetail />,
        errorElement: <ErrorPage />,
        title: "Product List",
    },
    {
        path: "/contact",
        element: <ContactList />,
        errorElement: <ErrorPage />,
        title: "Contact",
    },
    {
        path: "/order-with",
        element: <OrderPage />,
        errorElement: <ErrorPage />,
        title: "Order With",
    },
])
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
