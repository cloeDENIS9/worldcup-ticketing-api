
import { Hono } from "hono";
import { GetTeamByFifaCodeHandler } from "infrastructure/handlers/Team/GetTeamByFifaCodeHandler";
import { GetTeamMatchesByFifaCodeHandler } from "infrastructure/handlers/Team/GetTeamMatchsByFifaCodeHandler";
import { GetTeamMatchesByStageHandler } from "infrastructure/handlers/Team/GetTeamMatchsByStageHandler";
import { GetTeamsHandler } from "infrastructure/handlers/Team/GetTeamsHandler";

const teamsRouter = new Hono();

teamsRouter.get("/", (c) => new GetTeamsHandler().handle(c));
teamsRouter.get("/:fifaCode", (c) => new GetTeamByFifaCodeHandler().handle(c));
teamsRouter.get("/:fifaCode/matchs", (c) => new GetTeamMatchesByFifaCodeHandler().handle(c));
teamsRouter.get("/:fifaCode/matchs/:stage", (c) => new GetTeamMatchesByStageHandler().handle(c));

export default teamsRouter;