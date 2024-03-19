const gpaValue = (grade: number): number => {
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

class Semester {
    name: string;
    courses: Course[];

    constructor(name: string, courses?: Course[]) {
        this.name = name;
        this.courses = courses === undefined ? [] : courses;
    }

    totalCredits(): number {
        let total: number = 0;
        this.courses.forEach((course) => {
            total += course.credits;
        });
        return total;
    }

    gpa(): number {
        let totalPoints = 0;
        this.courses.forEach((course) => {
            totalPoints += gpaValue(course.calculateGrade()) * course.credits;
        });
        return totalPoints / this.totalCredits();
    }
}