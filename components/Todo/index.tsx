'use client'

import { useTransition } from 'react'
import { completeTodo, deleteTodo, undoTodo } from '@/utils/actions'
import { Root, Text, DeleteButton } from './styles'
import type { Props } from './types'

const Todo = ({ todo }: Props) => {
  const [, startTransition] = useTransition()

  const onUpdate = () => {
    startTransition(() =>
      todo.completed ? undoTodo(todo.id) : completeTodo(todo.id),
    )
  }

  const onDelete = () => {
    startTransition(() => deleteTodo(todo.id))
  }

  return (
    <Root completed={todo.completed} onClick={onUpdate}>
      <Text>{todo.content}</Text>
      <DeleteButton onClick={onDelete}>❌</DeleteButton>
    </Root>
  )
}

export default Todo
