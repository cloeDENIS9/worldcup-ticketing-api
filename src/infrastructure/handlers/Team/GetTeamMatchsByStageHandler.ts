import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { teams } from "infrastructure/mock/teams";
import { matchs } from "infrastructure/mock/matchs";
import { MatchStage } from "domain/enums/MatchStage";

export class GetTeamMatchesByStageHandler {
    async handle(c: Context) {
        const fifaCode = c.req.param("fifaCode");
        const stage = c.req.param("stage");

        if (!/^[A-Za-z]{3}$/.test(fifaCode)) {
            throw new HTTPException(400, {
            message: "Invalid FIFA code format"
            });
        }

        if (!Object.values(MatchStage).includes(stage as MatchStage)) { // objetc.value permet de recup les valeur de l 'enum source site stack overflow How to get all the values of an enum with typescript?
            throw new HTTPException(400, {
            message: "Invalid stage"
            });
        }
        
        const team = teams.find(
            (t) => t.fifaCode.value.toUpperCase() === fifaCode.toUpperCase()
        );

        if (!team) {
            throw new HTTPException(404, {
            message: "team not found"
            });
        }

        const result = matchs.filter(
        (match) =>( match.homeTeam.fifaCode.value.toUpperCase() === fifaCode.toUpperCase() ||
                    match.awayTeam.fifaCode.value.toUpperCase() === fifaCode.toUpperCase()
                ) && match.stage === (stage as MatchStage)
        );
        return c.json({
            success: true,
            message: `Matchs for team ${fifaCode} at stage ${stage}`,
            data: result
        });
    }
}

