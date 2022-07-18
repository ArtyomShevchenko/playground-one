import React from "react";
// import Icon from "../media/icons/ErrorImage"

function Error() {
    return (
        <div className="error-container" style={{ color: "white", background: "red", padding: "1rem", textAlign: "center", userSelect: "none" }}>
            <h2>404</h2>
            <h2>Page not found</h2>
        </div>
    )
};

export default Error;