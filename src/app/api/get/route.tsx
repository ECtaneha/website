import { PrismaClient, announcement } from '@prisma/client'
import { NextResponse } from 'next/server'
import { corsHeaders } from '@/lib/CorsHeaders'

const prisma = new PrismaClient();

export async function GET() {
  const data: announcement[] = await prisma.announcement.findMany();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  });
}

export async function HEAD() {
  const data: announcement[] = await prisma.announcement.findMany();
  return NextResponse.json({ length: data.length });
}