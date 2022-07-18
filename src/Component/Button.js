import React from "react";

function Button(props) {
    return (
        <button type={props.type}>
            {props.title ? props.title : "Button"}
        </button>
    )
}

export default Button;