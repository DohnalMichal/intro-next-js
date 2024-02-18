import { NextResponse } from 'next/server'
import db from '@/utils/db'

type Props = {
  params: {
    id: string
  }
}

export const GET = async (request: Request, { params }: Props) => {
  const data = await db.todo.findUnique({ where: { id: params.id } })

  return NextResponse.json({ data })
}

export const DELETE = async (request: Request, { params }: Props) => {
  const todo = await db.todo.delete({ where: { id: params.id } })

  return NextResponse.json({ data: todo })
}
