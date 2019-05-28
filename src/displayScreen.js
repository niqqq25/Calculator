import React from "react";

export default function DisplayScreen(props){
    return <div id="display" className="displayScreen">{props.value}</div>;
}