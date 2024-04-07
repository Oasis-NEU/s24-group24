import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Assignment from './Assignment';
import Course from './Course';
import Semester from './Semester';
import { useState } from 'react';

// idea is if user isn't signed in we have one big Add class card
// otherwise, we display all cards with their input data

function Cards() {
  const [semesters, setSemesters] = useState([]);

  const addSemester = (semester) => {
    let s = semesters;
    s.push(semester);
    setSemesters(s);
  }

  const removeSemester = (index) => {
    setSemesters(semesters.filter((_, i) => i !== index));
  }

  return (
    <div className='cards'>
      <h2>Add Your Class!</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/* {semesters.map((semester, index) => (
              <div>
                <br /> */}
                <CardItem
                  text={<Course />}
                  label="Course"
                />
              {/* </div>
            ))}
            <br />
            <button onClick={addSemester}>Add Semester</button> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
