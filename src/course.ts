class Course {
    name: string;
    prof: string;
    assignments: Assignment[];
    weights: Map<string, number>;

    constructor(name: string, prof: string, assignments?: Assignment[]) {
        this.name = name;
        this.prof = prof;
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
}