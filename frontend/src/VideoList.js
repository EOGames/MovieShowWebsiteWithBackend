import React from "react";
import Card from "./Cards";

let createdVideoList = [];

const VideoList = function(props)
{
       
    return (
        <div id="videoListHolder">
                {GenrateVideoList(props.list)}
                
        </div>
    );
}
export default VideoList;

function GenrateVideoList (list)
{  
    createdVideoList = []; 
     for (let i=0; i < list.length; i++)
     {
        createdVideoList[i] = <Card key ={i} pic ={list[i].pic} info ={list[i].info} cla = "video" vlink = {list[i].link}  />
     } 

    return createdVideoList;    
}

