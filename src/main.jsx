import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Pages/Main.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Blog from "./Pages/Blog.jsx";
import Register from "./Pages/Login/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Error from "./Pages/Error.jsx";
import HomeLayout from "./Pages/Layout/HomeLayout.jsx";
import ChefLayout from "./Pages/Layout/ChefLayout.jsx";
import RecipeData from "./Pages/Card/RecipeData.jsx";
import PrivateRoute from "./Provider/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/home",
        element: <Main></Main>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chef/:id",
        element: <PrivateRoute><RecipeData></RecipeData></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-recipe-server-muksanaakter.vercel.app/chef/${params.id}`),
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
