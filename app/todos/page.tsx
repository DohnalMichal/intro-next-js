import db from '@/utils/db'
import TodoList from '@/components/TodoList'
import NewTodoForm from '@/components/NewTodoForm'

const getData = async () => {
  const todos = await db.todo.findMany()

  return todos
}

const TodosPage = async () => {
  const todos = await getData()

  return (
    <div className="flex flex-col justify-center gap-2">
      <NewTodoForm />
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
