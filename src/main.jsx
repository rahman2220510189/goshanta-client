import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./Pages/Home.jsx";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: "ai",
        element: <App />,
      },
    ]

  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);
