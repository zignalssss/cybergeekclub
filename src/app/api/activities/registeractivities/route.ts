import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from 'uuid';
import { authOptions } from '../../auth/[...nextauth]/authOptions';

const prisma: PrismaClient = new PrismaClient();

export async function POST(request: Request){
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return Response.json({ message: "No user session found" }, { status: 401 });
    }
    const requestBody = await request.json();
    const activities = await prisma.register_activity.create({
      data: {
        id: uuidv4(),
        email: email,
        corporate_activity_id : requestBody.id,
      },
    });
    return Response.json(
      { message: "GET USER Success", data: activities },
      { status: 200 }
    );
  } catch (error: unknown) {
    return Response.json({ message: "GET USER Unsuccess" }, { status: 500 });
  }
}
