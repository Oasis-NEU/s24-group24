class Student {
    name: string;
    year: number;
    semesters: Semester[];

    constructor(name: string, year: number, semesters?: Semester[]) {
        this.name = name;
        this.year = year;
        this.semesters = semesters === undefined ? [] : semesters;
    }

    /**
     * @returns the total number of credits this student has taken
     */
    totalCredits(): number {
        let total: number = 0;
        this.semesters.forEach((semester) => {
            total += semester.totalCredits();
        });
        return total;
    }

    /**
     * @returns the cumulative GPA of this student on a 4.0 scale
     */
    cumulativeGPA(): number {
        let totalPoints: number = 0;
        this.semesters.forEach((semester) => {
            totalPoints += semester.gpa() * semester.totalCredits();
        });
        return totalPoints / this.totalCredits();
    }
}