import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(request: Request) {
  try {
    const { otp, email }: { otp: string; email: string } = await request.json();

    // Find the OTP entry in the database
    const otpEntry = await prisma.one_time_password.findUnique({
      where: {
        email: email,
      },
    });

    // Check if the OTP matches
    if (otpEntry && otpEntry.otp === otp) {
      return new Response(JSON.stringify({ message: "ยืนยันOTPสำเร็จ" }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "OTP ไม่ถูกต้อง" }), { status: 400 });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return new Response(JSON.stringify({ error: "เกิดข้อผิดพลาด", data: error }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
