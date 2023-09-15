import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";

export const connection = new Sequelize({
  dialect: "mssql",
  host: "192.168.1.3",
  database: "database-name",
  username: "username",
  password: "password",
  port: 63031,
  dialectOptions: {
    options: {
      encrypt: false,
    },
  },
  models: [User],
});
