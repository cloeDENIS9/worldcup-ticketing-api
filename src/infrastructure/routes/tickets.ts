import { Hono } from "hono";
import { CreateTicketHandler } from "infrastructure/handlers/tickets/CreateTicketHandler";

const ticketsRouter = new Hono();

ticketsRouter.post("/", (c) =>
  new CreateTicketHandler().handle(c)
);

export default ticketsRouter;