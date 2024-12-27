"use server";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findFirst({ where: { email } });
    return user;
  } catch (error) {
    return new Error(
      `Error getting user by email ${getUserByEmail.name}, Error: ${error}`
    );
  }
}

export async function updateTbUserRole(
  email: string,
  code: string
): Promise<User | { error: { message: string } }> {
  try {
    if (code !== process.env.TB_CODE)
      return {
        error: {
          message: `Wrong code`,
        },
      };
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { role: "admin" },
    });
    return updatedUser;
  } catch (error) {
    return {
      error: {
        message: `Error updating TB user role ${updateTbUserRole.name}, Error: ${error}`,
      },
    };
  }
}
