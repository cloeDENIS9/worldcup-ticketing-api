import { Context } from "hono";
import { matchs } from "../mock/matchs";

export class GetMatchByIdHandler {
    async handle(c: Context) {
        const id = Number(c.req.param("id"))
        const match = matchs[id];
        if (!match){
            return c.json({message: "Matchs pas found"}, 404)
        }
        return c.json({});
    };
}