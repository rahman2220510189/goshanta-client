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
import Blog from "./Pages/Blog.jsx";
import Packages from "./Pages/BlogPages/Packages.jsx";
import Historical from "./Pages/BlogPages/Historical.jsx";
import CampingPackage from "./Pages/BlogPages/CampingPackage.jsx";
import AsiaDestination from "./Pages/BlogPages/AsiaDestination.jsx";
import DesertOasis from "./Pages/BlogPages/DesertOasis.jsx";
import HikingPackage from "./Pages/BlogPages/HikingPackage.jsx";
import Eropa from "./Pages/BlogPages/Eropa.jsx";
import Beach from "./Pages/BlogPages/Beach.jsx";
import HotelSearch from "./Pages/Hotels/HotelSearch.jsx";
import AboutUs from "./Pages/About/AboutUs.jsx";
import HotelBookingForm from "./Pages/Hotels/HotelBookingForm.jsx";
import BlogForm from "./Pages/BlogPages/BlogForm.jsx";



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
        path:'blog',
        element:<Blog></Blog>,
      },
      {
        path: 'packages',
        element:<Packages></Packages>,
      },
      {
        path:'historical ',
        element:<Historical></Historical>,
      },
      {
        path: 'camping',
        element: <CampingPackage></CampingPackage>
      },
      {
        path:'asia',
        element: <AsiaDestination></AsiaDestination>,
      },
      {
        path:'desert',
        element: <DesertOasis></DesertOasis>,
      },
      {
        path:'hiking',
        element: <HikingPackage></HikingPackage>,
      }, 
      {
     path: 'eropa',
     element: <Eropa></Eropa>,
      },
      {
         path: 'beach',
         element: <Beach></Beach>,
      },
      {
        path: "ai",
        element: <App />,
      },
      {
        path:'hotel',
        element: <HotelSearch></HotelSearch>,
      },
      {
        path:'about',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/book/:hotelId',
        element:<HotelBookingForm></HotelBookingForm>,
      },
      {
        path:'booking',
        element:<BlogForm></BlogForm>,
      }
    ]

  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);
