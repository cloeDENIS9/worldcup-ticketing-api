import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { teams } from "infrastructure/mock/teams";

export class GetTeamsHandler {
  async handle(c: Context) {
    const sort = c.req.query("sort");
    const name = c.req.query("name");

    let res = teams;

    if (name) {
      res = res.filter(team => // filter() permet de parcourir toutes les equipes
        team.name.toLowerCase().includes(name.toLowerCase())// pour chaque element du tableau on la ppelle team et on le teste pour savoir si le nom qu'on a recut est dans ce team 
      );
      return c.json({
        success: true,
        message: `Teams filtered by name: ${name}`,
        data: res
      })
    }

    if (sort && sort !== "name" && sort !== "-name") {
      throw new HTTPException(400, { message: "Invalid choix de sort" });
    }

    res = res.sort((a, b) => {
      if (sort === "-name") { // sort va permettre de trie toute la liste si valeur < 0: met a avant b si > 0: met b avant a si 0 = égal
        return b.name.localeCompare(a.name);// localcompare renvoie un nombre : x.localeCompare(y) si x avant y:nb neg si x apres y: nb pos
      }
      return a.name.localeCompare(b.name);
    });
    return c.json({
        success: true,
        message: `All teams`,
        data: res
    });
  }
}