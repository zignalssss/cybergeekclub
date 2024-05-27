import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request): Promise<Response> {
    try {
        const {
            email,
            password,
            prefix_TH,
            prefix_EN,
            name_TH,
            name_EN,
            surname_TH,
            surname_EN,
            nickname_TH,
            nickname_EN,
            phone_number,
            birth_date,
            student_id,
            faculty_TH,
            faculty_EN,
            major_TH,
            major_EN,
            tag,
        } = await req.json() as {
            email: string;
            password: string;
            prefix_TH: string;
            prefix_EN: string;
            name_TH: string;
            name_EN: string;
            surname_TH: string;
            surname_EN: string;
            nickname_TH: string;
            nickname_EN: string;
            phone_number: string;
            birth_date: string;
            student_id: string;
            faculty_TH: string;
            faculty_EN: string;
            major_TH: string;
            major_EN: string;
            tag: string;
        };

        const uuid = uuidv4();
        const hashPassword = bcrypt.hashSync(password, 10);

        await prisma.account.create({
            data: {
                id: uuid,
                email,
                password: hashPassword,
                prefix_th: prefix_TH,
                prefix_en: prefix_EN,
                first_name_th: name_TH,
                first_name_en: name_EN,
                last_name_th: surname_TH,
                last_name_en: surname_EN,
                nickname_th: nickname_TH,
                nickname_en: nickname_EN,
                phone_number,
                birthdate: new Date(birth_date),
                student_id,
                faculty_th: faculty_TH,
                faculty_en: faculty_EN,
                major_th: major_TH,
                major_en: major_EN,
                // Assuming default values or optional fields not provided in the input
                profile_image: null,
                middle_name_th: null,
                middle_name_en: null,
                code: null,
                role: "MEMBER",
                point: 20,
                document: null,
                status: "ORDINARY",
                display_name: null,
                remaining_time: null,
                wrong_password: 0,
                ignored_account: null
            },
        });

        return NextResponse.json({ message: 'Account created successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
