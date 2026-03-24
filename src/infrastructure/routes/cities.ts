import { Hono } from "hono";
import { GetCityByNameHandler } from "infrastructure/handlers/cities/GetCitiesByNameHandler";
import { GetCitiesHandler } from "infrastructure/handlers/cities/GetCitiesHandler";
import { GetCityMatchsHandler } from "infrastructure/handlers/cities/GetCityMatchsHandler";

const citiesRouter = new Hono();

citiesRouter.get("/:name/matchs", (c) => new GetCityMatchsHandler().handle(c));
//ex cities/monaco
citiesRouter.get("/:name", (c) => new GetCityByNameHandler().handle(c));
// ex cities?name=mona = vu que on utilise filter et inclues  ca recherche pas une egalite struicte
citiesRouter.get("/", (c) => new GetCitiesHandler().handle(c));

export default citiesRouter;