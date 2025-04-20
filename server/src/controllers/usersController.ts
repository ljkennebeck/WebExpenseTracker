import { Request, Response } from "express";
import prisma from "../prisma-client";
import EntityNotFoundError from "../errors/EntityNotFoundError";

export const listUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.status(200).json({ users });
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

export const listUserTransactions = async (req: Request, res: Response) => {
  const transactions = await prisma.transaction.findMany({
    where: {
      userId: Number(req.params.id),
    },
  });
  res.status(200).json({ transactions });
};