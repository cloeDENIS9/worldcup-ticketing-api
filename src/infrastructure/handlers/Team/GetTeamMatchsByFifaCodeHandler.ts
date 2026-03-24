
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { teams } from "infrastructure/mock/teams";
import { matchs } from "infrastructure/mock/matchs";

export class GetTeamMatchesByFifaCodeHandler {
  async handle(c: Context) {
    const fifaCode = c.req.param("fifaCode");

    if (!/^[A-Za-z]{3}$/.test(fifaCode)) {
      throw new HTTPException(400, {
        message: "Invalid FIFA code format",
      });
    }

    const team = teams.find( // La méthode find() des instances de Array retourne le premier élément du tableau fourni qui satisfait la fonction de test donnée source site mdn
      (t) => t.fifaCode.value.toUpperCase() === fifaCode.toUpperCase() //attentionfifacode est pas du type str il est du type fifacode sont string est dans fifacode.value 
    );

    if (!team) {
      throw new HTTPException(404, {
        message: "team not found",
      });
    }

    const result = matchs.filter(
      (match) =>
        match.homeTeam.fifaCode.value.toUpperCase() === fifaCode.toUpperCase() ||
        match.awayTeam.fifaCode.value.toUpperCase() === fifaCode.toUpperCase()
    );

    return c.json({
        success: true,
        message: `Matchs for team ${fifaCode}`,
        data: result
    });
  }
}
