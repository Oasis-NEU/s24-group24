import React, { useState } from 'react';
import Assignment from './Assignment';
import Cards from './Cards';
import CardItem from './CardItem';

const letterValue = (grade) => {
    if (grade >= 93) {
        return 'A';
    } else if (grade >= 90) {
        return 'A-';
    } else if (grade >= 87) {
        return 'B+';
    } else if (grade >= 83) {
        return 'B';
    } else if (grade >= 80) {
        return 'B-';
    } else if (grade >= 77) {
        return 'C+';
    } else if (grade >= 73) {
        return 'C';
    } else if (grade >= 70) {
        return 'C-';
    } else if (grade >= 67) {
        return 'D+';
    } else if (grade >= 63) {
        return 'D';
    } else if (grade >= 60) {
        return 'D-';
    } else {
        return 'F';
    }
}

const Course = () => {
    const [name, setName] = useState('');
    const [prof, setProf] = useState('');
    const [credits, setCredits] = useState(0);
    const [assignments, setAssignments] = useState([]);
    const [grade, setGrade] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleProfChange = (event) => {
        setProf(event.target.value);
    };

    const handleCreditsChange = (event) => {
        setCredits(Number(event.target.value)); // Convert to number
    };

    const addAssignment = (assignment) => {
        setAssignments(prevAssignments => [...prevAssignments, assignment]);
    };

    const handleAssignmentChange = (index, updatedAssignment) => {
        setAssignments(prevAssignments => prevAssignments.map((assignment, i) => i === index ? updatedAssignment : assignment));
    };

    const removeAssignment = (index) => {
        setAssignments(assignments.filter((_, i) => i !== index));
    }

    const calculateGrade = () => {
        let total = 0;
        let totalWeight = 0;
        assignments.forEach(assignment => {
            total += Number(assignment.score / assignment.totalPoints * assignment.weight);
            totalWeight += Number(assignment.weight);
        });

        setGrade(Number(((total / totalWeight) * 100).toFixed(2)));
    };

    return (
        <div>
            <p>Course</p>
            <input
                type="text"
                name="name"
                placeholder="Course Name"
                value={name}
                onChange={handleNameChange}
            />
            <br />
            <p>Professor</p>
            <input
                type="text"
                name="professor"
                placeholder="Professor"
                value={prof}
                onChange={handleProfChange}
            />
            <br />
            <p>Credits</p>
            <input
                type="number"
                name="credits"
                placeholder="Credits"
                value={credits}
                onChange={handleCreditsChange}
            />
            <br />
            {assignments.map((assignment, index) => (
                <div>
                    <br />
                    <CardItem 
                        text={<Assignment key={index} onAssignmentChange={(updatedAssignment) => handleAssignmentChange(index, updatedAssignment)} />}
                        label="Assignment"
                    />
                </div>
            ))}
            <br />
            <button onClick={addAssignment}>Add Assignment</button>
            <br />
            <br />
            <button onClick={calculateGrade}>Calculate Grade</button>
            <br />
            <br />
            <p>
                Grade: {grade} | {letterValue(grade)}
            </p>
        </div>
    )
}

export default Course;