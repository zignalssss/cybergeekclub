import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from '../../auth/[...nextauth]/authOptions';
import { NextRequest, NextResponse } from "next/server";
const prisma: PrismaClient = new PrismaClient();

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return Response.json({ message: "No user session found" }, { status: 401 });
    }
    const user_id_obj = await prisma.account.findUnique({
      where: { email },
      select: { id: true },
    });
    if (!user_id_obj) {
      return NextResponse.json(
        { message: "ไม่พบข้อมูลผู้ใช้" },
        { status: 404 }
      );
    }
    const user_id = user_id_obj.id.toString();
    const activitiesHistory = await prisma.register_corporate_activity.findMany({
      where: {
        account_id: user_id,
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
