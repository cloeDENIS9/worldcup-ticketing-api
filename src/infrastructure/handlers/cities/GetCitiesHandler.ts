import { Context } from "hono";
import { cities } from "infrastructure/mock/cities";

export class GetCitiesHandler {
    async handle(c: Context) {

        const name = c.req.query("name");

        if (name) {
            const result = cities.filter(city =>
                city.name.toLowerCase().includes(name.toLowerCase())
            );
            return c.json({
                success: true,
                message: `Cities filtered by name: ${name}`,
                data: result,
            });
        }
    
        return c.json({
            success: true,
            message:`All cities`,
            data: cities,
        })
    }
}