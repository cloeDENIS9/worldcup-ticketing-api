import { Context } from "hono";
import { stadiums } from "infrastructure/mock/stadiums";

export class GetStadiumsHandler {
  async handle(c: Context) {
    const cityName = c.req.query("city[name]");
    const countryName = c.req.query("country[name]");
    const countryCode = c.req.query("country[code]");

    if (cityName) {
      const result = stadiums.filter(
        (stadium) =>
          stadium.city.name.toLowerCase().includes(cityName.toLowerCase())
      );

      return c.json({
        success: true,
        message: `Stadiums filtered by city[name]: ${cityName}`,
        data: result
      });
    }

    if (countryName) {
      const result = stadiums.filter(
        (stadium) =>
          stadium.city.country.name.toLowerCase().includes(countryName.toLowerCase())
      );

      return c.json({
        success: true,
        message: `Stadiums filtered by country[name]: ${countryName}`,
        data: result
      });
    }

    if (countryCode) {
      const result = stadiums.filter(
        (stadium) =>
          stadium.city.country.code.toLowerCase() === countryCode.toLowerCase()
      );

      return c.json({
        success: true,
        message: `Stadiums filtered by country[code]: ${countryCode}`,
        data: result
      });
    }

    return c.json({
      success: true,
      message: "All stadiums",
      data: stadiums
    });
  }
}
