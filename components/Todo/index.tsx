'use client'

import { useTransition } from 'react'
import { completeTodo } from '@/utils/actions'
import { Todo as StyledTodo, Text } from './styles'
import type { Props } from './types'

const Todo = ({ todo }: Props) => {
  const [, startTransition] = useTransition()

  return (
    <StyledTodo
      completed={todo.completed}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      <Text>{todo.content}</Text>
    </StyledTodo>
  )
}

export default Todo
