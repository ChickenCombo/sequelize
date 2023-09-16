import express, { Express } from "express";
import cors from "cors";
import { connection } from "./utils/connection";
import { logger } from "./utils/logger";
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
    logger.info(`Server is running on port ${port}`);
  } catch (error) {
    logger.error(`Failed to connect: ${error}`);
    process.exit(1);
  }
});
