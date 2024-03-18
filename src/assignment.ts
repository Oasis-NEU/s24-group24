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
        if (score === undefined) {
            this.rawPoints = 0;
            this.isGraded = false;
        } else {
            this.rawPoints = score;
            this.isGraded = true;
        }
    }

    grade(points: number) {
        this.rawPoints = points;
        this.isGraded = true;
    }

    score(): number {
        return this.rawPoints / this.totalPoints;
    }
}