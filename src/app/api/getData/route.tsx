import { PrismaClient, announcement } from '@prisma/client'
import { NextResponse } from 'next/server'
import { corsHeaders } from '@/lib/CornHeaders'

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const data: announcement[] = await prisma.announcement.findMany();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: corsHeaders
  });
}

export async function HEAD(request: Request) {
  const data: announcement[] = await prisma.announcement.findMany();
  return NextResponse.json({ length: data.length });
}