import React from "react";

export interface carousalprops{
    yourname : string;
    // images : string[] // in typescript we ill define array like this right 
}

export function CarousalCards({yourname}:carousalprops){
    console.log("skjsjsj")
    return <div>suprise motherfuckers {yourname}</div>
}
