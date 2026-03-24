//sert a rassembler tt les def de endpoints et de routes associes a match
import { Hono } from "hono";
import { GetMatchsHandler } from "../matches/GetMatchsHandler";
import { GetMatchByIdHandler } from "../matches/GetMatchByIdHandler";
import { GetMatchsByStageHandler } from "infrastructure/matches/GetMatchsByStageHandler";
import { GetMatchsByStatusHandler } from "infrastructure/matches/GetMatchsByStatusHandler";

const matchsRouter = new Hono();

matchsRouter.get("/status/:status", (c) => new GetMatchsByStatusHandler().handle(c));
matchsRouter.get("/stages/:stage", (c) => new GetMatchsByStageHandler().handle(c));
matchsRouter.get("/:id", (c) => new GetMatchByIdHandler().handle(c));
matchsRouter.get("/", (c) => new GetMatchsHandler().handle(c));

export default matchsRouter;