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
        if (assignments === undefined) {
            this.assignments = [];
        } else {
            this.assignments = assignments;
        }
        this.weights = new Map<string, number>();
    }

    addAssignment(name: string, category: string, totalPoints: number, score?: number) {
        if (score === undefined) {
            this.assignments.push(new Assignment(name, category, totalPoints));
        } else {
            this.assignments.push(new Assignment(name, category, totalPoints, score));
        }
    }

    numberInCategory(cat: string): number {
        return this.assignments.filter(assignment => assignment.category === cat).length;
    }

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
}