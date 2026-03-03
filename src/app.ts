import { Hono } from 'hono'

export const app = new Hono();

app.get('/', (c) => {
 return c.json( {
    success: true,
    message: process.env.API_NAME
  })
})

