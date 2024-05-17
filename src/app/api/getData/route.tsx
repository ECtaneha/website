import { PrismaClient, announcement } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

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