import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";
import "dotenv/config";

require("dotenv").config();

export const connection = new Sequelize({
  dialect: "mssql",
  host: process.env.HOST,
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: 63031,
  dialectOptions: {
    options: {
      encrypt: false,
    },
  },
  models: [User],
});
