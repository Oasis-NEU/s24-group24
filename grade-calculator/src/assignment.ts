class Assignment {
    name: string;
    category: string;
    isGraded: boolean;
    rawPoints: number;
    totalPoints: number;

    constructor(name: string, category: string, totalPoints: number, score?: number) {
        this.name = name;
        this.category = category;
        this.totalPoints = totalPoints;
        this.rawPoints = score === undefined ? 0 : score;
        this.isGraded = score !== undefined;
    }

    /**
     * grades this assignment (sets the value of rawPoints to the given value)
     * @param points the raw number of points the student received
     */
    grade(points: number) {
        this.rawPoints = points;
        this.isGraded = true;
    }

    /**
     * @returns the score the student received on this assignment
     */
    score(): number {
        return this.rawPoints / this.totalPoints;
    }
}