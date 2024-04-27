import prisma from '@/app/lib/prisma';

export default async function GET() {
  try {
    const announcements = await prisma.announcement.findMany({
      orderBy: {
        createddate: 'desc',
      },
    });
    return new Response(JSON.stringify(announcements), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching sorted announcements:', error);
    return new Response(JSON.stringify('Error fetching sorted announcements'), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
