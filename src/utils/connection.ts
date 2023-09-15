import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";
import "dotenv/config";

require("dotenv").config();

export const connection = new Sequelize({
  dialect: "mssql",
  host: process.env.HOST!,
  database: process.env.DATABASE!,
  username: process.env.USERNAME!,
  password: process.env.PASSWORD!,
  port: +process.env.PORT!,
  dialectOptions: {
    options: {
      encrypt: false,
    },
  },
  models: [User],
});
