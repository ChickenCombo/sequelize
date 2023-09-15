import { DataTypes, Sequelize } from "sequelize";

// Connection
export const sequelize = new Sequelize(
  "database-name",
  "username",
  "password",
  {
    dialect: "mssql",
    host: "192.168.1.3",
    port: 63031,
    dialectOptions: {
      options: {
        encrypt: false,
      },
    },
  }
);

// Model
sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {}
);
