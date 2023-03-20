import React from "react";
import { NavLink } from "react-router-dom";
const Activebar = function()
{
    return (
        <div className="activeBar">
            <NavLink className="activebar_btn1" to ="/" >Home</NavLink>
            <NavLink className="activebar_btn1" to ="/movies" >Movies</NavLink>
            <NavLink className="activebar_btn1" to ="/shows" >Shows</NavLink>
            <a className="activebar_btn" href="login.html" >Login</a>
        </div>
    );
}
export default Activebar;