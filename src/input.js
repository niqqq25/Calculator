import React from "react";
import Button from "./button.js";

export default function Input(props){
    return (
        <div id="input">
            {buttons.map((e, i) => <Button key={i} id={e.name} value={e.value} isNumber={e.isNumber} handleChange={props.handleChange}/>)}
        </div>
    );
}

const buttons = [
    {
        name: "cancel-entry",
        isNumber: false,
        value: "CE"
    },
    {
        name: "clear",
        isNumber: false,
        value: "C"
    },
    {
        name: "delete",
        isNumber: false,
        value: "D"
    },
    {
        name: "divide",
        isNumber: false,
        value: "÷"
    },
    {
        name: "seven",
        isNumber: true,
        value: "7"
    },
    {
        name: "eight",
        isNumber: true,
        value: "8"
    },
    {
        name: "nine",
        isNumber: true,
        value: "9"
    },
    {
        name: "multiply",
        isNumber: false,
        value: "×"
    },
    {
        name: "four",
        isNumber: true,
        value: "4"
    },
    {
        name: "five",
        isNumber: true,
        value: "5"
    },
    {
        name: "six",
        isNumber: true,
        value: "6"
    },
    {
        name: "subtract",
        isNumber: false,
        value: "−"
    },
    {
        name: "one",
        isNumber: true,
        value: "1"
    },
    {
        name: "two",
        isNumber: true,
        value: "2"
    },
    {
        name: "three",
        isNumber: true,
        value: "3"
    },
    {
        name: "add",
        isNumber: false,
        value: "+"
    },
    {
        name: "plus-minus",
        isNumber: false,
        value: "±"
    },
    {
        name: "zero",
        isNumber: true,
        value: "0"
    },
    {
        name: "decimal",
        isNumber: false,
        value: "."
    },
    {
        name: "equals",
        isNumber: false,
        value: "="
    }
];