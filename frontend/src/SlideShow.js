import React from "react";
import { slideShow } from "./database";


const SlideShow = function()
{
    return (
        <div>
            <p id="topText">Please Choose Movies Or Shows From Topbar</p>
            <div className="preview_Holder">
            <img className="preview" src= {slideShow[0]} alt="Pic Is Not Reachable" />
            <img className="preview" src= {slideShow[1]} alt="Pic Is Not Reachable" />
            <img className="preview" src= {slideShow[2]} alt="Pic Is Not Reachable" />
            <img className="preview" src= {slideShow[3]} alt="Pic Is Not Reachable" />
            <img className="preview" src= {slideShow[4]} alt="Pic Is Not Reachable" />
            <img  className="preview"src= {slideShow[5]} alt="Pic Is Not Reachable" />
            <img  className="preview"src= {slideShow[6]} alt="Pic Is Not Reachable" />
            <img className="preview" src= {slideShow[7]} alt="Pic Is Not Reachable" />
            </div>
        </div>
    );
}
export default SlideShow;


