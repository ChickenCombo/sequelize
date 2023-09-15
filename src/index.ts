import express, { Express, Request, Response } from "express";
import { connection } from "../config/connection";
import "reflect-metadata";
import { User } from "../models/User";

const port: number = 3000;
const app: Express = express();

app.use(express.json());

// Get All Users
app.get("/user", async (req: Request, res: Response) => {
  const allUsers: User[] = await User.findAll();

  return res.status(200).json(allUsers);
});

// Get User by ID
app.get("/user/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: User | null = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(user);
});

// Create new User
app.post("/user", async (req: Request, res: Response) => {
  const { firstName, age } = req.body;

  if (!firstName || !age) {
    return res.status(404).json({ error: "Please fill up all fields" });
  }

  const newUser: User = await User.create({ ...req.body });

  return res.status(201).json(newUser);
});

// Update user
app.put("/user/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "Request body is empty" });
  }

  await User.update({ ...req.body }, { where: { userId: id } });
  const updatedUser: User | null = await User.findByPk(id);

  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(updatedUser);
});

// Delete user
app.delete("/user/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedUser: User | null = await User.findByPk(id);
  await User.destroy({ where: { userId: id } });

  if (!deletedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(deletedUser);
});

const start = async () => {
  try {
    await connection.sync();

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
