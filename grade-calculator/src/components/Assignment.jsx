import React, { useState } from 'react';

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

const Assignment = ({ onAssignmentChange }) => {
    const [state, setState] = useState({
        name: '',
        score: 0.0,
        totalPoints: 0.0,
        weight: 0.0
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
        onAssignmentChange(state);
    }

    return (
        <div>
            <p>Name</p>
            <input
                type="text"
                name="name"
                placeholder="Assignment Name"
                value={state.name}
                onChange={handleChange}
            />
            <br />
            <p>Weight</p>
            <input
                type="number"
                name="weight"
                placeholder="Weight"
                value={state.weight}
                onChange={handleChange}
            />
            <br />
            <p>Points Earned</p>
            <input
                type="number"
                name="score"
                placeholder="Score"
                value={state.score}
                onChange={handleChange}
            />
            <br />
            <p>Total Points</p>
            <input
                type="number"
                name="totalPoints"
                placeholder="Total Points"
                value={state.totalPoints}
                onChange={handleChange}
            />
            <br />
            <br />
            <button onClick={handleChange}>Set Grade</button>
            <br />
            <br />
            <p>
                Grade: {state.score}/{state.totalPoints} | {Math.floor(state.score / state.totalPoints * 100)} | {letterValue(Math.floor(state.score / state.totalPoints * 100))}
            </p>
        </div>
    )
}

export default Assignment;