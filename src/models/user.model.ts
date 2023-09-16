import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  Default,
} from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "User",
})
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare userId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare firstName: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare age: number;
}
