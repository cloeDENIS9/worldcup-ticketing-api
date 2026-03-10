import { Hono } from 'hono'
import { matchs } from './mock/matchs';
import homeRouter from './routes/home';
import matchsRouter from './routes/matchs';

export const app = new Hono();

app.get('/', (c) => {
 return c.json( {
    success: true,
    message: process.env.API_NAME
  })
});
/*
app.get("/matchs", (c) => {
  return c.json(matchs);
});

app.get("/matchs/:id", (c) => {
  const id = Number(c.req.param("id")); // c.req.param("id") permetde recumerer la valeur dans l'url mais sous forme de string /!\ source: site hono.dev
  const match = matchs[id];
  if (!match){
    return c.json({message: "Matchs pas found"})
  }
  return c.json(match);
});*/

app.route("/matchs", matchsRouter);
app.route("/", homeRouter)


