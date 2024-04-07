import React, { useState } from 'react';
import Course from './Course';
import Assignment from './Assignment';
import CardItem from './CardItem';

const gpaValue = (grade) => {
    if (grade >= 93) {
        return 4.0;
    } else if (grade >= 90) {
        return 3.667;
    } else if (grade >= 87) {
        return 3.333;
    } else if (grade >= 83) {
        return 3.0;
    } else if (grade >= 80) {
        return 2.667;
    } else if (grade >= 77) {
        return 2.333;
    } else if (grade >= 73) {
        return 2.0;
    } else if (grade >= 70) {
        return 1.667;
    } else if (grade >= 67) {
        return 1.333;
    } else if (grade >= 63) {
        return 1.0;
    } else if (grade >= 60) {
        return 0.667;
    } else {
        return 0.0;
    }
}

const Semester = () => {
    const [name, setName] = useState('');
    const [courses, setCourses] = useState([]);

    const [gpa, setGPA] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const addCourse = (course) => {
        let c = courses;
        c.push(course);
        setCourses(c);
    }

    const removeCourse = (index) => {
        setCourses(courses.filter((_, i) => i !== index));
    }

    const calculateGPA = () => {
        let total = 0;
        courses.forEach(course => {
            total += course.grade;
        });

        setGPA(gpaValue(total / courses.length));
    }

    return (
        <div>
            <input
                type="text"
                name="name"
                placeholder="Semester Name"
                value={name}
                onChange={handleNameChange}
            />
            <br />
            {courses.map((course, index) => (
                <div>
                    <CardItem
                        text={<Course key={index} />}
                        label="Course"
                    />
                </div>
            ))}
            <br />
            <button onClick={addCourse}>Add Course</button>
            <p>
                <br />
                GPA: {gpa}
                <br />
                Total Credits: {courses.reduce((acc, course) => acc + course.credits, 0)}
            </p>
        </div>
    )
}

export default Semester;