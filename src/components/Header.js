import React from "react";
import {Link} from 'react-router-dom';
import './Header.css'

export const Header = () => {
    return <>
        <header>
            <nav>
                <ul>
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
        );
        };

        export default Header;

        <div className="Header__container">
            <img src="../assets/images/lenses1.jpg" alt="lenses1"/>
        </div>
    </>
}
