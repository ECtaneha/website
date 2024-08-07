import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'
import { corsHeaders } from '@/lib/CorsHeaders'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const { creator, createddate, tag, title, content, publication } =
    await req.json();

  try {
    const announcement = await prisma.announcement.create({
      data: {
        creator,
        createddate: new Date(createddate),
        tag,
        title,
        content,
        publication,
      },
    });
    return new Response(JSON.stringify(announcement), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Failed to create announcement' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  });
}