import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from 'uuid';
import { authOptions } from '../../auth/[...nextauth]/authOptions';
import { NextRequest, NextResponse } from "next/server";

const prisma: PrismaClient = new PrismaClient();

export async function POST(request: NextRequest){
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return NextResponse.json({ message: "No user session found" }, { status: 401 });
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
    const requestBody = await request.json();
    const activities = await prisma.register_corporate_activity.create({
      data: {
        id: uuidv4(),
        account_id : user_id,
        corporate_activity_id : requestBody.id,
      },
    });
    return NextResponse.json(
      { message: "GET USER Success", data: activities },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json({ message: "GET USER Unsuccess" }, { status: 500 });
  }
}
