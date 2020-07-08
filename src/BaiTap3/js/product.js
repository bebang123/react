import React from 'react';
import item from '../img/sp_note7.png'
export default function Product() {
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
            <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                    <img
                        className="card-img-top"
                        src={item}
                        alt=""
                        style={{ maxWidth: "100%", height: 250 }}
                    />
                    <div className="card-body text-center">
                        <h4 className="card-title text-center">Galaxy Note7</h4>
                        <p className="card-text">
                            The Galaxy Note7 comes with a perfectly symmetrical design for good
                            reason
        </p>
                        <a href="#a" className="btn btn-primary">
                            Detail
        </a>
                        <a href="#a" className="btn btn-danger">
                            Cart
        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}