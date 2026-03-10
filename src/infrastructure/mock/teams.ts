import { Team } from ":@domain/entities/Team";
import { FifaCode } from ":@domain/value-objets/FifaCode";

export const teams: Team[] = [
  new Team("USA", new FifaCode("USA")),
  new Team("Mexico", new FifaCode("MEX")),
  new Team("Canada", new FifaCode("CAN")),
  new Team("France", new FifaCode("FRA")),
];