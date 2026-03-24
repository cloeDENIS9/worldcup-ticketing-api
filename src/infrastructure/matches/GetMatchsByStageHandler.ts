import { MatchStage } from ":@domain/enums/MatchStage";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { matchs } from "infrastructure/mock/matchs";

export class GetMatchsByStageHandler {
  async handle(c: Context) {
    const stage = c.req.param("stage");

    if (!Object.values(MatchStage).includes(stage as MatchStage)) {
      throw new HTTPException(400, {
        message: `Invalid stage: "${stage}"`
      });
    }

    const result = matchs.filter(
      (match) => match.stage === stage
    );

    return c.json({
      success: true,
      message: `Matchs at stage ${stage}`,
      data: result
    });
  }
}

