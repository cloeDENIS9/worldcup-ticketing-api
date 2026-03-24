import { Hono } from "hono";
import { GetCountryByCodeHandler } from "infrastructure/handlers/Country/GetCountriesByCodeHandler";
import { GetCountriesHandler } from "infrastructure/handlers/Country/GetCountriesHandler";
import { GetCountryCitiesHandler } from "infrastructure/handlers/Country/GetCountryCitiesHandler";


const countryRouter = new Hono();

countryRouter.get("/:code/cities", (c) => new GetCountryCitiesHandler().handle(c));
countryRouter.get("/:code", (c) => new GetCountryByCodeHandler().handle(c));
countryRouter.get("/", (c) => new GetCountriesHandler().handle(c));

export default countryRouter;