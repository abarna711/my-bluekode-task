import React from "react";
import Menu from "../pages/Menu";
import { Outlet } from "react-router-dom";
function Rootlayout(){
    return(
        <>
        <Menu/>
        <Outlet/>
        </>
    );

}
export default Rootlayout;