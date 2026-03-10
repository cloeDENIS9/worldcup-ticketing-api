import { Hono } from "hono";
import { GetHomeHandler } from "infrastructure/handlers/home/GetHealthHandler";
import { GetHealthHandler } from "infrastructure/handlers/home/GetHomeHandler";

const homeRouter = new Hono();

homeRouter.get("/", (c) => new GetHomeHandler().handle(c));
homeRouter.get("/health",(c) => new GetHealthHandler().handle(c));

export default homeRouter;