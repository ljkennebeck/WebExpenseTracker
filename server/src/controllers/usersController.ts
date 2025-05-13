import { Request, Response } from "express";
import prisma from "../prisma-client";
import EntityNotFoundError from "../errors/entityNotFoundError";
import bcrypt from 'bcrypt'

export const listUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.status(200).json({ users });
};

export const listUserTransactions = async (req: Request, res: Response) => {
  const transactions = await prisma.transaction.findMany({
    where: {
      userId: Number(req.params.id),
    },
  });
  res.status(200).json({ transactions });
};

export const getUser = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  if (!user) {
    throw new EntityNotFoundError({
      message: "User not found",
      statusCode: 404,
      code: "ERR_NF",
    });
  }

  res.status(200).json({ user });
};

export const addUser = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      email: email,
      password: hash,
      name: name
    },
  });
  res.status(200).json({ newUser });
};

export const updateUser = async (req: Request, res: Response) => {
  const { id, email, password, name } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const updatedUser = await prisma.user.update({
    where:{
      id:id
    },
    data: {
      email: email,
      password: hash,
      name: name
    },
  });
  res.status(200).json({ updatedUser });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deletedUser = await prisma.user.delete({
    where: {
      id:id
    },
  });
  res.status(200).json({ deletedUser });
}