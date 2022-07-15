import { Express, Request, Response } from "express";
import { result } from "lodash";
import { createNoteHandler } from "./controllers/note.controller";
import { createUserSessionHandler } from "./controllers/session.controller";
import { createUserHandler } from "./controllers/user.controller";
import requireUser from "./middleware/requireUser";

function routes(app: Express) {
  app.get("/express/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/express/api/users", createUserHandler);

  app.post(
    "/express/api/sessions",
    createUserSessionHandler,
  )

  app.post(
    "/express/api/notes",
    requireUser,
    createNoteHandler,
  )
}

export default routes;