import { Request, Response } from "express";
import { User } from "../models/user.model";

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  const allUsers: User[] = await User.findAll();

  return res.status(200).json(allUsers);
};

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: User | null = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(user);
};

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  const { firstName, age } = req.body;

  if (!firstName || !age) {
    return res.status(404).json({ error: "Please fill up all fields" });
  }

  const newUser: User = await User.create({ ...req.body });

  return res.status(201).json(newUser);
};

// Update a user
export const updateUser = async (req: Request, res: Response) => {
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
};

// Delete a user
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedUser: User | null = await User.findByPk(id);
  await User.destroy({ where: { userId: id } });

  if (!deletedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(deletedUser);
};
