import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Track Your Grades</h1>
      <p>Save your grades from your semsters and organize your GPA</p>
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
  );
}

export default HeroSection;
