import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

// <video src='/videos/video-2.mp4' autoPlay loop muted />

/*
        <Button 
          className='btns' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
*/

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Track Your Grades</h1>
      <p>Save you grades from your semsters and organize your GPA</p>
      <div className='hero-btns'>
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
