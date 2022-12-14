import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';
import video from "../../videos/Rocket League Free To Play Cinematic Trailer.mp4";

function HeroSection() {
  return (
    <div className='--hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>Welcome to the Nation of RED!</h1>
      <p>Join Us and Play!</p>
      <div className='--hero-btns'>
        <Button
          className='--btns'
          buttonStyle='--btn--outline'
          buttonSize='--btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='--btns'
          buttonStyle='--btn--primary'
          buttonSize='--btn--large'
          onClick={console.log('hey')}
        >
          WATCH COMPILATION <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
