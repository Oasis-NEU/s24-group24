class Student {
    name: string;
    year: number;
    semesters: Semester[];

    constructor(name: string, year: number, semesters?: Semester[]) {
        this.name = name;
        this.year = year;
        this.semesters = semesters === undefined ? [] : semesters;
    }

    totalCredits(): number {
        let total: number = 0;
        this.semesters.forEach((semester) => {
            total += semester.totalCredits();
        });
        return total;
    }

    cumulativeGPA(): number {
        let totalPoints: number = 0;
        this.semesters.forEach((semester) => {
            totalPoints += semester.gpa() * semester.totalCredits();
        });
        return totalPoints / this.totalCredits();
    }
}