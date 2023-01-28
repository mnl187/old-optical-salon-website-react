import React from "react";
import { Link } from 'react-router-dom';

export const CallToAction = (props) => {
    return (
        <div className="call-to-action">
            <h2>{props.message}</h2>
            <Link to={props.link}>
                <button>{props.buttonText}</button>
            </Link>
        </div>
    );
}