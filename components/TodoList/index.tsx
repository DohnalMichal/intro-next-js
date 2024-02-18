import Todo from '../Todo'
import type { Props } from './types'

const TodoList = ({ todos }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
