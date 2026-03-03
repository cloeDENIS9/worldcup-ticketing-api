export class FifaCode {

    public readonly value: string;

    constructor(value: string) {
        this.value = value;
        if (value.length !== 3 || value !== value.toUpperCase()){
            throw new Error("Fifa code muste have 3letters in majuscule")
        }
    }

    equals(other: FifaCode): boolean {
        return this.value === other.value;
    }

    toString(): string {
        return this.value;
    }
}