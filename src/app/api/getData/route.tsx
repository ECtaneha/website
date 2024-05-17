import { PrismaClient, announcement } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  const data: announcement[] = await prisma.announcement.findMany();
  console.log(data);

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function HEAD(request: Request) {
  const data: announcement[] = await prisma.announcement.findMany();
  return NextResponse.json({ length: data.length });
}