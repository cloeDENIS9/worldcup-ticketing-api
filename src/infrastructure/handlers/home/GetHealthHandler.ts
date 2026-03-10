import { Context } from "hono";

export class GetHomeHandler {
  async handle(c: Context) {
    return c.json({});
  }
}

