import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { countries } from "infrastructure/mock/countries";
import { cities } from "infrastructure/mock/cities";

export class GetCountryCitiesHandler {
  async handle(c: Context) {
    const code = c.req.param("code");

    const country = countries.find(
      (c) => c.code.toLowerCase() === code.toLowerCase()
    );

    if (!country) {
      throw new HTTPException(404, {
        message: "Country not found"
      });
    }

    const result = cities.filter(
      (city) =>
        city.country.code.toLowerCase() === country.code.toLowerCase()
    );

    return c.json({
      success: true,
      message: `Cities in ${country.name}`,
      data: result
    });
  }
}