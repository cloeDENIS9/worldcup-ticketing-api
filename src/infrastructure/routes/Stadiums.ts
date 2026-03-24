import { Hono } from "hono";
import { GetStadiumByNameHandler } from "infrastructure/handlers/Stadium/GetStadiumByNameHandler";
import { GetStadiumMatchsHandler } from "infrastructure/handlers/Stadium/GetStadiumMatchsHandler";
import { GetStadiumsHandler } from "infrastructure/handlers/Stadium/GetStadiumsHandler";

const stadiumsRouter = new Hono();

stadiumsRouter.get("/:name/matchs", (c) => new GetStadiumMatchsHandler().handle(c) );
stadiumsRouter.get("/:name", (c) => new GetStadiumByNameHandler().handle(c) );

stadiumsRouter.get("/", (c) => new GetStadiumsHandler().handle(c) );

export default stadiumsRouter;