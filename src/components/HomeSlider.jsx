import React from 'react';
import colorful_laptop from "../img/colorful_laptop.jpg";

const HomeSlider = () => {
    return (
        <div className="home-slider" >
            <section className="shopping-slider">
                <img src={colorful_laptop} alt="" />
            </section>
        </div>
    );
}

export default HomeSlider;
