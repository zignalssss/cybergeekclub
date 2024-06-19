import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

export async function POST(request: Request) {
    try{
        const {email} : {email:string} = await request.json()
        const userrole = await prisma.account.findUnique({
            where: {
              email,
            },
            select:{
                role:true,
            },
          })
      return Response.json({ message: "GET USER Success", data: userrole }, { status: 200 });
    }catch(error: unknown){
      return Response.json({ message: "GET USER Unsuccess"}, { status: 500 });
    }
  }