import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Fotter from "./Fotter";


const Main = () => {
    const location = useLocation();
    const hideLayoutFor = ['/ai'];
    const isFullScreen = hideLayoutFor.includes(location.pathname)

    return (
       
          <>
         {!isFullScreen &&     <Navbar/>}
           <Outlet></Outlet>
           {!isFullScreen &&  <Fotter/> }
          </>
  
    );
};

export default Main;