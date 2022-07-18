import React from "react";

function Post(props) {
    return (
        <section style={{backgroundColor: "lightgray", padding: "0.2rem 0.4rem", margin: "0.2rem"}}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.text}</p>
        </section>
    );
};

export default Post;