import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { teams } from "infrastructure/mock/teams";

export class GetTeamByFifaCodeHandler {
  async handle(c: Context) {
    const fifaCode = c.req.param("fifaCode");

    if (!/^[A-Za-z]{3}$/.test(fifaCode)) {
      throw new HTTPException(400, {
        message: "Invalid FIFA code format",
      });
    }

    const team = teams.find(
      (t) => t.fifaCode.value.toUpperCase() === fifaCode.toUpperCase()
    );

    if (!team) {
      throw new HTTPException(404, {
        message: "team not found",
      });
    }

    return c.json({
      success: true,
      message: `Team ${fifaCode}`,
      data: {
        name: team.name,
        code: {
          value: team.fifaCode.value.toUpperCase(),
        },
      },
    });
  }
}



