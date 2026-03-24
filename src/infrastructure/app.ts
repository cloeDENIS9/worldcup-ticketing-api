import { Hono } from 'hono';
import { HTTPException } from "hono/http-exception";
import homeRouter from './routes/home';
import matchsRouter from './routes/matchs';
import teamsRouter from './routes/teams';
import citiesRouter from './routes/cities';
import stadiumRouter from './routes/Stadiums';
import countryRouter from './routes/countries';

export const app = new Hono();


app.onError((err, c) => { // permet de gerer tt les erreures ici
  if (err instanceof HTTPException) {
    return c.json({
      success: false,
      error: err.message
    }, err.status);
  }

  return c.json({
    success: false,
    error: "Internal Server Error"
  }, 500);
});

app.get('/', (c) => {
  return c.json({
    success: true,
    message: process.env.API_NAME,
  });
});

app.route("/matchs", matchsRouter);
app.route("/", homeRouter);
app.route("/teams", teamsRouter);
app.route("/cities", citiesRouter);
app.route("/stadiums", stadiumRouter);
app.route("/countries", countryRouter);




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

