export class Country{

    private static readonly paysOk = [{name: "USA", code: "us"}, {name: "Maxico", code: "me"}, {name: "Canada", code: "ca"}]

    constructor(
        public readonly name: string,
        public readonly code: string,
    ) {
        if (!Country.paysOk.some(p => p.name === name && p.code === code)) { // .some retourne true si elle trouve un élément dans le tableau qui satisfait la fonction de test fournie source: site mdn_
            throw new Error("Invalide country or code country: they are not correspondante")
        }
    }
}