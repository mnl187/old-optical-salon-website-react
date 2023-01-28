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
                    <li><a href="/about">Salon</a></li>
                    <li><a href="/services">Usługi</a></li>
                    <li><a href="/contact">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
}
