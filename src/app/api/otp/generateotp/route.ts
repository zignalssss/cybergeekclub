import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import otpGenerator from "otp-generator";

const OTP_LENGTH = 6;
const prisma: PrismaClient = new PrismaClient();

const SIMPLE_MAIL_TRANSFER_PROTOCOL_USERNAME = process.env.SIMPLE_MAIL_TRANSFER_PROTOCOL_USERNAME;
const SIMPLE_MAIL_TRANSFER_PROTOCOL_PASSWORD = process.env.SIMPLE_MAIL_TRANSFER_PROTOCOL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: "web1.vpshispeed.com",
  port: 587,
  secure: false,
  auth: {
    user: SIMPLE_MAIL_TRANSFER_PROTOCOL_USERNAME,
    pass: SIMPLE_MAIL_TRANSFER_PROTOCOL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { email }: { email: string } = await request.json();

    const user = await prisma.account.findUnique({
      where: { email },
    });

    if (user) {
      return new Response(
        JSON.stringify({
          message: "ไม่สามารถส่ง OTP เนื่องจาก Email มีอยู่เเล้ว",
          data: email,
        }),
        { status: 400 }
      );
    }

    const OTP = otpGenerator.generate(OTP_LENGTH, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    await prisma.one_time_password.create({
      data: { email, otp: OTP },
    });
    // Verify transporter once during initialization
    transporter.verify((error, success) => {
      if (error) {
        console.error("Transporter verification failed", error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    
    const mailOptions = {
      from: `"CyberGeekClub" <${SIMPLE_MAIL_TRANSFER_PROTOCOL_USERNAME}>`,
      to: email,
      subject: `[CyberGeekClub] โปรดตรวจสอบรหัส OTP`,
      text: `รหัส OTP ของคุณคือ ${OTP}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "ส่งรหัสสำเร็จ", data: email }),
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error sending OTP:", error);
    return new Response(
      JSON.stringify({ error: "ส่งรหัสล้มเหลว", data: error }),
      { status: 500 }
    );
  }
}
