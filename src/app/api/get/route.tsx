import { PrismaClient, announcement } from '@prisma/client'
import { NextResponse } from 'next/server'
import { corsHeaders } from '@/lib/CorsHeaders'

const prisma = new PrismaClient();

export async function GET() {
  try{
    const data: announcement[] = await prisma.announcement.findMany();

    if(data){
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }
  } catch (error) {
    console.error('Error getting announcement:', error);
    return new Response(JSON.stringify({ error: 'Error getting announcement' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  }
}

// export async function HEAD() {
//   const data: announcement[] = await prisma.announcement.findMany();
//   return NextResponse.json({ length: data.length });
// }

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  });
}