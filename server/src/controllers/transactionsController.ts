import { Request, Response, NextFunction } from "express";
import EntityNotFoundError from "../errors/entityNotFoundError";
import prisma from "../prisma-client";

export const listTransactions = async (req: Request, res: Response) => {
  const transactions = await prisma.transaction.findMany();
  res.status(200).json({ transactions });
};

export const getTransaction = async (req: Request, res: Response) => {
  const transaction = await prisma.transaction.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  if (!transaction) {
    throw new EntityNotFoundError({
      message: "Transaction not found",
      statusCode: 404,
      code: "ERR_NF",
    });
  }

  res.status(200).json({ transaction });
};

export const addTransaction = async (req: Request, res: Response) => {
  const { title, userId } = req.body;
  const newTransaction = await prisma.transaction.create({
    data: {
      title: title,
      user: {
        connect: { id: Number(userId) },
      },
    },
  });
  res.status(200).json({ newTransaction });
};

export const updateTransaction = async (req: Request, res: Response) => {
  const { id, title } = req.body;
  const updateTransaction = await prisma.transaction.update({
    where: {
      id: id,
    },
    data: {
      title: title
    },
  });
  res.status(200).json({ updateTransaction });
};

export const deleteTransaction = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deletedTransaction = await prisma.transaction.delete({
    where: {
      id:id
    },
  });
  res.status(200).json({ deletedTransaction });
}