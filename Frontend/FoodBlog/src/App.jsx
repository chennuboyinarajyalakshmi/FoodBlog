import React from "react";
import axios from "axios";
import './App.css'; 
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import MainNavigation from "./components/MainNavigation";
import Home from "./pages/home";

// ✅ Loader function to fetch recipes
const getAllRecipes = async () => {
  const res = await axios.get("http://localhost:5000/recipe");
  return res.data; // assuming this returns { success: true, data: [...] }
};

// ✅ Setup routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      {
        index: true, // shorthand for path: "/"
        element: <Home/>,
        loader: getAllRecipes
      }
    ]
  }
]);

// ✅ App component
export default function App() {
  return <RouterProvider router={router} />;
}
