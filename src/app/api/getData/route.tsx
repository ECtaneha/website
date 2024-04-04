import prisma from '../../lib/prisma'
import { Announcement } from '@prisma/client'
import { NextResponse } from 'next/server'
import { config } from "@/lib/config";

export async function GET(request: Request) {
  const url = config.apiPrefix + config.apiHost + "/api/user";
  const data: Announcement[] = await prisma.announcement.findMany()
  return NextResponse.json(data)
}

export async function HEAD(request: Request) {
  const data: Announcement[] = await prisma.announcement.findMany()
  return NextResponse.json({ length: data.length })
}