import type { Todo as TodoType } from '@prisma/client'

export type Props = {
  todos: TodoType[]
}
