import React from "react";
import './App.css';
import {Home} from "./pages/Home/Home";
import {Footer} from "./components/Footer/Footer";

export const App = () => {
    return (
        <div>
            <Home/>
            <Footer/>
        </div>
    )
}
