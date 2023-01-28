import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'

export const Header = () => {
    return (
        <header>
            <nav>
                <ul className="Header__container">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
)
}
