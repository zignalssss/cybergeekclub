import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

export async function POST(request: Request) {
    try{
        
        const {email} : {email:string} = await request.json()
        const user = await prisma.account.findUnique({
            where: {
              email,
            },
          })
      return Response.json({ message: "GET USER Success", data: user }, { status: 200 });
    }catch(error: unknown){
      return Response.json({ message: "GET USER Unsuccess"}, { status: 500 });
    }
  }