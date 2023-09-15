import express, { Express } from "express";
import cors from "cors";
import { connection } from "./utils/connection";
import userRouter from "./routes/user.route";
import "reflect-metadata";

const port: number = 3000;
const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.listen(port, async () => {
  try {
    await connection.sync();
    console.log(`Server running on http://localhost:${port}`);
  } catch (error) {
    console.error(`Failed to connect: ${error}`);
    process.exit(1);
  }
});
