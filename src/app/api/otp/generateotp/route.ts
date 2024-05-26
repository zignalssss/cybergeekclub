import otpGenerator from "otp-generator"
import { PrismaClient, Prisma } from '@prisma/client'
import nodemailer from "nodemailer"
const prisma = new PrismaClient()

export async function POST(req:Request){
    console.log("HELLO WORLD")
    const {email} = await req.json()
    console.log(email)
    const otp = otpGenerator.generate(6, {
        digits: true,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false
    });

    try{
        await prisma.one_time_password.create({
            data: {
              email: email,
              otp: otp,
            },
          })
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user:process.env.REAL_POSTMAN_USER,
                pass:process.env.REAL_POSTMAN_PASSWORD
            }
        })

    }catch(error){
        return new Response(error as BodyInit, {
            status: 500,
          })
    }
    return Response.json({"message":"generate success"});
}