import express, { Express, Request, Response } from "express";
import { sequelize } from "../config/connection";

const port: number = 3000;
const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("Express listening on port:", port);
  });
});
