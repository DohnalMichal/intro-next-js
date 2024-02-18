import { NextResponse } from 'next/server'
import db from '@/utils/db'

export const GET = async () => {
  const data = await db.todo.findMany({})

  return NextResponse.json({ data })
}

export const POST = async (request: Request) => {
  const data = await request.json()
  const todo = await db.todo.create({ data })

  return NextResponse.json({ data: todo })
}
