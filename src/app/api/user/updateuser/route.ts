import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const formData = await request.formData();
    console.log(formData);

    // Process the formData as needed

    return NextResponse.json({ formData });
}