import express, { Express, NextFunction, Request, Response } from "express";
import { User } from "@core/user/user.entity";
function newServer() {
  const app: Express = express();
  const run = (port: number) => {
    const user: User = { name: "Sarawuth Pimsai" };
    app.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.send(`Hello ${user.name}`);
    });
    app.listen(port, () => {
      console.log(`Application running on port ${port}`);
    });
  };
  return { run };
}

const server = newServer();
server.run(8080);
