import React from "react";
import { NavLink } from "react-router-dom";
const Activebar = function()
{
    return (
        <div className="activeBar">
            <NavLink className="activebar_btn1" to ="/" >Home</NavLink>
            <NavLink className="activebar_btn1" to ="/movies" >Movies</NavLink>
            <NavLink className="activebar_btn1" to ="/shows" >Shows</NavLink>
            <NavLink className="activebar_btn1" to ="/database" >Admin Panel</NavLink>
            
        </div>
    );
}
export default Activebar;