import React from 'react';
import PromotionItem from './promotion-item';

export default function Promotion() {
    return (
        <section id="promotion" className="container-fluid pt-5 pb-5">
            <h1 className="text-center text-white">PROMOTION</h1>
            <div className="container bg-light pt-5 pb-5">
                <div className="row">
                    <PromotionItem/>
                    <PromotionItem/>
                    <PromotionItem/>
                </div>
            </div>
        </section>
    );
}