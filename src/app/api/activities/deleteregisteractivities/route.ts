import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

export async function DELETE(request: Request) {
  try {
    const requestBody = await request.json();
    console.log(requestBody);
    console.log(requestBody.id);
    const activitiesHistory = await prisma.register_activity.delete({
      where: {
        id: requestBody.id,
      },
    });
    console.log(activitiesHistory);
    return Response.json(
      { message: "DELETE activity from this user Success", data: activitiesHistory },
      { status: 200 }
    );
  } catch (error: unknown) {
    return Response.json({ message: "DELETE activity from this user Unsuccess", error : error }, { status: 500 });
  }
}
