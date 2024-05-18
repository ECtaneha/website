import { NextRequest } from 'next/server';
import prisma from '@/app/lib/prisma';
import { corsHeaders } from '@/lib/CorsHeaders'

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ error: 'ID parameter is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }

    await prisma.announcement.delete({
      where: { id: Number(id) },
    });

    return new Response(JSON.stringify({ message: 'Announcement deleted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
  });
  } catch (error) {
    console.error('Error deleting announcement:', error);
    return new Response(JSON.stringify({ error: 'Error deleting announcement' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
  });
  }
}
