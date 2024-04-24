import { NextRequest } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function DELETE(req: NextRequest) {
  if (req.method === 'DELETE') {
    const { id } = await req.json();

    if (!id) {
      return new Response(JSON.stringify('ID parameter is required'), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    try {
      await prisma.announcement.delete({
        where: { id: Number(id) },
      });

      return new Response(JSON.stringify('Announcement deleted successfully'), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error deleting announcement:', error);
      return new Response(JSON.stringify('Error deleting announcement'), {
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
        'Allow': 'DELETE',
        'Content-Type': 'application/json',
      },
    });
  }
}
