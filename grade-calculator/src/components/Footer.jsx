import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
          ShowMyGrades.com - Calculating Grades Could Not Be Any More Efficient
          <br />
          Thank you to our mentor Willie Brooks for the excellent 
          advice to get this
          project rolling. 
          <br />
          Learn more about the creators behind the website!
        </p>

      </section>

    
        <div className="about-spread">
         <div className="about-text1">
          <img className="mateo-image"></img>
           <p>Mateo Biggs: Hi! My name is Mateo, and I am a 
            first-year Northeastern University undergraduate CS student.
            I am from the Columbus, Ohio, area and love to spend my free 
            time playing soccer, reviewing movies, reading, and programming 
            video games.  I am hoping to become a patent agent or software 
            engineer after graduating.
            Check out my LinkedIn  <a href="https://www.linkedin.com/in/mateo-biggs-a192461b1/">here</a>.
            <br />
            <br />
            <img className="mihalis-image"></img>
            Mihalis Koutouvos: Hello! My name is Mihalis, a first-year student 
            studying computer science at Northeastern University. I am from Ashland, 
            Massachusetts, and some of my personal interests include working out, cooking, 
            running/swimming, coding personal projects, and exploring new areas.
            I am aiming to become an AI or software engineer. 
            Check out my LinkedIn  <a href="www.linkedin.com/in/mihalis-koutouvos">here</a>.
            </p>
            </div>

            <div className="about-text2">
            <img className="jeremy-image"></img>
            <p>Jeremy Marino: Hi! My name is Jeremy, and I am a first-year student 
            at Northeastern University majoring in computer science. I am from Lakeville, Massachusetts, 
            and I enjoy spending time with friends, playing basketball and videogames, 
            and exploring. I am currently considering becoming a web developer. 
            Check out my LinkedIn <a href="https://www.linkedin.com/in/jeremy-marino-941563244/">here</a>. 
            <br />
            <br />
            <img className="smyan-image"></img>
            Smyan Sengupta: Hey! My name is Smyan, a first-year student 
            studying computer science at Northeastern University. I am from Niskayuna,
            New York, and I like exploring the city, biking, speedcubing, and trains.
            I hope to go into some part of the software engineering field, and I am 
            especially interested in becoming an AI engineer. 
            Check out my LinkedIn <a href="https://www.linkedin.com/in/smyan-sengupta/">here</a>.
            </p>
         </div>
        </div>
     
    </div>
  )
}

export default Footer
