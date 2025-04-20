import { Request, Response, NextFunction } from "express";
import EntityNotFoundError from "../errors/EntityNotFoundError";
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