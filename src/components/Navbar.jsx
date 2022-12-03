import React from "react";
import '../assets/navbar.css';

function Navbar() {
    return (
        <nav className="nav">
          <a href="/" className="site-title">
            Site name
          </a>
          
          <ul>

            <li>
              <a href="/">Coruscant</a>
            </li>

            <li>
              <a href="/">Tatooine</a>
            </li>

            <li>
              <a href="/">Nabu</a>
            </li>
            <li>
                <a href="/" className="btnNav">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar;