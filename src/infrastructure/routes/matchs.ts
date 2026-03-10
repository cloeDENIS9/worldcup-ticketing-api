//sert a rassembler tt les def de endpoints et de routes associes a match
import { Hono } from "hono";
import { GetMatchsHandler } from "../handlers/GetMatchsHandler";
import { GetMatchByIdHandler } from "../handlers/GetMatchByIdHandler";

const matchsRouter = new Hono();

matchsRouter.get("/", (c) => new GetMatchsHandler().handle(c));
matchsRouter.get("/:id", (c) => new GetMatchByIdHandler().handle(c));

export default matchsRouter;