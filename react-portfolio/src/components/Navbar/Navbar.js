import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <nav>
        <div className="logo">James Inch</div>
        <ul>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/portfolio">Portfolio</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
)

export default Navbar;