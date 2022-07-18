import React, { useState } from "react";
import ChangeColor from "../Component/ChangeColor";
import SetStateExampleOne from "../Component/SetStateExampleOne";
import SetStateExampleTwo from "../Component/SetStateExampleTwo";
import SetStateExampleThree, { color } from "../Component/SetStateExampleThree";
import SetStateExampleFive from "../Component/SetStateExampleFive";
import Clock from "../Component/Clock";
import ChangeColorFromButtons from "../Component/ChangeColorFromButtons";
import UseStateExapmle1 from "../Component/UseStateExapmle1";


function SetStateExample() {

    // const [color, setColor] = useState("blue");

    return (
        <div className="contact-container" style={{ backgroundColor: "lightGray", padding: "1rem" }}>
            <div className="wrapper">
                <h2>Click button to change background color.</h2>
                <pre>.setState()</pre>

                <ChangeColor />
                <hr />
                <SetStateExampleOne />
                <hr />
                <SetStateExampleTwo />
                <hr />
                <SetStateExampleThree />
                <hr />
                <SetStateExampleFive name="One" />
                <hr />
                <Clock title="Show current time." isPrecise="false"/>
                <hr />
                <ChangeColorFromButtons/>
                <hr />
                <UseStateExapmle1 />
            </div>
        </div>
    );
};

export default SetStateExample;

