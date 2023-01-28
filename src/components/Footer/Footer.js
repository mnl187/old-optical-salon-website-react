import React from "react";

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Skotaktuj się z nami</h3>
                        <ul>
                            <li>Addres: 123 Main St</li>
                            <li>Telefon: 555-555-5555</li>
                            <li>Email: info@optika.com</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>O nas</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed auctor, magna id congue luctus, urna
                            risus tempus augue, a varius odio est ut nibh.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}