require("dotenv").config();

module.exports = {
  development: {
    host: process.env.HOST,
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: +process.env.PORT,
    dialect: "mssql",
  },
};
