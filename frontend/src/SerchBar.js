import React from "react";

const SerchBar = function(props)
{
    return(
        <div className="srchHolder">
            <input id="serchbar" type={'search'} placeholder ={'enter an name to serch'}  onChange = {props.searchChange} />
        </div>
    );
}
export default SerchBar;