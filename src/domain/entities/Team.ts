// propriétés = une équipe a un nom un code fifa un pays
// readonly = on ne peut plus la modifir après creation
// entre les {} s'est les regle metiers

import { FifaCode } from ":@domain/value-objets/FifaCode";

export class Team {
    constructor(
        public readonly name: string,
        public readonly code: FifaCode
    ) {}
}