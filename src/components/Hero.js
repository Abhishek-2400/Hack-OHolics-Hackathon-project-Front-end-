import React from 'react'
import { Button } from './Button'
import './Hero.css';
import video from '../videos/mars.mp4';
function Hero() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted></video>
            <h1>MARSBISTRO</h1>
            <h3>Where every dish is a celebration of the cosmos</h3>
            {/* <p>Tag line</p> */}
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Sign in as a Customer</Button>
                <br></br>
                <br></br>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Sign in as a Restaurant</Button>
            </div>
        </div>
    );
};

export default Hero;