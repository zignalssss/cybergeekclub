import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { promises as fsPromises } from "fs";
import bcrypt from "bcrypt";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

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
async function uploadFileToS3(
  file: ArrayBuffer,
  fileName: string,
  user_id: string | undefined
) {
  const fileBuffer = file;
const params = {
    Bucket: BUCKET_NAME,
    Key: `asset/profile/${user_id}`,
    Body: Buffer.from(fileBuffer),
    ContentType: "image/jpeg" || "image/png",
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

    const displayName = formData.get("displayName") as string | null;
    const firstNameEn = formData.get("firstNameEn") as string | null;
    const lastNameEn = formData.get("lastNameEn") as string | null;
    const firstNameTh = formData.get("firstNameTh") as string | null;
    const lastNameTh = formData.get("lastNameTh") as string | null;
    const phoneNumber = formData.get("phoneNumber") as string | null;
    const password = formData.get("password") as string | null;
    const confirmPassword = formData.get("confirmPassword") as string | null;

    // Validate password match if both are provided
    if (password && confirmPassword && password !== confirmPassword) {
      return NextResponse.json(
        { message: "รหัสผ่านไม่ตรงกัน" },
        { status: 400 }
      );
    }

    const updateData: any = {};
    if (displayName) updateData.display_name = displayName;
    if (firstNameEn) updateData.first_name_en = firstNameEn;
    if (firstNameTh) updateData.first_name_th = firstNameTh;
    if (lastNameEn) updateData.last_name_en = lastNameEn;
    if (lastNameTh) updateData.last_name_th = lastNameTh;
    if (phoneNumber) updateData.phone_number = phoneNumber;
    if (password) updateData.password = await bcrypt.hashSync(password, 10);

    // Handle file upload
    const file: File | null = formData.get("file") as unknown as File;
    if (file) {
        const user_id = await prisma.account.findUnique({
          where: { email },
          select: { id: true },
        });
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileName = await uploadFileToS3(buffer, file.name, user_id?.id);
        updateData.profile_image = fileName;
      }
    // Update the user's data in Prisma
    await prisma.account.update({
      where: { email },
      data: updateData,
    });

    return NextResponse.json({ message: "อัพเดทสำเร็จ" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "เกิดข้อผิดพลาด" }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb", // Adjust as needed
    },
  },
};
