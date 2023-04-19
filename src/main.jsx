import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import "./index.css"
import ErrorPage from "./error-page"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CategoryPage from "./pages/CategoryPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        title: "Home",
    },
    // {
    //     path: "/category",
    //     element: <CategoryPage />,
    //     errorElement: <ErrorPage />,
    //     title: "Category",
    // },
])
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
