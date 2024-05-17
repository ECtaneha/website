import { NextRequest } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function PUT(req: NextRequest) {
  if (req.method === 'PUT') {
    const { id, tag, title, content, publication } = await req.json();

    if (!id) {
      return new Response(JSON.stringify('ID parameter is required'), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
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
        },
      });
    } catch (error) {
      console.error('Error updating announcement:', error);
      return new Response(JSON.stringify({ error: 'Error updating announcement' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } else {
    return new Response(JSON.stringify('Method not allowed'), {
      status: 405,
      headers: {
        'Allow': 'PUT',
        'Content-Type': 'application/json',
      },
    });
  }
}
