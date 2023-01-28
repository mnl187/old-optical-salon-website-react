import React from 'react';
import {ProductList} from '../../components/ProductList';
import {CallToAction} from '../../components/CallToAction';

export const Home = () => {
    return (
        <div>
            <ProductList/>
            <CallToAction
                message="Znajdź swoje idealne okulary już dziś!"
                buttonText="Przeglądaj produkty"
                link="/products"
            />
        </div>
    );
};