import { Country } from "./Country"

export class City {

    private static readonly villeDuPays: Record<string, string[]> = { // Record<string, A | B> permet d'avoir un objet qui associe une clef d un cerain type a une valeur d un certain type source: blog reddit
        USA: ["Atlanta", "Boston", "Dallas", "Houston", "Kansas City", "Los Angeles", "Miami", "New York", "Philadelphia", "Seattle", "San Francisco"],
        Mexico: ["Guadalajara", "Mexico City", "Monterrey"],
        Canada: ["Toronto", "vancouver"]
    }

    constructor(
        public readonly country: Country,
        public readonly name: string
    ) {
        if (!City.villeDuPays[country.name] || !City.villeDuPays[country.name].includes(name)) { // es ce que le pays existe? ou es ce que la ville fait partie du pays
            throw new Error("City isn't a city du country")
        }
    }
}