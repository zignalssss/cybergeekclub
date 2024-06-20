import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

export async function GET(request: Request) {
  try {
    const activities = await prisma.corporate_activity.findMany({
      orderBy: {
        built: "asc",
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
export const dynamic = "force-dynamic";