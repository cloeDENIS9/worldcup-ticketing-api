import { Context } from "hono";
import { matchs } from "../mock/matchs";
import { HTTPException } from "hono/http-exception";

export class GetMatchByIdHandler {
    async handle(c: Context) {
        const id = Number(c.req.param("id"))
        const match = matchs.find(
            (m) => 
                m.id === id
        );
        if (!match){
            throw new HTTPException(404, {message: `Match ${id} does not exist`})
        }
        return c.json({
            success: true,
            message: `Match ${id}`,
            data: match
        });
    };
}