import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { cities } from "infrastructure/mock/cities";

export class GetCityByNameHandler {
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

    return c.json({
      success: true,
      message: `City ${name}`,
      data: city
    });
  }
}