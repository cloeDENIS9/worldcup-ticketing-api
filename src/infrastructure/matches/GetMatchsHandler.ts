//sert a recup ts les matchs
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { matchs } from "infrastructure/mock/matchs";
import { MatchStage } from "domain/enums/MatchStage";

export class GetMatchsHandler {
  async handle(c: Context) {
    const code = c.req.query("team[code]");
    const stage = c.req.query("stage");
    const date = c.req.query("date");

    let res = matchs;

    if (date) {
      const dateok = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateok.test(date)) {
        throw new HTTPException(400, {
          message: "Invalid date format"
        });
      }

      res = res.filter(
        (match) =>
          match.date.toISOString().split("T")[0] === date
      );

      return c.json({
        success: true,
        message: `Matchs filtered by date: ${date}`,
        data: res
      });
    }

    if (code) {
      if (!/^[A-Za-z]{3}$/.test(code)) {
        throw new HTTPException(400, {
          message: `Invalid FIFA code: "${code}"`
        });
      }

      res = res.filter(
        (match) =>
          match.homeTeam.fifaCode.value.toUpperCase() === code.toUpperCase() ||
          match.awayTeam.fifaCode.value.toUpperCase() === code.toUpperCase()
      );

      return c.json({
        success: true,
        message: `Matchs filtered by team[code]: ${code}`,
        data: res
      });
    }

    if (stage) {
      if (!Object.values(MatchStage).includes(stage as MatchStage)) {
        throw new HTTPException(400, {
          message: `Invalid stage: "${stage}"`
        });
      }

      res = res.filter(
        (match) => match.stage === stage
      );

      return c.json({
        success: true,
        message: `Matchs filtered by stage: ${stage}`,
        data: res
      });
    }

    return c.json({
      success: true,
      message: "All matchs",
      data: res
    });
  }
}


/*
All matchs
Matchs filtered by team[code]: ${code}*/

//{{host}}/matchs?team[code]=FRA