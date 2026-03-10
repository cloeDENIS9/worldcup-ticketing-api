import { Context } from "hono";

export class GetHealthHandler {
  async handle(c: Context) {
    return c.json({});
  }
}