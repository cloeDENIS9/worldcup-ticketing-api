import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { CreateTicketSchema } from "./CreateTicketSchema";
import { matchs } from "infrastructure/mock/matchs";
import { tickets } from "infrastructure/mock/tickets";
import { customers } from "infrastructure/mock/customers";
import { Customer } from ":@domain/entities/Customer";
import { Ticket } from ":@domain/entities/Ticket";

export class CreateTicketHandler {
  async handle(c: Context) {
    const body = await c.req.json();
    const result = CreateTicketSchema.safeParse(body); // https://www.julienrollin.com/posts/typescript-zod-validation/

    if (!result.success) {
      throw new HTTPException(400, {
        message: `Can't create ticket (wrong or missing values)`
      });
    }

    const {matchId, seat, customer} = result.data;

    const match = matchs.find(m => m.id === matchId);
    if (!match) {
      throw new HTTPException(404, {
        message: `Match not found`
      });
    }

    const alreadyTaken = tickets.some(
      t => t.match.id === matchId && t.seat === seat
    );
    if (alreadyTaken) {
      throw new HTTPException(409, {
        message: `Seat already reserved`
      });
    }

    const newCustomer = new Customer(
      customer.firstname,
      customer.lastname,
      customer.email
    );

    customers.push(newCustomer);

    const newTicket = new Ticket(
      tickets.length + 1,
      match,
      seat,
      newCustomer
    );
    tickets.push(newTicket);

    console.log("BODY:", body);
    console.log("RESULT:", result);
    console.log("MATCH:", match);

    return c.json(
      {
        success: true,
        "message":`Ticket created`,
        data: {
          matchId: match.id,
          seat: seat,
          holder: {
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email
          }
        }
      },
      201
    );
  }
}