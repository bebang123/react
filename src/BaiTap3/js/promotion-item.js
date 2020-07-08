import React from 'react';
import Promotion_img from '../img/promotion_1.png'
export default function PromotionItem() {
    return (
        <div className="col-xs-12 col-sm-12 col-md-4">
            <div className="container">
                <img src={Promotion_img} alt="" style={{ maxWidth: "100%" }} />
            </div>
        </div>
    );
}