import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <h2>ORDER YOUR FAVOURITE FOOD FROM HERE😋🚀</h2>
                <p>
                    {" "}
                    ENJOY DELICIOUS MEALS DELIVERED TO YOUR DOOR. SATISFY YOUR
                    CRAVINGS WITH OUR FAST, CONVENIENT DELIVERY—HOT AND FRESH!
                </p>
                <a href="#explore-menu">
                    <button> View Menu</button>
                </a>
            </div>
        </div>
    );
};

export default Header;
