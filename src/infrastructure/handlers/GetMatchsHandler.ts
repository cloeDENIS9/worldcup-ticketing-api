//sert a recup ts les matchs

import { Context } from "hono";
import { matchs } from "../mock/matchs";

export class GetMatchsHandler{
    async handle(c: Context) {
        return c.json({})
    }
}