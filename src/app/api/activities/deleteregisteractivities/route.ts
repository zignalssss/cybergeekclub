import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

export async function DELETE(request: Request) {
  try {
    const requestBody = await request.json();
    const activitiesHistory = await prisma.register_corporate_activity.delete({
      where: {
        id: requestBody.id,
      },
    });
    return Response.json(
      { message: "DELETE activity from this user Success", data: activitiesHistory },
      { status: 200 }
    );
  } catch (error: unknown) {
    return Response.json({ message: "DELETE activity from this user Unsuccess", error : error }, { status: 500 });
  }
}
