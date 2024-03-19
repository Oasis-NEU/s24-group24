class Course {
    name: string;
    prof: string;
    credits: number;
    assignments: Assignment[];
    weights: Map<string, number>;

    constructor(name: string, prof: string, credits: number, assignments?: Assignment[]) {
        this.name = name;
        this.prof = prof;
        this.credits = credits;
        this.assignments = assignments === undefined ? [] : assignments;
        this.weights = new Map<string, number>();
    }

    /**
     * adds an assignment to this course
     * @param name the name of the assignment
     * @param category the category of the assignment
     * @param totalPoints the total number of points of the assignment
     * @param score the score the student received (in raw points) on the assignment
     */
    addAssignment(name: string, category: string, totalPoints: number, score?: number) {
        if (score === undefined) {
            this.assignments.push(new Assignment(name, category, totalPoints));
        } else {
            this.assignments.push(new Assignment(name, category, totalPoints, score));
        }
    }

    /**
     * @param cat the desired assignment category
     * @returns the number of assignments in the given category
     */
    numberInCategory(cat: string): number {
        return this.assignments.filter(assignment => assignment.category === cat).length;
    }

    /**
     * @returns the current grade the student has in this course
     */
    calculateGrade(): number {
        let grade: number = 0;
        this.assignments.forEach((assignment) => {
            if (this.weights.has(assignment.category) && assignment.isGraded) {
                grade += assignment.score()
                * ((this.weights.get(assignment.category) as number)
                / this.numberInCategory(assignment.category));
            }
        });
        return grade;
    }

    letterGrade(): string {
        let grade: number = this.calculateGrade();
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
}