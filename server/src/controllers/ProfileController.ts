import { Request, Response, NextFunction } from "express";
import EntityNotFoundError from "../errors/entityNotFoundError";
import prisma from "../prisma-client";

export const getProfile = async (req: Request, res: Response)=> {
    const Profile = await prisma.profile.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!Profile) {
      throw new EntityNotFoundError({
        message: "Profile not found",
        statusCode: 404,
        code: "ERR_NF",
      });
    }}

export const addProfile = async (req: Request, res: Response) => {
    try {
        const { userId } = req.body;
      
        if (typeof userId !== 'number') {
            res.status(400).json({ error: "Missing or invalid userId" });
        }
      
        const newProfile = await prisma.profile.create({
            data: {
              userId, 
            },
        });
      
        res.status(201).json({ newProfile });
    }catch (error) {
        console.error("Error creating Profile:", error);
        res.status(500).json({ error: "Failed to create Profile" });
    }
      };

      
export const deleteProfile = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deletedProfile = await prisma.user.delete({
    where: {
      id:id
    },
  });
  res.status(200).json({ deletedProfile });
}
  
 