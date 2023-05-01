import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Pages/Main.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Blog from "./Pages/Login/Blog.jsx";
import Register from "./Pages/Login/Register.jsx";

const router = createBrowserRouter([
  {

    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/home",
    element: <Main></Main>,
      },
      {
        path: "/login",
    element: <Login/>,
      },
      {
        path: "/blog",
    element: <Blog></Blog>,
      },
      {
        path: "/register",
    element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
