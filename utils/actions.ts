'use server'
import { revalidatePath } from 'next/cache'
import db from '@/utils/db'

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  })

  revalidatePath('/todos')
}

export const newTodo = async (formData: FormData) => {
  const newTodo = formData.get('content') as string

  if (newTodo === null) {
    throw new Error('Content is required in the form data.')
  }

  await db.todo.create({
    data: {
      content: newTodo,
    },
  })

  revalidatePath('/todos')
}
