import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

// idea is if user isn't signed in we have one big Add class card
// otherwise, we display all cards with their input data

function Cards() {
  return (
    <div className='cards'>
      <h1>Add Your Class!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text="Sign-In Here!"
              label='Semester'
              path='/sign-up' 
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text="Fall 2023"
              label='Semester'
              path='/services' 
            />
            <CardItem
              src='images/img-9.jpg'
              text="Fall 2023"
              label='Semester'
              path='/services' 
            />
            <CardItem
              src='images/img-9.jpg'
              text="Fall 2023"
              label='Semester'
              path='/services' 
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
