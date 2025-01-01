export default class Segment {
    constructor(readonly distance: number, readonly date: Date) {
        if (!this.isValidDistance()) throw new Error("Invalid distance");
        if (!this.isValidDate()) throw new Error("Invalid date");
    }

    isOvernight(): boolean {
        return this.date.getHours() >= 22 || this.date.getHours() <= 6;
    }

    isSunday(): boolean {
        return this.date.getDay() === 0;
    }

    isValidDistance(): boolean {
        return this.distance != null && this.distance != undefined && typeof this.distance === "number" && this.distance > 0
    }

    isValidDate(): boolean {
        return this.date != null && this.date != undefined && this.date instanceof Date && this.date.toString() !== "Invalid Date"
    }
}