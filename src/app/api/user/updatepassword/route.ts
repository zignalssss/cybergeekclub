import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma: PrismaClient = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email, password }: {email: string; password: string} =
      await request.json();
    const user = await prisma.account.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    } else {
      await prisma.account.update({
        where: {
          email: email,
        },
        data: {
          password: bcrypt.hashSync(password, 10),
        },
      });
    }
    return Response.json(
      { message: "Update USER Success", data: user },
      { status: 200 }
    );
  } catch (error: unknown) {
    return Response.json({ message: "GET USER Unsuccess" }, { status: 500 });
  }
}
