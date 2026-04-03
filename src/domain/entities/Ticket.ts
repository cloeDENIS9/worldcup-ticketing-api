import { Customer } from "./Customer";
import { Match } from "./Match";

export class Ticket {
    constructor(
        public readonly id: number,
        public readonly match: Match,
        public readonly seat: string,
        public readonly customer: Customer
    ) {
        if (id <= 0 ) { 
            throw new Error("Invalide id")
        }
        if (!seat || seat.trim() ) { // source https://openclassrooms.com/forum/sujet/regexp-verifier-que-a-un-ou-plein-d-espaces 
            throw new Error("Seat cannot be empty")
        }
    }
}