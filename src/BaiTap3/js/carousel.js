import React from 'react';
import Sidel_1 from '../img/slide_1.jpg';
import Sidel_2 from '../img/slide_2.jpg';
import Sidel_3 from '../img/slide_3.jpg';
export default function Carousel() {
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active" />
                <li data-target="#demo" data-slide-to={1} />
                <li data-target="#demo" data-slide-to={2} />
            </ul>
            {/* The slideshow */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={Sidel_1}
                        alt="Los Angeles"
                        width={1100}
                        height={500}
                    />
                </div>
                <div className="carousel-item">
                    <img src={Sidel_2} alt="Chicago" width={1100} height={500} />
                </div>
                <div className="carousel-item">
                    <img src={Sidel_3} alt="New York" width={1100} height={500} />
                </div>
            </div>
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon" />
            </a>
        </div>

    );
}