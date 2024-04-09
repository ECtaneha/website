import prisma from '../../lib/prisma'
import { announcement } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const data: announcement[] = await prisma.announcement.findMany()
  return NextResponse.json(data)
}

export async function HEAD(request: Request) {
  const data: announcement[] = await prisma.announcement.findMany()
  return NextResponse.json({ length: data.length })
}