'use server'
import { revalidatePath } from 'next/cache'
import db from '@/utils/db'

const updateTodoAndRevalidate = async (id: string, completed: boolean) => {
  await db.todo.update({
    where: { id },
    data: {
      completed,
    },
  })

  revalidatePath('/todos')
}

export const completeTodo = async (id: string) => {
  await updateTodoAndRevalidate(id, true)
}

export const undoTodo = async (id: string) => {
  await updateTodoAndRevalidate(id, false)
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

export const deleteTodo = async (id: string) => {
  await db.todo.delete({
    where: { id },
  })

  revalidatePath('/todos')
}
