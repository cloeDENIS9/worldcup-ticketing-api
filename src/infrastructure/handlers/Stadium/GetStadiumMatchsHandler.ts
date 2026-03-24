import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { stadiums } from "infrastructure/mock/stadiums";
import { matchs } from "infrastructure/mock/matchs";

export class GetStadiumMatchsHandler {
  async handle(c: Context) {
    const name = c.req.param("name");
    const stadium = stadiums.find(
      (s) => s.name.toLowerCase() === name.toLowerCase()
    );

    if (!stadium) {
      throw new HTTPException(404, {
        message: `Stadium "${name}" does not exist`,
      });
    }

    const result = matchs.filter(
      (match) => match.stadium.name.toLowerCase() === name.toLowerCase()
    );
console.log(result)
    return c.json({
      success: true,
      message: `Matchs at ${stadium.name}`,
      data: result,
    });
    
  }
}