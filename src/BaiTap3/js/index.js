import React from 'react';
import Header from './header';
import Carousel from './carousel';
import Products from './products';
import Promotion from './promotion';

export default function BaiTap3(){
    return(
        <div className="bg-dark">
            <Header/>
            <Carousel/>
            <Products/>
            <Products/>
            <Promotion/>
        </div>
    );
}