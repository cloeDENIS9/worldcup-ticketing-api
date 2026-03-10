import { Stadium } from ":@domain/entities/Stadium";
import { cities } from "./cities";

// constructeur: nom capacité ville
export const stadiums: Stadium[] = [
  new Stadium("MetLife Stadium", 80000, cities[0]),
  new Stadium("Estadio Azteca", 87000, cities[1]),
  new Stadium("Rogers Centre", 50000, cities[2])
];