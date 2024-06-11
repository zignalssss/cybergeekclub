import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from '../../auth/[...nextauth]/authOptions';
const prisma: PrismaClient = new PrismaClient();

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return Response.json({ message: "No user session found" }, { status: 401 });
    }
    const activitiesHistory = await prisma.register_activity.findMany({
      where: {
        email: email,
      },
    });
    return Response.json(
      { message: "GET USER Success", data: activitiesHistory },
      { status: 200 }
    );
  } catch (error: unknown) {
    return Response.json({ message: "GET USER Unsuccess" }, { status: 500 });
  }
}
