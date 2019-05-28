import React from "react";

export default function Button(props){
    let classes = "calc-button";
   if(props.isNumber){
       classes += " num-button"
   }
    return <a id={props.id} className={classes} onClick={()=>{props.handleChange(props.value)}}>{props.value}</a>
}