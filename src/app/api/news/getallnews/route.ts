import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

export async function GET(request: Request) {
    try{
        const news = await prisma.news.findMany({
          select: {
            banner_th : true,
            title_th : true,
            particulars_th : true,
          }
        })
        return Response.json({ message: "GET USER Success", data: news }, { status: 200 });
    }catch(error: unknown){
      return Response.json({ message: "GET USER Unsuccess"}, { status: 500 });
    }
  }