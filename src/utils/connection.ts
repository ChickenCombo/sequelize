import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";
import { logger } from "./logger";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "mssql",
  host: process.env.HOST!,
  database: process.env.DATABASE!,
  username: process.env.USERNAME!,
  password: process.env.PASSWORD!,
  port: +process.env.PORT!,
  logging: (sql) => logger.info(sql),
  dialectOptions: {
    options: {
      encrypt: false,
    },
  },
  models: [User],
});

export default sequelize;
