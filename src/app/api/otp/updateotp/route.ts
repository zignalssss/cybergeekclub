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

    const OTP= otpGenerator.generate(OTP_LENGTH, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })

    const updateUser = await prisma.one_time_password.update({
        where: {
          email: email,
        },
        data: {
          otp: OTP,
        },
      })
    const SIMPLE_MAIL_TRANSFER_PROTOCOL_USERNAME= process.env.SIMPLE_MAIL_TRANSFER_PROTOCOL_USERNAME
    const SIMPLE_MAIL_TRANSFER_PROTOCOL_PASSWORD= process.env.SIMPLE_MAIL_TRANSFER_PROTOCOL_PASSWORD
  
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
        from: `"CyberGeekClub" ${SIMPLE_MAIL_TRANSFER_PROTOCOL_USERNAME}`,
        to: `${email}`,
        subject: `[CyberGeekClub] โปรดตรวจสอบรหัส OTP`,
        text: `รหัส OTP ของคุณคือ ${OTP}`
    }
    await transporter.sendMail(mailOptions)
    return Response.json({ message: "ส่งรหัสสำเร็จ", data: email }, { status: 200 });
  } catch (error: unknown) {
    return Response.json({ error: "ส่งรหัสล้มเหลว", data: error }, { status: 500 });
  }
}
