import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/authOptions';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { promises as fsPromises } from 'fs';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        const email = session?.user?.email;
        if (!email) {
            return NextResponse.json({ message: "No user session found" }, { status: 401 });
        }

        const existingData = await prisma.account.findUnique({
            where: { email }
        });

        if (!existingData) {
            return NextResponse.json({ message: "ไม่มี User ในระบบ" }, { status: 404 });
        }

        const formData = await request.formData();
        const file: File | null = formData.get('file') as unknown as File;

        if (file) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const uniqueSuffix = uuidv4();
            const extname = path.extname(file.name);
            const filename = uniqueSuffix + extname;
            const uploadPath = path.join(process.cwd(), 'public', filename);

            await fsPromises.writeFile(uploadPath, buffer);

            // Save the file path in the database
            // await prisma.account.update({
            //     where: { email },
            //     data: { profileImage: filename }
            // });
        }

        return NextResponse.json({ message: "อัพเดท user สำเร็จ" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "เกิดข้อผิดพลาด" }, { status: 500 });
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb', // Adjust as needed
        }
    },
};