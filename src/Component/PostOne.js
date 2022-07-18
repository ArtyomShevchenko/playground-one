import React, { useState } from "react";
import Button from "./Button";

const names = ["Artyom", "Olya", "Viktoriya", "Albina", "Nina", "Bogdan", "Vasiliy", "Muska"];

function PostOne(props) {
    const [choseName, setChoseName] = useState(names[0] ? names[0] : "No names!");

    function handleClick(event) {
        console.log(event.target.textContent);
        setChoseName(event.target.textContent);
    }

    return (
        <div>
            <h3>Hello {choseName}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quos, quaerat quidem dolorum provident quas asperiores dicta doloribus quam debitis magnam corporis impedit esse facilis officia maxime libero pariatur cupiditate?</p>
            <p>Your name is: {choseName}</p>
            <div>
                {names.map((name, index) => {
                    return (
                        <button onClick={handleClick} key={index}>
                            {name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default PostOne;