import React from "react";
import './Header.css'

export const Header = () => {
    return (
        <header className="Header__container">
            <div className="logo">
                <img src={require("../../assets/images/lenses1.jpg")} alt="Logo Optyka" />
            </div>
            <nav className="Header__container_navbar">
                <ul className="Header__navbar_items">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
