import React from 'react';
import {Header} from '../../components/Header';
import {ProductList} from '../../components/ProductList';
// import {CallToAction} from './components/CallToAction';
// import {Footer} from './components/Footer';

export const Home = () => {
    return (
        <div>
            <Header/>
            <ProductList/>
            {/*<CallToAction*/}
            {/*    message="Znajdź swoje idealne okulary już dziś!"*/}
            {/*    buttonText="Przeglądaj produkty"*/}
            {/*    link="/products"*/}
            {/*/>*/}
            {/*<Footer/>*/}
        </div>
    );
};