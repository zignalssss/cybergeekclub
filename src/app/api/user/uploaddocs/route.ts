import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { PrismaClient } from "@prisma/client";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuid } from "uuid";

const REGION = process.env.AWS_REGION;
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

const prisma = new PrismaClient();
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});
async function uploadFileToS3(file: ArrayBuffer, fileName: string, user_id: string | undefined) {
  const fileBuffer = file;
  const params = {
    Bucket: BUCKET_NAME,
    Key: `asset/doc/${user_id}-${Date.now()}`,
    Body: Buffer.from(fileBuffer),
    ContentType: "application/pdf",
  };
  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  const objectUrl = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${params.Key}`;
  return objectUrl;
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return NextResponse.json(
        { message: "No user session found" },
        { status: 401 }
      );
    }

    const existingData = await prisma.account.findUnique({
      where: { email },
    });
    if (!existingData) {
      return NextResponse.json(
        { message: "ไม่มี User ในระบบ" },
        { status: 404 }
      );
    }

    const formData = await request.formData();

    const file: File | null = formData.get("file") as unknown as File;
    if (file) {
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
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = await uploadFileToS3(buffer, file.name, user_id);
      await prisma.document_log.create({
        data: {
          id: uuid(),
          account_id: user_id,
          document: fileName,
          status: "PENDING",
          notation: "รอ Admin ตรวจสอบข้อมูลและยืนยัน",
          account_admin_id: null,
        },
      });
    }
    return NextResponse.json({ message: "ส่งเอกสารสำเร็จ" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "เกิดข้อผิดพลาด" }, { status: 500 });
  }
}