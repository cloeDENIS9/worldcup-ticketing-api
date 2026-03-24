import { Context } from "hono";
import { countries } from "../../mock/countries";
import { HTTPException } from "hono/http-exception";

export class GetCountryByCodeHandler {
  async handle(c: Context) {
    const code = c.req.param("code");

    const country = countries.find(
      country => country.code.toLowerCase() === code.toLowerCase()
    );

    if (!country) {
      throw new HTTPException(404, {message: "Country not found" });
    }

    return c.json({
      success: true,
      message: `Country ${country.name}`,
      data: country
    });
  }
}