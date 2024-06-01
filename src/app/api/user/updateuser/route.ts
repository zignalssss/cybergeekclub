import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import {authOptions} from '../../auth/[...nextauth]/authOptions'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try{
        const session = await getServerSession(authOptions);
        const email  = session?.user?.email;
        if (!email) {
            return NextResponse.json({ message: "No user session found" }, { status: 401 });
          }
        const formData = await request.formData();
        const existingData = await prisma.account.findUnique({
            where: {
                email 
              },
        })
        if(existingData){
            
        }
    }catch(error){
        console.log(error)
    }
    // Process the formData as needed

    return NextResponse.json({message:"update user success"});
}