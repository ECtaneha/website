import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/lib/prisma';
import { announcement } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    const data: announcement[] = await prisma.announcement.findMany();

    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const { creator, createddate, tag, title, content, publication } =
    await req.body;

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
      res.status(200).json(announcement);
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Failed to create announcement' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = await req.body;

      if (!id) {
        res.status(400).json({ message: 'ID parameter is required' });
      }

      await prisma.announcement.delete({
        where: { id: Number(id) }
      });
      res.status(200).json({ message: 'Announcement deleted successfully' });
    } catch (error) {
      console.error('Error deleting announcement:', error);
      res.status(500).json({ error: 'Error deleting announcement' });
    }
  } else if (req.method === 'PUT') {
    const { id, tag, title, content, publication } = req.body;

    if (!id) {
      res.status(400).json({ message: 'ID parameter is required' });
      return;
    }

    try {
      const updatedAnnouncement = await prisma.announcement.update({
        where: { id: Number(id) },
        data: {
          tag,
          title,
          content,
          publication },
      });
      res.status(200).json(updatedAnnouncement);
    } catch (error) {
      console.error('Error updating announcement:', error);
      res.status(500).json({ error: 'Error updating announcement' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }
}
