import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { cities } from "infrastructure/mock/cities";
import { stadiums } from "infrastructure/mock/stadiums";
import { matchs } from "infrastructure/mock/matchs";

export class GetCityMatchsHandler {
  async handle(c: Context) {
    const name = c.req.param("name");
    const city = cities.find(
      (city) => city.name.toLowerCase() === name.toLowerCase()
    );
    if (!city) {
      throw new HTTPException(404, {
        message: "City not found"
      });
    }
    const cityStadiums = stadiums.filter(
      (stadium) =>
        stadium.city.name.toLowerCase() === city.name.toLowerCase()
    );
    const result = matchs.filter((match) =>
      cityStadiums.some(
        (stadium) => stadium.name === match.stadium.name
      )
    );
    return c.json({
      "success": true,
      "message": `Matchs in ${name}`,
      "data": result
    });
  }
}