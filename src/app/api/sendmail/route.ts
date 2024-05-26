import { PrismaClient } from "@prisma/client";
import { assert } from "console";
import nodemailer from "nodemailer";
import otpGenerator from "otp-generator";

const OTP_LENGTH = 6
const prisma: PrismaClient = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email }: {
        email: string,
    } = await request.json()
    await prisma.one_time_password.create({
        data: {
          email: email,
          otp: ""
        }
    })
    const SIMPLE_MAIL_TRANSFER_PROTOCOL_USERNAME= process.env.SIMPLE_MAIL_TRANSFER_PROTOCOL_USERNAME
    const SIMPLE_MAIL_TRANSFER_PROTOCOL_PASSWORD= process.env.SIMPLE_MAIL_TRANSFER_PROTOCOL_PASSWORD
    const OTP = otpGenerator.generate(OTP_LENGTH, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SIMPLE_MAIL_TRANSFER_PROTOCOL_USERNAME,
            pass: SIMPLE_MAIL_TRANSFER_PROTOCOL_PASSWORD
        }
    })
    const verify = await transporter.verify()
    assert(verify)
    const mailOptions = {
        from: `"SHADOW" ${SIMPLE_MAIL_TRANSFER_PROTOCOL_USERNAME}`,
        to: `${email}`,
        subject: `[SHADOW] โปรดตรวจสอบรหัส OTP`,
        text: `รหัส OTP ของคุณคือ ${OTP}`
    }
    await transporter.sendMail(mailOptions)
    return Response.json({ message: "ส่งรหัสสำเร็จ", data: email }, { status: 200 });
  } catch (error: unknown) {
    return Response.json({ error: "ส่งรหัสล้มเหลว" }, { status: 500 });
  }
}
