import React from 'react';
import {ProductList} from '../../components/ProductList';
import {CallToAction} from '../../components/CallToAction';
import "./Home..css"

export const Home = () => {
    return (
        <div className="Home">
            <ProductList/>
            <CallToAction
                message="Znajdź swoje idealne okulary już dziś!"
                buttonText="Przeglądaj produkty"
                link="/products"
            />
        </div>
    );
};