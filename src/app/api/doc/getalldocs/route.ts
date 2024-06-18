import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma: PrismaClient = new PrismaClient();

export async function GET(request: NextRequest) {
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
    const documents_log = await prisma.document_log.findMany({
      where: {
        account_id: user_id,
      },
      orderBy: { built: "asc" 
      },
    });
    return NextResponse.json( { message: "GET user document_log Success", data: documents_log }, { status: 200 })
  } catch (error: unknown) {
    return NextResponse.json({ message: "GET user document_log Unsuccess" }, { status: 500 });
  }
}