import { City } from "./City";

export class Stadium {
    constructor(
        public readonly name: string,
        public readonly capacity: number,
        public readonly city: City
    ) {
        if (capacity <= 0) {
            throw new Error("Stadium can't don't have place")
        }
    }
}