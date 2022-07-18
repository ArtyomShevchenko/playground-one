import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="wrapper">
                    <h2>Header block</h2>
                    <nav>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/main">Main</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/setstateexample">SetStateExample</Link></li>
                        <li><Link to="/form">Form Component</Link></li>
                        <li><Link to="/tasks">Tasks</Link></li>
                    </nav>
                </div>
            </header>
        );
    }
};

export default Header;