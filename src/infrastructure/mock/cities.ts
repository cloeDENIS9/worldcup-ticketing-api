import { Country } from ":@domain/entities/Country";
import { City } from ":@domain/entities/City";
import { countries } from "./countries";// quand on regarde la classe city on voit que pour contruire une ville il faut un pays donc pour cree des villes on a besoin de savoir les pays

export const cities: City[] = [
    new City(countries[0], "New York"),
    new City(countries[1], "Mexico City"),
    new City(countries[2], "Toronto"),
    new City(countries[0], "Miami")
]