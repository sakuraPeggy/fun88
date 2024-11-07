import React from "react";
import { Carousel } from 'react-responsive-carousel';
import '../styles/global.css';
import frameImage from '../assets/Banner/Frame18.webp';


const BannerCarousel = () => (
    <Carousel showThumbs={false} emulateTouch>
        <div className="banner-carousel"><img src={frameImage} /></div>
        <div><img src={frameImage} alt="Banner 2" /></div>
    </Carousel>
);

export default BannerCarousel;