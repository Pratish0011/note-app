import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./components/error-page";
import Card from "./components/Card";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          index: true,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/card",
          element: <Card />,
        },
      ]
    }
  ]);

  return (
    <div className=" m-0 p-0">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
