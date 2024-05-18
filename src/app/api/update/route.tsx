import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';
import { corsHeaders } from '@/lib/CorsHeaders'

const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  const { id, tag, title, content, publication } = await req.json();

  if (!id) {
    return new Response(JSON.stringify('ID parameter is required'), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    })
  }

  try {
    const updatedAnnouncement = await prisma.announcement.update({
      where: { id: Number(id) },
      data: {
        tag,
        title,
        content,
        publication,
      },
    });

    return new Response(JSON.stringify(updatedAnnouncement), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error('Error updating announcement:', error);
    return new Response(JSON.stringify({ error: 'Error updating announcement' }), {
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